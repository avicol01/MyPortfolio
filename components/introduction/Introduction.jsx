"use client"

const IntroductionSection = () => {
    return (
        <section id="intro" className="text-slate-800 text-xl px-10">
            <h2 className="text-3xl mt-14 tracking-wider font-sans font-semibold">Introduction</h2>
            <p className="pt-10 text-sky-700 font-medium">
                Welcome to my Portfolio. Here you can find my story.
            </p>
            <p className="text-base pt-5">
                As a recent graduate from NAIT (Northern Alberta Institute of Technology), I have earned my diploma in Digital Media and IT - with focus on Computer Software Development. This comprehensive two-year program trained me as a full stack developer, allowing me to design and implement complete web applications from the ground up.
                I'm always keen to learn new tools and frameworks, refining my skills and staying current in the ever-growing field of software development. Please see my technical skills section to view the complete list of my competencies.
            </p>
            <p className="text-base pt-5 pb-2">
                In my previous career, my last role being a Financial Advisor in banking. I have advanced into various positions over time in the banking industry, each contributing to my diverse skill set. Those roles helped me accumulate the following skills:
            </p>
            <ul className="text-base list-disc pl-8 pb-2">
                <li>Develop team efficiency</li>
                <li>Analytical thinking</li>
                <li>Attentiveness to details</li>
                <li>Effective communication skills</li>
            </ul>
            <p className="text-base">
                <span className="italic text-lg">Then, I discovered my passion for coding and it inspired me to pursue a new path. </span>
                My prior experience has equipped me with invaluable skills that I believe are transferable to the field of software development.
            </p>
        </section>
    );
}

export default IntroductionSection;