import { Anchor, AnchorLabel } from '@/components/anchor/Anchor'

// Component for individual technology badges 
const TechBadge = ({ tech }) => (
    <li className="mr-2 mb-2">
        <div className="flex items-center rounded-md bg-gradient-to-r from-teal-400/20 to-blue-400/20 
                  px-3 py-1 text-sm font-medium text-teal-700 border border-teal-200/60
                  shadow-sm transition-all duration-300 hover:from-teal-500/30 hover:to-blue-500/30
                  hover:shadow hover:scale-105">
            {tech}
        </div>
    </li>
);

// Component for individual project cards with enhanced visual design
const ProjectCard = ({ project }) => (
    <Anchor href={project.demoLink}>
        <AnchorLabel>
            <div className="border border-blue-100 rounded-lg overflow-hidden shadow-md mb-10
                transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1
                bg-gradient-to-br from-white to-sky-50 group">
                {/* Colored top bar for visual interest */}
                <div className="h-2 bg-gradient-to-r from-blue-400 to-teal-400"></div>

                <div className="px-6 py-8">
                    <h3 className="text-xl text-slate-800 tracking-wider font-semibold mb-4 
                    group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-md text-slate-600 leading-relaxed">{project.description}</p>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-medium">Technologies</h4>
                        <ul className="flex flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <TechBadge key={index} tech={tech} />
                            ))}
                        </ul>
                    </div>

                    {/* View project button */}
                    <div className="mt-6 text-right">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 
                      group-hover:text-blue-800 transition-colors duration-300">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </AnchorLabel>
    </Anchor>
);

// Main Projects component with improved layout and organization
const Projects = () => {
    const projectsData = [
        {
            title: "Transaction System",
            description: "In this project, I implemented a transaction system where employees can input customer purchases. This system updates the database with the relevant information, ensuring accurate and real-time tracking of transactions.",
            technologies: ["C#", "Blazor", "Bootstrap", "LinqPad 8"],
            demoLink: "/demo"
        },
        {
            title: "Frontend E-Commerce Website",
            description: "This responsive e-commerce front-end website allows users to browse, search, and buy products. The site includes a shopping cart and clear navigation and works well on both desktop and mobile. This project highlights my skills in creating user-friendly designs with modern front-end tools.",
            technologies: ["React", "Next.js", "Tailwind CSS"],
            demoLink: "/demoTwo"
        },
        {
            title: "ASP.NET Core Web API School Management",
            description: "This project implements a RESTful API using ASP.NET Core Web API .NET 8, demonstrating core CRUD operations and JWT-based authentication. The system is designed to manage basic school information with SQL Server as the backend database.",
            technologies: ["C#", "SQL", "Swagger UI"],
            demoLink: "/demoThree"
        }
    ];

    return (
        <div className="mt-8 px-8">
            <h2 id="project" className="text-3xl mb-2 tracking-wider font-sans font-semibold text-slate-800">
                My Projects
            </h2>
            <div className="h-1 w-24 mb-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>

            <div className="grid grid-cols-1 max-w-3xl mx-auto gap-4">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;