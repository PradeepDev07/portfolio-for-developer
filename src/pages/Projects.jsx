import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectOrbit from '../components/projects/ProjectOrbit';

const Projects = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12">All Projects</h1>
                <ProjectOrbit />
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
