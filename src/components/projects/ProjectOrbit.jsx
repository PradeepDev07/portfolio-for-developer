import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const categories = ['All', 'Front-end', 'Back-end', 'Full-stack', 'AI'];

const ProjectOrbit = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                            activeCategory === category
                                ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.5)]'
                                : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectOrbit;
