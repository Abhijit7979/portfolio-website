import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
    if (!data) return null;

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
