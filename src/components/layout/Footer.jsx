import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © 2025 Developer Portfolio. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/PradeepDev07" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition">GitHub</a>
          <a href="https://x.com/Pradeepdev54320" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition">Twitter</a>
          <a href="https://www.linkedin.com/in/pradeep-m07/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
