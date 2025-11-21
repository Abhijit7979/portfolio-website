import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
        >
            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-8 py-6 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700/50 flex justify-end gap-4">
                {project.github_link && (
                    <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Github size={18} className="mr-2" /> Code
                    </a>
                )}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
