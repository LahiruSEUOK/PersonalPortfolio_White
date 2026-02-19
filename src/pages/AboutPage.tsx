import { MainLayout } from '../components/MainLayout';
import {
    Target,
    Rocket,
    Award
} from 'lucide-react';

import {
    FaJira,
    FaFigma,
    FaGithub,
    FaDocker,
    FaAws,
    FaSlack,
    FaTrello
} from 'react-icons/fa';
import { SiConfluence, SiNotion, SiPostman, SiTableau } from 'react-icons/si';


import { VscVscode } from 'react-icons/vsc';

export const AboutPage = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Lahiru Sandeepa
                    </h1>
                    <p className="text-xl text-gray-500 font-medium mb-8">
                        Project Manager | Business Analyst | Solution Architect
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Based in Sri Lanka, I transform complex business challenges into elegant, scalable software solutions. With 7+ years of professional experience and 3+ years in project management, I’ve led cross-functional teams delivering enterprise systems, SaaS platforms, and custom web applications.
                    </p>
                </section>

                {/* Who I Am Section */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <h2 className="text-6xl font-semibold text-gray-900">Who I Am</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                I bridge the gap between business strategy and technical execution.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With a background in financial services and a B.Sc. (Hons) in Software Engineering from the University of Kelaniya, I combine business insight with strong technical understanding to design solutions that are practical, scalable, and impactful.
                            </p>
                        </div>
                    </div>
                </section>

                {/* My Journey Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">My Journey</h2>
                            <p className="text-gray-500">From financial planning to leading enterprise tech solutions.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'The Foundation',
                                    desc: 'Began career as Executive Wealth Planner at AIA Insurance, mastering needs analysis and client-focused solution design. Later led IT modernization initiatives and operational strategy at Our Nation Pvt Ltd.',
                                    icon: <Target className="text-blue-600" size={24} />
                                },
                                {
                                    title: 'The Transition',
                                    desc: 'Transitioned fully into project management and business analysis in software development. Focused on bridging the communication gap between stakeholders and engineering teams.',
                                    icon: <Rocket className="text-blue-600" size={24} />
                                },
                                {
                                    title: 'Current Impact',
                                    desc: 'Currently Project Manager & Business Analyst at Cenzios Pvt Ltd, leading multiple web and SaaS products while pursuing an MBA in Project Management from Cardiff Metropolitan University.',
                                    icon: <Award className="text-blue-600" size={24} />
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 text-center border-y border-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            Turning ambiguity into clarity.
                        </h2>
                        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            I’m driven by the challenge of transforming complex, ambiguous business problems into clear, practical, and scalable solutions. I find deep satisfaction in bringing structure to uncertainty and turning ideas into systems that truly work.
                        </p>
                        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            For me, success isn’t just about delivery, it’s about meaningful impact. Whether it’s streamlining operations, improving efficiency, accelerating workflows, or making daily work easier for end users, I’m motivated by solutions that create lasting value and measurable progress.
                        </p>
                    </div>
                </section>

                {/* My Approach Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-16">My Approach</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: 'Clear Communication',
                                    desc: 'Keeping stakeholders aligned at every stage, ensuring transparency and managing expectations effectively.',
                                    id: '01'
                                },
                                {
                                    title: 'Data-Driven Decisions',
                                    desc: 'Designing scalable, maintainable, and user-friendly systems that stand the test of time and scale.',
                                    id: '02'
                                },
                                {
                                    title: 'Agile Adaptability',
                                    desc: 'Responding to change while protecting delivery momentum. Pragmatic application of Agile methodologies.',
                                    id: '03'
                                }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <span className="text-sm font-bold text-blue-600 uppercase">{item.id}</span>
                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise & Skills */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-semibold text-gray-900 mb-12">Core Expertise</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Project Management', desc: 'Agile/Scrum Leadership, Risk Mitigation, Resource Allocation' },
                                    { title: 'Business Analysis', desc: 'Requirement Gathering, Process Modeling, Stakeholder Management' },
                                    { title: 'Solution Architecture', desc: 'System Architecture, UX/UI Strategy, Tech Stack Selection' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold text-gray-900 mb-12">Technical Skills</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Methodologies', desc: 'RScrum, Kanban, Waterfall, Lean Six Sigma.' },
                                    { title: 'Documentation', desc: 'BRD, FRD, User Stories, API Specifications' },
                                    { title: 'Data Analytics', desc: 'SQL, Excel Advanced, Tableau, Power BI.' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools & Technologies */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-16">
                            Tools & Technologies
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: 'Jira', icon: <FaJira color="#2684FF" /> },
                                { name: 'Confluence', icon: <SiConfluence color="#172B4D" /> },
                                { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
                                { name: 'GitHub', icon: <FaGithub color="#181717" /> },
                                { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
                                { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
                                { name: 'AWS', icon: <FaAws color="#FF9900" /> },
                                { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
                                { name: 'Tableau', icon: <SiTableau color="#E97627" /> },
                                { name: 'Slack', icon: <FaSlack color="#4A154B" /> },
                                { name: 'Trello', icon: <FaTrello color="#0052CC" /> },
                                { name: 'Notion', icon: <SiNotion color="#000000" /> },
                            ].map((tool) => (
                                <div
                                    key={tool.name}
                                    className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <span className="text-lg">
                                        {tool.icon}
                                    </span>
                                    <span>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-semibold text-gray-900 mb-12">Education</h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">MBA – Project Management (In Progress)</h4>
                                    <p className="text-gray-500 mb-2">Cardiff Metropolitan University, UK</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">B.Sc. (Hons) in Software Engineering</h4>
                                    <p className="text-gray-500">University of Kelaniya</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold text-gray-900 mb-12">Certifications</h2>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-gray-500 mb-2">Agile Scrum Master</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Disciplined Agile</p>
                                    
                                </div>
                                <div>
                                    <p className="text-gray-500">PRINCE2 Preparation</p>
                                    
                                </div>
                                <div>
                                    <p className="text-gray-500">Software Architecture</p>
                                    
                                </div>
                                <div>
                                    <p className="text-gray-500">Generative AI for Project Managers</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Timeline */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">Career Timeline</h2>
                        <div className="relative border-l border-gray-200 ml-4 md:ml-0">
                            {[
                                {
                                    role: 'Project Manager & Business Analyst',
                                    company: 'Cenzios Pvt Ltd',
                                    period: '2021 - Present',
                                    desc: 'Leading digital transformation projects and software development lifecycles for global clients.'
                                },
                                {
                                    role: 'Associate Project Manager',
                                    company: 'Aventure IT',
                                    period: '2018 - 2021',
                                    desc: 'Managed high-value portfolios and developed strategic financial roadmaps for corporate clients.'
                                },
                                {
                                    role: 'Junior Analyst',
                                    company: 'Softlogic Finance',
                                    period: '2016 - 2018',
                                    desc: 'Analyzed market trends and supported senior management in operational decision making.'
                                }
                            ].map((job, i) => (
                                <div key={i} className="mb-12 ml-8 relative">
                                    <span className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-sm font-bold text-blue-600 mb-1 block">{job.period}</span>
                                    <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                                    <p className="text-gray-500 font-medium mb-4">{job.company}</p>
                                    <p className="text-gray-600 leading-relaxed">{job.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Beyond Work Section */}
                <section className="py-24 bg-black text-white px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-semibold mb-8">Beyond Work</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-12">
                            When I'm not optimizing workflows, I explore the landscapes of Sri Lanka through photography and mentoring young tech enthusiasts, believing that balance is the key to sustained creativity.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
