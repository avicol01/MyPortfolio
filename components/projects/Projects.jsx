import { Anchor, AnchorLabel } from '@/components/anchor/Anchor'

// Component for individual technology badges
const TechBadge = ({ tech }) => (
    <li>
        <div className="flex items-center rounded-lg bg-teal-400/10 px-4 py-2 text-s font-medium leading-5 mr-3">
            {tech}
        </div>
    </li>
);

// Component for individual project cards
const ProjectCard = ({ project }) => (
    <Anchor href={project.demoLink}>
        <AnchorLabel>
            <div className="border border-sky-950/10 rounded-sm shadow-md py-10 px-5 mb-8
                      bg-sky-300/15 hover:bg-sky-400/15 hover:drop-shadow-2xl">
                <h3 className="text-xl text-sky-900 tracking-wider font-semibold mb-5">
                    {project.title}
                </h3>
                <p className="text-md">{project.description}</p>
                <ul className="flex mt-5 text-blue-600">
                    {project.technologies.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                    ))}
                </ul>
            </div>
        </AnchorLabel>
    </Anchor>
);

// Main Projects component
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
        <div className="mt-[4rem] px-10">
            <h2 id="project" className="text-3xl mt-20 mb-6 tracking-wider font-sans font-semibold text-slate-800">
                My Projects
            </h2>
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;