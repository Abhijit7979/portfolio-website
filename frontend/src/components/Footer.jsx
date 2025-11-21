import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data }) => {
    if (!data) return null;

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${data.contact.email}`} className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
