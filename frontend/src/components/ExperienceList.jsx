import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceList = ({ data }) => {
    if (!data) return null;

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        Experience
                    </h2>

                    <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-white dark:border-slate-800" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                        {exp.duration}
                                    </span>
                                </div>

                                <div className="flex items-center text-slate-600 dark:text-slate-300 mb-4">
                                    <Briefcase size={16} className="mr-2" />
                                    <span className="font-medium">{exp.company}</span>
                                    <span className="mx-2">•</span>
                                    <span>{exp.location}</span>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceList;
