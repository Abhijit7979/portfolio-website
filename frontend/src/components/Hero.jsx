import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
    if (!data) return null;

    const handleDownloadResume = () => {
        window.open(`${import.meta.env.VITE_API_URL}/resume/pdf`, '_blank');
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950 pointer-events-none"></div>

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
                        className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm"
                    >
                        Available for Hire
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">{data.name}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-light">
                        {data.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {data.summary.split('.')[0]}.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            onClick={handleDownloadResume}
                            className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                        >
                            <Download size={20} className="mr-2" />
                            Download Resume
                        </button>

                        <div className="flex items-center gap-4 ml-4">
                            {[
                                { icon: Github, href: data.contact.github },
                                { icon: Linkedin, href: data.contact.linkedin },
                                { icon: Mail, href: `mailto:${data.contact.email}` }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:scale-110"
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center overflow-hidden border-4 border-white/50 dark:border-slate-700/50">
                            <span className="text-8xl font-bold text-gradient select-none">
                                {data.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
