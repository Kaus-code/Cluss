'use client';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';

const projects = [
    {
        title: 'AI-Powered Study Plans',
        description:
            'Our intelligent engine analyzes your learning goals, available time, and knowledge gaps to generate a fully personalized study roadmap — so you always know what to do next.',
        link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
        color: '#e5e9eb',
    },
    {
        title: 'Deep Search Video',
        description:
            'Go beyond surface-level content. Our deep search dives into YouTube lectures, finds the exact timestamps, and surfaces the knowledge you need — instantly and accurately.',
        link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
        color: '#d4dce0',
    },
    {
        title: 'Smart Summarization',
        description:
            'Turn hours of video into minutes of reading. Our AI condenses entire playlists and lectures into crisp, well-structured notes you can review anytime.',
        link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
        color: '#c3cdd3',
    },
    {
        title: 'Collaborative Study Rooms',
        description:
            'Learn together in real-time. Create or join virtual study rooms where peers share notes, discuss concepts, and push each other toward mastery.',
        link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
        color: '#b2bfc6',
    },
    {
        title: 'Interactive AI Tutor',
        description:
            'Ask questions, get explanations, and explore topics in-depth with your personal AI tutor. It adapts to your level and learning style in real-time.',
        link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
        color: '#a1b1b9',
    },
];

interface CardProps {
    i: number;
    title: string;
    description: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    url,
    color,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="flex flex-col relative -top-[25%] h-[500px] w-[90%] max-w-[1100px] rounded-[40px] p-8 md:p-12 origin-top"
            >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="dot"></div>
                    <span className="text-sm font-medium text-gray-900">
                        {String(i + 1).padStart(2, '0')}
                    </span>
                </div>

                <div className="flex flex-col md:flex-row h-full gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-[40%] flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
                                {title}
                            </h2>
                            <p className="text-[15px] text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* CTA Button - Cluss style */}
                        <div className="mt-6">
                            <div className="group relative cursor-pointer w-fit px-6 py-3 bg-black text-white flex gap-2 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                                <div className="relative z-10 flex gap-2 group-hover:text-black transition-colors duration-500 items-center">
                                    <span>See more</span>
                                    <div className="group-hover:-rotate-45 transition-transform duration-500">
                                        <Image src={Logo} alt="Logo" width={18} height={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full md:w-[60%] h-48 md:h-full rounded-2xl overflow-hidden">
                        <motion.div
                            className="w-full h-full"
                            style={{ scale: imageScale }}
                        >
                            <Image
                                fill
                                src={url}
                                alt={title}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const StackingCards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <section ref={container} className="w-full">
            {/* Header */}
            <div className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-start gap-4 pt-20 pb-10 px-2 md:px-0">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                    <div className="dot"></div>
                    Featured Works
                </div>
                <h2 className="text-2xl md:text-4xl font-medium max-w-xl leading-tight text-gray-900">
                    We create a path for learning but you have to walk by yourself
                </h2>
            </div>

            {/* Stacking Cards */}
            <div>
                {projects.map((project, i) => {
                    const targetScale = 1 - (projects.length - i) * 0.05;
                    return (
                        <Card
                            key={`p_${i}`}
                            i={i}
                            url={project.link}
                            title={project.title}
                            color={project.color}
                            description={project.description}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default StackingCards;
