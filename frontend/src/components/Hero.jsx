import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Sparkles, Brain, Code2 } from 'lucide-react';

const Hero = ({ data }) => {
    const [hasPhoto, setHasPhoto] = useState(false);

    useEffect(() => {
        // Check if profile photo exists
        const img = new Image();
        img.onload = () => setHasPhoto(true);
        img.onerror = () => setHasPhoto(false);
        img.src = '/profile.jpeg';
    }, []);

    if (!data) return null;

    const handleDownloadResume = () => {
        window.open(`${import.meta.env.VITE_API_URL}/resume/pdf`, '_blank');
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950 pointer-events-none"></div>

            {/* Floating AI particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                        initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm border border-blue-200 dark:border-blue-800"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        AI Engineer • Available for Hire
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">{data.name}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4 font-light flex items-center justify-center md:justify-start gap-3">
                        <Brain className="text-blue-600 dark:text-blue-400" size={32} />
                        {data.title}
                    </h2>

                    <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                        {['RAG', 'LLMs', 'LangChain', 'FastAPI'].map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Building intelligent AI agents and production-ready ML systems. Specialized in LLM frameworks, vector databases, and agentic workflows.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            onClick={handleDownloadResume}
                            className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                        >
                            <Download size={20} className="mr-2" />
                            Download Resume
                        </button>

                        <div className="flex items-center gap-4 ml-4">
                            {[
                                { icon: Github, href: data.contact.github, color: 'hover:text-slate-900 dark:hover:text-white' },
                                { icon: Linkedin, href: data.contact.linkedin, color: 'hover:text-blue-600 dark:hover:text-blue-400' },
                                { icon: Mail, href: `mailto:${data.contact.email}`, color: 'hover:text-purple-600 dark:hover:text-purple-400' }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${item.color} hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:scale-110`}
                                >
                                    <item.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Animated gradient background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Main photo/avatar container */}
                        <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center overflow-hidden border-4 border-white/50 dark:border-slate-700/50">
                            {hasPhoto ? (
                                <img
                                    src="/profile.jpeg"
                                    alt={data.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-8xl font-bold text-gradient select-none">
                                    {data.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            )}
                        </div>

                        {/* Floating AI-themed elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl shadow-xl"
                        >
                            <Brain className="text-blue-600 dark:text-blue-400" size={32} />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl shadow-xl"
                        >
                            <Code2 className="text-purple-600 dark:text-purple-400" size={32} />
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-8 glass-card p-3 rounded-xl shadow-xl"
                        >
                            <Sparkles className="text-cyan-600 dark:text-cyan-400" size={24} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
