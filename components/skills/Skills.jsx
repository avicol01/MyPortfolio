// Individual skill item component
const SkillItem = ({ skill }) => (
    <li>
        <div className="items-center rounded-lg bg-blue-300/55 px-4 py-2 text-sm font-medium leading-5 mr-3 mb-2">
            {skill}
        </div>
    </li>
);

// Category component with title and list of skills
const SkillCategory = ({ title, skills }) => (
    <>
        <h3 className="text-xl mb-3 tracking-wider font-sans font-semibold">{title}:</h3>
        <ul className="flex flex-wrap mb-4 border-b border-gray-400">
            {skills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
            ))}
        </ul>
    </>
);

// Main Skills component that contains all the data and renders everything
const Skills = () => {
    const skillsData = {
        'Programming Languages': ['JavaScript', 'Svelte', 'C#', 'Java', 'HTML & CSS'],
        'Frameworks': ['SvelteKit', 'Blazor', 'Next.js'],
        'Libraries': ['React', 'Tailwind CSS', 'Bootstrap'],
        'Database': ['Supabase', 'Firebase', 'SQL'],
        'Tools': ['Swagger UI', 'LinqPad', 'Trello'],
        'Version Control': ['GitHub'],
        'Operating Systems': ['Windows', 'MAC IOS', 'Ubuntu']
    };

    return (
        <div id="skills">
            <h2 className="text-3xl mt-20 mb-6 tracking-wider font-sans font-semibold text-slate-800">
                Technical Skills
            </h2>
            {Object.entries(skillsData).map(([category, skills], index) => (
                <SkillCategory key={index} title={category} skills={skills} />
            ))}
        </div>
    );
};

export default Skills;