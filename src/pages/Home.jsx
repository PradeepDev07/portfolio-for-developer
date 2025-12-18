import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArcHero from '../components/hero/ArcHero';
import ProjectOrbit from '../components/projects/ProjectOrbit';
import SkillNode from '../components/skills/SkillNode';
import { skills } from '../data/skills';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
    const [projectsRef, projectsVisible] = useScrollAnimation();
    const [skillsRef, skillsVisible] = useScrollAnimation();

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />

            <main>
                <ArcHero />

                <section ref={projectsRef} className={`py-20 px-6 max-w-7xl mx-auto transition-opacity duration-1000 ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                    <ProjectOrbit />
                </section>

                <section ref={skillsRef} className={`py-20 px-6 max-w-7xl mx-auto bg-zinc-900/30 transition-opacity duration-1000 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <SkillNode key={index} skill={skill} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;