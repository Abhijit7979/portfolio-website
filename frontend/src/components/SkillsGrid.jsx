import React from 'react';
import { motion } from 'framer-motion';

const SkillsGrid = ({ data }) => {
    if (!data) return null;

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-accent mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsGrid;
