'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowRight, Dribbble, Instagram, Linkedin } from 'lucide-react';
import Logo from '../public/Logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const companyLinks = [
        'About', 'Services', 'Projects', 'For startups', 'Lab', 'Blog', 'Resources', 'Contacts', 'Careers', 'Testimonials'
    ];

    const servicesLinks = [
        'AI Study Planner', 'YouTube Q&A', 'Deep Topic Search', 'Instant PDF Notes', 'AI Quiz Generator', 'RAG Study Rooms', 'Progress Tracking', 'Gamification'
    ];

    const industriesLinks = [
        'K-12 Education', 'Higher Education', 'Coding Bootcamps', 'Language Learning', 'Test Prep', 'Corporate Training', 'Self-taught Devs', 'Skill Building'
    ];

    const socialLinks = [
        { icon: <Dribbble size={20} />, href: '#' },
        { icon: <span className="font-bold text-sm">Bē</span>, href: '#' },
        { icon: <Instagram size={20} />, href: '#' },
        { icon: <Linkedin size={20} />, href: '#' },
        { icon: <span className="font-bold text-sm">X</span>, href: '#' },
    ];

    return (
        <footer className="w-full bg-[#e5e9eb] px-6 md:px-12 py-16 font-sans text-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold mb-6">Company:</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-gray-500 transition-colors duration-200 block text-[15px]">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-semibold mb-6">Services:</h4>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-gray-500 transition-colors duration-200 block text-[15px]">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries Column */}
                    <div>
                        <h4 className="font-semibold mb-6">Industries:</h4>
                        <ul className="space-y-3">
                            {industriesLinks.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-gray-500 transition-colors duration-200 block text-[15px]">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscription & Social Column */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-6">Subscribe to our news and updates</h4>
                        <div className="relative mb-8 group">
                            <input
                                type="email"
                                placeholder="Your email here"
                                className="w-full bg-transparent border-b border-gray-400 py-2 pr-10 focus:outline-none focus:border-gray-900 transition-colors text-[15px]"
                            />
                            <button className="absolute right-0 bottom-2 text-gray-500 hover:text-gray-900 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-10">
                            By signing up, you agree to our <Link href="#" className="underline">Privacy Policy</Link>. We respect your data. Unsubscribe anytime.
                        </p>

                        <h4 className="font-semibold mb-6">Follow us on:</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 text-gray-700"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                    <div className="flex items-center gap-2 cursor-pointer order-2 md:order-1">
                        <Image src={Logo} alt="Cluss Logo" className="rounded-full w-8 h-8 object-cover" />
                        <span className="text-xl coiny text-[#666666]">cluss</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 order-3 md:order-2">
                        <span>© 2026 Cluss. All rights reserved</span>
                        <div className="w-1 h-1 rounded-full bg-black mx-1" />
                        <Link href="#" className="text-gray-900 font-medium">Privacy Policy</Link>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 md:absolute md:right-0 md:-top-6 order-1 md:order-3"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;