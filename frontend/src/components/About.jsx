import React from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
    if (!data) return null;

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        About Me
                    </h2>

                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {data.summary}
                        </p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Education</h3>
                                {data.education.map((edu, index) => (
                                    <div key={index} className="mb-4">
                                        <h4 className="font-medium text-slate-800 dark:text-slate-200">{edu.institution}</h4>
                                        <p className="text-accent">{edu.degree}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{edu.duration} | {edu.location}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Quick Info</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li><span className="font-medium text-slate-900 dark:text-white">Location:</span> Hyderabad, India</li>
                                    <li><span className="font-medium text-slate-900 dark:text-white">Email:</span> {data.contact.email}</li>
                                    <li><span className="font-medium text-slate-900 dark:text-white">Phone:</span> {data.contact.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
