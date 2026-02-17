import React from 'react';
import { MainLayout } from '../components/MainLayout';
import {
    Search,
    PenTool,
    Code,
    CheckCircle2,
    Rocket,
    Handshake,
    MessageSquare,
    Clock,
    Zap,
    ShieldCheck,
    RefreshCw,
    ArrowRight
} from 'lucide-react';

const ProcessStep = ({ number, title, description, subItems, buttonText }: any) => (
    <div className="flex flex-col md:flex-row gap-12 mb-32 group">
        <div className="md:w-1/4">
            <span className="text-8xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors duration-500">
                {number}
            </span>
        </div>
        <div className="md:w-3/4 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {description}
            </p>
            <div className="grid grid-cols-2 gap-8">
                {subItems.map((item: any, i: number) => (
                    <div key={i} className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.label}</h4>
                        <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                ))}
            </div>
            {buttonText && (
                <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {buttonText} <ArrowRight size={20} />
                </button>
            )}
        </div>
    </div>
);

export const ProcessPage = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We begin by diving deep into your business requirements, goals, and technical landscape to build a rock-solid foundation for the project.',
            subItems: [
                { label: 'Key Activities', value: 'Requirement gathering, Stakeholder interviews, Market research.' },
                { label: 'Deliverables', value: 'Project roadmap, Detailed specification, Risk assessment.' }
            ],
            buttonText: 'View Planning Details'
        },
        {
            number: '02',
            title: 'Solution Design & Architecture',
            description: 'Our architects design a scalable, secure, and future-proof technical blueprint tailored to your specific needs.',
            subItems: [
                { label: 'Key Activities', value: 'System architecture, Database design, API definition.' },
                { label: 'Deliverables', value: 'Technical blueprint, Cloud architecture diagram, Data model.' }
            ],
            buttonText: 'Explore Architecture'
        },
        {
            number: '03',
            title: 'Agile Development & Execution',
            description: 'Detailed execution through iterative sprints, ensuring transparency and constant feedback throughout the build process.',
            subItems: [
                { label: 'Key Activities', value: 'Sprint planning, Daily stand-ups, Iterative coding.' },
                { label: 'Deliverables', value: 'Working software units, Sprint reports, Demo sessions.' }
            ],
            buttonText: 'Learn Development'
        },
        {
            number: '04',
            title: 'Quality Assurance & Testing',
            description: 'Rigorous validation to ensure the highest standards of performance, security, and user experience.',
            subItems: [
                { label: 'Key Activities', value: 'Unit testing, Integration testing, User acceptance testing.' },
                { label: 'Deliverables', value: 'QA reports, Bug-free code, Performance benchmarks.' }
            ],
            buttonText: 'Check Testing Process'
        },
        {
            number: '05',
            title: 'Deployment & Release',
            description: 'Careful launch and environment setup, ensures a smooth transition to the production environment.',
            subItems: [
                { label: 'Key Activities', value: 'CI/CD pipeline setup, Environment validation, Final go-live.' },
                { label: 'Deliverables', value: 'Live application, Deployment logs, Security audit.' }
            ],
            buttonText: 'View Launch Steps'
        },
        {
            number: '06',
            title: 'Handover, Training & Support',
            description: 'Ensuring your team is fully equipped to manage and scale the solution after the final release.',
            subItems: [
                { label: 'Key Activities', value: 'User training, Documentation handover, Maintenance planning.' },
                { label: 'Deliverables', value: 'Training manuals, Complete documentation, Support plan.' }
            ],
            buttonText: 'Explore Support'
        }
    ];

    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        A Structured Yet Flexible Approach to Software Delivery
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                        I combine rigorous engineering principles with agile flexibility to deliver high-impact software solutions.
                    </p>
                </section>

                {/* Steps */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <ProcessStep key={i} {...step} />
                    ))}
                </section>

                {/* Communication Section */}
                <section className="py-24 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Transparent & Structured Communication</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-white p-10 rounded-[32px] shadow-sm space-y-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <MessageSquare className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Weekly Progress Updates</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Regular check-ins to review progress, discuss challenges, and align on next steps. We maintain full visibility into every stage of development.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-[32px] shadow-sm space-y-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <Zap className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Real-Time Sync</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Direct access to project boards and communication channels for instant feedback and rapid decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Flexible by Design */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-4xl font-bold text-gray-900">Flexible by Design</h2>
                        <p className="text-xl text-gray-500">Tailoring the process to fit your specific needs and team dynamics.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                            {[
                                { icon: ShieldCheck, label: 'Quality First' },
                                { icon: Clock, label: 'Time-to-Market' },
                                { icon: RefreshCw, label: 'Iterative Flow' },
                                { icon: Handshake, label: 'Collaboration' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto">
                                        <item.icon className="text-blue-600" size={24} />
                                    </div>
                                    <span className="font-bold text-gray-900">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What You Can Expect */}
                <section className="py-24 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h2 className="text-4xl font-bold text-gray-900">What You Can Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto pt-8">
                            {[
                                'Full transparency at every stage',
                                'Predictable delivery timelines',
                                'Highest engineering standards',
                                'Dedicated technical support',
                                'Collaborative design process',
                                'Scalable & secure outcomes'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-600" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Let's combine our expertise to build something truly exceptional.
                        </p>
                        <div className="pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">
                                Start My Project
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
