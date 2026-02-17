import { MainLayout } from '../components/MainLayout';
import {
    Target,
    Rocket,
    Award
} from 'lucide-react';

export const AboutPage = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Lahiru Sandeepa
                    </h1>
                    <p className="text-xl text-gray-500 font-medium mb-8">
                        Project Manager | Business Analyst | Solution Architect
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Over 7+ years in the software industry, I specialize in transforming complex business
                        requirements into elegant, scalable solutions. Passionate about professional growth,
                        driving innovation and delivering high-impact business value.
                    </p>
                </section>

                {/* Who I Am Section */}
                <section className="py-24 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <h2 className="text-4xl font-bold text-gray-900">Who I Am</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                As a project manager and technical lead, I bridge the gap between business vision
                                and technical implementation. My approach is centered on clear communication,
                                strategic planning, and a deep understanding of the software development lifecycle.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                I believe that successful projects are built on strong foundations of trust,
                                collaboration, and a relentless focus on solving the right problems for the users.
                            </p>
                        </div>
                    </div>
                </section>

                {/* My Journey Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
                            <p className="text-gray-500">The milestones that shaped my professional path.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'The Foundation',
                                    desc: 'Started as a software engineer, gaining deep technical insights and a love for building products.',
                                    icon: <Target className="text-blue-600" size={24} />
                                },
                                {
                                    title: 'The Transition',
                                    desc: 'Evolved into leadership roles, focusing on project management and business strategy.',
                                    icon: <Rocket className="text-blue-600" size={24} />
                                },
                                {
                                    title: 'Current Impact',
                                    desc: 'Now leading large-scale enterprise solutions and mentoring the next generation of talent.',
                                    icon: <Award className="text-blue-600" size={24} />
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 text-center border-y border-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Turning ambiguity into clarity.
                        </h2>
                        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            I thrive on taking complex, undefined challenges and breaking them down into
                            structured, executable plans that deliver real-world impact and drive
                            sustainable business growth.
                        </p>
                    </div>
                </section>

                {/* My Approach Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-16">My Approach</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: 'Clear Communication',
                                    desc: 'Ensuring all stakeholders are aligned and informed throughout the project lifecycle.',
                                    id: '01'
                                },
                                {
                                    title: 'Data-Driven Decisions',
                                    desc: 'Using metrics and analysis to guide strategy and optimize outcomes.',
                                    id: '02'
                                },
                                {
                                    title: 'Agile Adaptability',
                                    desc: 'Embracing change and iterating quickly to deliver value in dynamic environments.',
                                    id: '03'
                                }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <span className="text-sm font-bold text-blue-600 uppercase">{item.id}</span>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise & Skills */}
                <section className="py-24 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Expertise</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Project Management', desc: 'Agile, Scrum, Waterfall methodologies.' },
                                    { title: 'Business Analysis', desc: 'Requirement gathering, process modeling, gap analysis.' },
                                    { title: 'Solution Architecture', desc: 'Designing scalable and robust software systems.' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Skills</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Full Stack Development', desc: 'React, Node.js, TypeScript, PostgreSQL.' },
                                    { title: 'Cloud Infrastructure', desc: 'AWS, Azure, Docker, Kubernetes.' },
                                    { title: 'Data Analytics', desc: 'Python, PowerBI, SQL, Tableau.' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-16">Tools & Technologies</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'Jira', 'Confluence', 'Figma', 'GitHub', 'VS Code', 'Docker', 'AWS',
                                'Postman', 'Tableau', 'PowerBI', 'Slack', 'Trello', 'Notion'
                            ].map((tool) => (
                                <span key={tool} className="px-6 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-gray-600 font-medium hover:border-blue-200 transition-colors">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <section className="py-24 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">MBA in Project Management</h4>
                                    <p className="text-gray-500 mb-2">Cardiff Metropolitan University | 2021</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">B.Sc. (Hons) in Software Engineering</h4>
                                    <p className="text-gray-500">Plymouth University | 2018</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Certifications</h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">PMP® Certification</h4>
                                    <p className="text-gray-500 mb-2">Project Management Institute</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">AWS Solution Architect</h4>
                                    <p className="text-gray-500">Amazon Web Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Timeline */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Career Timeline</h2>
                        <div className="relative border-l border-gray-200 ml-4 md:ml-0">
                            {[
                                {
                                    role: 'Project Manager & Business Analyst',
                                    company: 'Cenzios',
                                    period: '2021 - Present',
                                    desc: 'Leading digital transformation initiatives and managing multi-disciplinary teams.'
                                },
                                {
                                    role: 'Associate Project Manager',
                                    company: 'Innovate Tech',
                                    period: '2019 - 2021',
                                    desc: 'Facilitating agile ceremonies and coordinating cross-functional product development.'
                                },
                                {
                                    role: 'Software Engineer',
                                    company: 'DevSolutions',
                                    period: '2018 - 2019',
                                    desc: 'Developing full-stack web applications and optimizing system performance.'
                                }
                            ].map((job, i) => (
                                <div key={i} className="mb-12 ml-8 relative">
                                    <span className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-sm font-bold text-blue-600 mb-1 block">{job.period}</span>
                                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
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
                        <h2 className="text-4xl font-bold mb-8">Beyond Work</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-12">
                            When I'm not managing projects, I enjoy contributing to open-source software,
                            mentoring aspiring tech professionals, and exploring the latest trends in
                            AI and machine learning. I believe in giving back to the community and
                            continually expanding my horizons.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
