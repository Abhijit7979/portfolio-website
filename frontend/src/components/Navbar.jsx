import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-2xl text-slate-800 dark:text-white cursor-pointer">
                        <Link to="hero" smooth={true} duration={500}>AR</Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 dark:text-slate-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-300"
                                >
                                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
