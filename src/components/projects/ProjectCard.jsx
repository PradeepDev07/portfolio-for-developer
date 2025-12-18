import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

const ProjectCard = ({ project }) => {
    return (
        <Card
            title={project.title}
            description={project.description}
            badge={project.badge}
        >
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <Link to={`/projects/${project.id}`} className="block w-full">
                <Button className="w-full">View Details</Button>
            </Link>
        </Card>
    );
};

export default ProjectCard;
