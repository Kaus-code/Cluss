'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    { id: '01', name: 'Smart Course Search' },
    { id: '02', name: 'Personalized Study Planner' },
    { id: '03', name: 'AI Teaching Assistant' },
    { id: '04', name: 'Knowledge Checkpoints' },
    { id: '05', name: 'Progress & Gamification' },
];

const ServicesSection = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center">
            <div className="w-[90vw] bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-gray-100">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        Our services
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium max-w-2xl leading-tight text-gray-900">
                        We create solutions but most importantly we identify problems.
                    </h2>
                </div>

                {/* Services List */}
                <div className="w-full flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex items-center border-t border-gray-100 py-6 md:py-8 cursor-pointer hover:bg-gray-50 transition-colors duration-300 px-4 -mx-4 rounded-xl"
                        >
                            {/* Left: Index */}
                            <span className="text-sm md:text-base font-medium text-gray-900 w-16 md:w-32 group-hover:translate-x-4 transition-transform duration-300 ease-out">
                                {service.id}
                            </span>

                            {/* Center: Service Name */}
                            <h3 className="text-xl md:text-2xl font-medium flex-1 text-gray-900 group-hover:translate-x-4 transition-transform duration-300 ease-out">
                                {service.name}
                            </h3>

                            {/* Right: Arrow Icon */}
                            <div className="flex justify-end group-hover:-translate-x-4 transition-transform duration-300 ease-out">
                                <ArrowRight
                                    className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:text-gray-500 transition-colors duration-300"
                                    strokeWidth={1.2}
                                />
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom border for the last item */}
                    <div className="border-t border-gray-100" />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;