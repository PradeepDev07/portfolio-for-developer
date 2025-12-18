import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Link to="/projects" className="text-purple-400 hover:text-purple-300">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link to="/projects" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition">
                        <FaArrowLeft className="mr-2" /> Back to Projects
                    </Link>

                    {/* Header Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm font-medium border border-purple-500/20">
                                {project.badge}
                            </span>
                            <span className="text-zinc-500 text-sm">
                                {project.tags.join(' • ')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Project Image */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10 bg-zinc-900">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    {project.longDescription}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start text-zinc-400">
                                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                                <div className="space-y-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button className="w-full flex items-center justify-center gap-2">
                                            <FaExternalLinkAlt size={14} /> Live Demo
                                        </Button>
                                    </a>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                            <FaGithub size={16} /> View Code
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-400 text-sm border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
