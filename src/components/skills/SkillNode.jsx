import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaCode
} from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiTypescript, SiMongodb } from 'react-icons/si';

const iconMap = {
    "HTML5": { icon: FaHtml5, color: "#E34F26" },
    "CSS3": { icon: FaCss3Alt, color: "#1572B6" },
    "JavaScript": { icon: FaJs, color: "#F7DF1E" },
    "React": { icon: FaReact, color: "#61DAFB" },
    "Node.js": { icon: FaNodeJs, color: "#339933" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "Python": { icon: FaPython, color: "#3776AB" },
    "Docker": { icon: FaDocker, color: "#2496ED" },
    "Git": { icon: FaGitAlt, color: "#F05032" },
    "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "MongoDB": { icon: SiMongodb, color: "#47A248" },
};

const SkillNode = ({ skill }) => {
    const { icon: Icon, color } = iconMap[skill.name] || { icon: FaCode, color: "#A855F7" };

    // Circular progress configuration
    const size = 80;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <div className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            {/* Circular Progress Container */}
            <div className="relative flex items-center justify-center mb-4">
                {/* SVG Progress Ring */}
                <svg width={size} height={size} className="transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        className="text-zinc-800"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={32} color={color} className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
            </div>

            {/* Skill Name & Level */}
            <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                <span className="text-sm font-medium" style={{ color: color }}>{skill.level}%</span>
            </div>

            {/* Glow Effect on Hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
            />
        </div>
    );
};

export default SkillNode;
