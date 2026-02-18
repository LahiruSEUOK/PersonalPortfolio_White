import React from 'react';
import { MainLayout } from '../components/MainLayout';
import {
    Briefcase,
    BarChart3,
    Zap,
    Code,
    RefreshCw,
    Search,
    PenTool,
    Play,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, benefits, tags }: any) => (
    <div className="bg-white rounded-[32px] p-8 lg:p-12 mb-12 shadow-sm border border-gray-50">
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
                <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">What's included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {benefits.map((benefit: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="text-blue-600" size={16} />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:w-1/3 space-y-8">
                <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Methods & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string, i: number) => (
                            <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-gray-600 shadow-sm border border-gray-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const ServicesPage = () => {
    const services = [
        {
            icon: Briefcase,
            title: 'Project Management',
            description: 'I lead software projects from idea to delivery — managing scope, timelines, budgets, and cross-functional teams using Agile and hybrid methodologies.',
            benefits: ['Strategic project planning & roadmapping', 'Sprint planning & agile facilitation', 'Risk management & mitigation', 'Stakeholder communication & reporting','QA oversight & delivery governance'],
            tags: ['Agile', 'Scrum', 'Kanban', 'Jira', 'Monday.com', 'Trello']
        },
        {
            icon: BarChart3,
            title: 'Business Analysis',
            description: 'I translate business vision into clear, structured requirements that technical teams can execute with precision.',
            benefits: ['Requirement gathering & stakeholder interviews', 'Process mapping & workflow analysis', 'User story & backlog creation', 'Gap analysis & solution recommendations','Acceptance criteria definition'],
            tags: ['BPMN', 'UML', 'Data Modeling', 'Stakeholder Analysis', 'User Stories']
        },
        {
            icon: Zap,
            title: 'Solution Design & Architecture',
            description: 'I design scalable, maintainable system architectures that align technical capabilities with long-term business growth.',
            benefits: ['System architecture design', 'Workflow & integration planning', 'Database schema & API strategy', 'Scalability & performance considerations','Technical documentation'],
            tags: ['Microservices', 'AWS', 'Azure', 'System Design', 'API First']
        },
        {
            icon: Code,
            title: 'Custom Software Project Delivery',
            description: 'End-to-end leadership for custom software delivery — from concept to deployment.',
            benefits: ['Full lifecycle management', 'Cross-functional team coordination', 'Sprint & QA oversight', 'Deployment & release management'],
            tags: ['SaaS', 'Mobile Apps', 'Web Portals', 'Enterprise Software']
        },
        {
            icon: RefreshCw,
            title: 'Agile Transformation',
            description: 'I help teams adopt agile frameworks and optimize processes to increase delivery speed and performance.',
            benefits: ['Agile maturity assessment', 'Workflow optimization', 'Team training & coaching', 'KPI design & performance tracking'],
            tags: ['Lean', 'Agile Scaling', 'OKRs', 'Team Dynamics']
        }
    ];

    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Strategic Leadership for Complex Software Projects
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                        I provide end-to-end project management, business analysis, and solution design services for software development initiatives — helping organizations turn complex ideas into scalable digital solutions.
                    </p>
                </section>

                {/* Services List */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-32">
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                    ))}
                </section>

                {/* Process Section */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">How We Work</span>
                            <h2 className="text-4xl font-semibold text-gray-900 mt-4">A Structured Path to Success</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Search, title: '1. Discovery', desc: 'We explore your challenges, goals, and vision to ensure perfect alignment.' },
                                { icon: PenTool, title: '2. Strategy & Planning', desc: 'Detailed scope, timeline, strategy, and investment plan tailored to you' },
                                { icon: Play, title: '3. Execution', desc: 'Structured delivery with transparent communication and stakeholder alignment.' },
                                { icon: CheckCircle, title: '4. Delivery & Support', desc: 'Deployment, documentation, handover, and optional ongoing support' }
                            ].map((step, i) => (
                                <div key={i} className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                        <step.icon className="text-blue-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                            Let's Build Something That Scales.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Strategic leadership. Clear execution. Measurable results.
                        </p>
                        <div className="pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-3">
                                Schedule a Call
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
