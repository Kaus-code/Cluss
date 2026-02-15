'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion';
import { Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        text: "Cluss transformed my messy YouTube favorites into a real computer science curriculum. The AI-generated study plan kept me on track for my full-stack finals without feeling overwhelmed.",
        name: "Sean Bockhold",
        role: "Computer Science Student, Georgia Tech",
        avatar: "https://i.pravatar.cc/150?u=sean"
    },
    {
        id: 2,
        text: "The Deep Search feature is a game-changer. I can jump directly to the complex theory parts of a 3-hour tutorial instead of scrubbing through the whole video. It saves me hours every single week.",
        name: "Dani Lledo",
        role: "Self-taught Developer & UI/UX Expert",
        avatar: "https://i.pravatar.cc/150?u=dani"
    },
    {
        id: 3,
        text: "As an educator, I recommend Cluss to all my students. The AI Quiz generator helps them verify their knowledge immediately after watching a lecture, turning passive watching into active learning.",
        name: "Nick Geeza",
        role: "High School Mathematics Educator",
        avatar: "https://i.pravatar.cc/150?u=nick"
    },
    {
        id: 4,
        text: "The credit system is very fair. I use my daily free credits for quick Q&A on tutorials, and the Pro plan is perfect for my intensive deep-dives where I need to roll over unused credits.",
        name: "Sarah Miller",
        role: "Lifelong Learner & Technical Writer",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        id: 5,
        text: "I used to get distracted by YouTube's feed. With Cluss, I just paste the link and stay focused in my dedicated study room. The GitHub-style heatmap is a huge motivator for my daily streaks.",
        name: "Alex Reed",
        role: "Bootcamp Graduate & Software Engineer",
        avatar: "https://i.pravatar.cc/150?u=alex"
    }
];

const CARD_WIDTH = 450;
const GAP = 32; // gap-8 = 2rem = 32px
const STEP = CARD_WIDTH + GAP;

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const rawX = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 300, damping: 40 });

    // Calculate max scrollable index based on container width
    useEffect(() => {
        const updateMax = () => {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            const totalWidth = testimonials.length * STEP - GAP;
            const maxScroll = totalWidth - containerWidth;
            const maxIdx = Math.max(0, Math.ceil(maxScroll / STEP));
            setMaxIndex(maxIdx);
        };
        updateMax();
        window.addEventListener('resize', updateMax);
        return () => window.removeEventListener('resize', updateMax);
    }, []);

    const goTo = useCallback((index: number) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
        rawX.set(-clamped * STEP);
    }, [maxIndex, rawX]);

    const handlePrev = () => goTo(currentIndex - 1);
    const handleNext = () => goTo(currentIndex + 1);

    // Drag handling
    const dragStartX = useRef(0);

    const handleDragStart = () => {
        dragStartX.current = rawX.get();
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        // Determine direction based on drag distance + velocity
        if (offset < -50 || velocity < -300) {
            goTo(currentIndex + 1);
        } else if (offset > 50 || velocity > 300) {
            goTo(currentIndex - 1);
        } else {
            // Snap back to current position
            goTo(currentIndex);
        }
    };

    const progress = maxIndex > 0 ? currentIndex / maxIndex : 0;

    return (
        <section className="relative mt-10 py-20">
            <div className="flex flex-col justify-center overflow-hidden">

                {/* Header */}
                <div className="px-6 md:px-12 lg:px-24 mb-12">
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        Testimonials
                    </div>
                </div>

                {/* Cards Container */}
                <div
                    ref={containerRef}
                    className="flex items-center px-6 md:px-12 lg:px-24 overflow-hidden cursor-grab active:cursor-grabbing"
                >
                    <motion.div
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: -maxIndex * STEP, right: 0 }}
                        dragElastic={0.15}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        className="flex gap-8"
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[450px] bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col justify-between h-[450px] select-none"
                            >
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium pointer-events-none">
                                    &quot;{item.text}&quot;
                                </p>

                                <div className="flex items-center justify-between mt-8">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                className="object-cover pointer-events-none"
                                                draggable={false}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                            <p className="text-sm text-gray-500 max-w-[200px] line-clamp-1">{item.role}</p>
                                        </div>
                                    </div>

                                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                                        <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Controls */}
                <div className="px-6 md:px-12 lg:px-24 mt-20 flex items-center justify-between">
                    {/* Progress Bar */}
                    <div className="flex-1 max-w-2xl h-[2px] bg-gray-200 relative">
                        <motion.div
                            animate={{ scaleX: progress }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute top-0 left-0 h-full bg-black origin-left w-full"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-900" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ArrowRight className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;