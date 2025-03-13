"use client"

const IntroductionSection = () => {
    return (
        <section id="intro" className="text-slate-800">
            <div className="bg-gradient-to-r from-sky-100/60 to-blue-100/60 p-5 rounded-lg border-l-4 border-sky-400 mb-8 shadow-sm">
                <p className="text-sky-700 font-medium text-lg">
                    Welcome to my Portfolio. Here you can find my story.
                </p>
            </div>

            <div className="mb-3 leading-relaxed">
                <p className="text-base mb-3">
                    As a recent graduate from <span className="font-medium text-blue-900">NAIT (Northern Alberta Institute of Technology)</span>,
                    I have earned my diploma in <span className="font-medium">Digital Media and IT</span> - with focus on
                    <span className="font-medium"> Computer Software Development</span>. This comprehensive two-year program
                    trained me as a full stack developer, allowing me to design and implement
                    complete web applications from the ground up.
                </p>
                <p className="text-base">
                    I'm always keen to learn new tools and frameworks, refining my skills and
                    staying current in the ever-growing field of software development.
                    Please see my technical skills section to view the complete list of my competencies.
                </p>
            </div>

            <div className="pt-3">
                <h3 className="text-lg font-medium text-slate-700 mb-4">Previous Experience</h3>
                <p className="text-base mb-4">
                    In my previous career, my last role being a Financial Advisor in banking.
                    I have advanced into various positions over time in the banking industry,
                    each contributing to my diverse skill set. Those roles helped me accumulate the following skills:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {[
                        "Develop team efficiency",
                        "Analytical thinking",
                        "Attentiveness to details",
                        "Effective communication skills"
                    ].map((skill, index) => (
                        <li key={index} className="flex items-center text-base">
                            <div className="mr-2 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <p className="text-base">
                    <span className="inline italic text-lg text-blue-800 mb-3">
                        Then, I discovered my passion for coding and it inspired me to pursue a new path.
                    </span>
                    <span> </span>
                    My prior experience has equipped me with invaluable skills that are
                    transferable to the software development field.
                </p>
            </div>
        </section>
    );
}

export default IntroductionSection;