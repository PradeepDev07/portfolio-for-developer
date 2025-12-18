import React from 'react';
import Button from '../common/Button';
import  Logo from '/Portfoliologo.png';

const ArcHero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="mb-10 flex justify-center relative">
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/30 blur-[60px] rounded-full" />

                    <div className="relative z-10 animate-float">
                        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full md:rounded-[2rem] p-1.5 bg-gradient-to-br from-white/20 via-purple-500/20 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105">
                            <div className="w-full h-full rounded-full md:rounded-[1.7rem] overflow-hidden border border-white/10 bg-zinc-900/50">
                               {/*PROFILE IMAGE LOCATED*/} <img
                                     src={Logo}
                                    alt="Developer"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Decorative badge for desktop */}
                        <div className="hidden md:flex absolute -right-3 -bottom-3 w-10 h-10 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/10 items-center justify-center shadow-lg animate-pulse-glow">
                            <span className="text-lg">⚡️</span>
                        </div>
                    </div>
                </div>

                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300">
                    Available for hire
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Building digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        experiences
                    </span>
                </h1>

                <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                    I'm a full-stack developer specializing in building exceptional digital experiences.
                    Currently focused on building accessible, human-centered products.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" className="px-8 py-3 text-base">
                        View Projects
                    </Button>
                    <Button variant="outline" className="px-8 py-3 text-base">
                        Contact Me
                    </Button>
                </div>
            </div>

            {/* Decorative Arc */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
};

export default ArcHero;
