'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        text: "Eloqwnt delivered the project ahead of schedule and met the client's expectations. The team communicated clearly and promptly, collaborated well, and provided excellent design input. Moreover, they were results-oriented and responsive to feedback.",
        name: "Sean Bockhold",
        role: "Product Owner, Quantum Data Technologies Inc",
        avatar: "https://i.pravatar.cc/150?u=sean"
    },
    {
        id: 2,
        text: "Eloqwnt's excellent designs received positive feedback and drew high foot traffic from walk-ins and influencers. The team was responsive and proactive, delivered on time, quickly adapted to feedback, and professionally managed the project.",
        name: "Dani Lledo",
        role: "Founder, Amor Fati Tattoo Studio",
        avatar: "https://i.pravatar.cc/150?u=dani"
    },
    {
        id: 3,
        text: "Eloqwnt delivered beyond expectations—on time, on budget, and with exceptional quality. Their responsiveness made every update effortless, and their attention to detail set them apart. A top-tier team we'd highly recommend.",
        name: "Nick Geeza",
        role: "CFO, Hennessy Capital",
        avatar: "https://i.pravatar.cc/150?u=nick"
    },
    {
        id: 4,
        text: "Working with them was a seamless experience. The final product exceeded my confidence in our branding and set us on a path to success. Truly exceptional work from start to finish.",
        name: "Sarah Miller",
        role: "Marketing Director, TechBridge",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        id: 5,
        text: "Their ability to translate complex requirements into intuitive designs is unmatched. We saw an immediate improvement in user engagement after the launch. Efficient, creative, and professional.",
        name: "Alex Reed",
        role: "CEO, InnovateNow",
        avatar: "https://i.pravatar.cc/150?u=alex"
    }
];

const TestimonialSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]  mt-10">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Header */}
                <div className="px-6 md:px-12 lg:px-24 mb-12">
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        Testimonials
                    </div>
                </div>

                {/* Cards Container */}
                <div className="flex items-center px-6 md:px-12 lg:px-24">
                    <motion.div style={{ x }} className="flex gap-8">
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[450px] bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col justify-between h-[450px]"
                            >
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                                    "{item.text}"
                                </p>

                                <div className="flex items-center justify-between mt-8">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
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
                            style={{ scaleX: scrollYProgress }}
                            className="absolute top-0 left-0 h-full bg-black origin-left w-full"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-all shadow-sm">
                            <ArrowLeft className="w-5 h-5 text-gray-900" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-all shadow-sm">
                            <ArrowRight className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;