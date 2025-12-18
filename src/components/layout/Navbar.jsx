import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Portfoliologo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/50 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-white">
                    <img src={Logo} alt="Portfolio Logo" className="h-8 w-auto inline-block" />
                    ortfolio
                </Link>

                <div className="flex gap-8">
                    <Link to="/" className="text-sm text-zinc-400 hover:text-white transition">
                        Home
                    </Link>
                    <Link to="/projects" className="text-sm text-zinc-400 hover:text-white transition">
                        Projects
                    </Link>
                    <Link to="/contact" className="text-sm text-zinc-400 hover:text-white transition">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
