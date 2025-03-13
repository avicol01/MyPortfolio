// individual skill item 
const SkillItem = ({ skill }) => (
    <li className="inline-block mb-3 mr-3">
        <div className="flex items-center rounded-md bg-gradient-to-r from-blue-400/30 to-sky-400/40 
                    px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300
                    hover:from-blue-500/40 hover:to-sky-500/50 hover:shadow-md
                    border border-blue-200/50">
            {skill}
        </div>
    </li>
);

// Improved category 
const SkillCategory = ({ title, skills }) => {
    return (
        <div className="mb-3 bg-white/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg mb-2 tracking-wider font-sans font-semibold text-slate-700">
                {title}
            </h3>

            <ul className="flex flex-wrap mt-1 pt-2 border-t border-gray-200">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </ul>
        </div>
    );
};

// Main Skills component
const Skills = () => {
    const skillsData = {
        'Programming Languages': ['JavaScript', 'Svelte', 'C#', 'HTML & CSS'],
        'Frameworks': ['SvelteKit', 'Blazor', 'Next.js'],
        'Libraries': ['React', 'Tailwind CSS', 'Bootstrap'],
        'Database': ['Supabase', 'Firebase', 'SQL'],
        'Tools': ['Swagger UI', 'LinqPad', 'Trello'],
        'Operating Systems': ['Windows', 'MAC IOS', 'Ubuntu'],
        'Version Control': ['GitHub']

    };

    return (
        <div className="py-10">
            <div id="skills">
                <h2 className="text-3xl tracking-wider font-sans font-semibold text-slate-800 m-3">
                    Technical Skills
                </h2>
                <div className="h-1 w-24 mt-2 mb-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full ml-4"></div>
                <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <SkillCategory key={index} title={category} skills={skills} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;