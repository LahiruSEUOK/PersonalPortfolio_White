import React from 'react';
import { MainLayout } from '../components/MainLayout';
import {
    CheckCircle2,
    Handshake,
    MessageSquare,
    Clock,
    Zap,
    ShieldCheck,
    RefreshCw,
    ArrowRight
} from 'lucide-react';

const ProcessStep = ({ number, title, description, keyActivities, deliverables, duration }: any) => (
    <div className="flex flex-col md:flex-row gap-12 mb-32 group">
        <div className="md:w-1/4">
            <span className="text-8xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors duration-500">
                {number}
            </span>
        </div>
        <div className="md:w-3/4 space-y-8">
            <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {description}
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Key Activities</h4>
                    <ul className="space-y-1">
                        {keyActivities.map((item: string, i: number) => (
                            <li key={i} className="text-gray-900 font-medium">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Deliverables</h4>
                    <ul className="space-y-1">
                        {deliverables.map((item: string, i: number) => (
                            <li key={i} className="text-gray-900 font-medium">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {duration && (
                <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold text-gray-600">Typical Duration: {duration}</span>
                </div>
            )}
        </div>
    </div>
);

export const ProcessPage = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We begin with deep discovery to understand your business objectives, stakeholders, constraints, and success criteria.',
            keyActivities: [
                'Stakeholder interviews',
                'Requirements gathering',
                'Feasibility assessment',
                'Risk identification',
                'Budget & resource planning',
                'Timeline development',
            ],
            deliverables: [
                'Project charter',
                'Scope statement',
                'Roadmap',
                'Risk register',
                'Resource plan',
            ],
            duration: '1–2 weeks',
        },
        {
            number: '02',
            title: 'Solution Design & Architecture',
            description: 'Designing the technical blueprint that aligns business goals with scalable architecture.',
            keyActivities: [
                'System architecture design',
                'Workflow & data modeling',
                'API & integration planning',
                'UI/UX collaboration',
                'Security & scalability planning',
            ],
            deliverables: [
                'Architecture documentation',
                'Technical specs',
                'Workflow diagrams',
                'Database design',
            ],
            duration: '2–4 weeks',
        },
        {
            number: '03',
            title: 'Agile Development & Execution',
            description: 'Iterative sprint based development with transparent collaboration and continuous stakeholder feedback.',
            keyActivities: [
                'Sprint planning & backlog prioritization',
                'Daily standups',
                'Cross functional coordination',
                'Sprint reviews & demos',
                'Retrospectives',
                'Progress tracking',
            ],
            deliverables: [
                'Working software increments',
                'Sprint reports',
                'Burn down charts',
            ],
            duration: '2–6 months',
        },
        {
            number: '04',
            title: 'Quality Assurance & Testing',
            description: 'Ensuring the solution meets business requirements and performance standards through structured testing.',
            keyActivities: [
                'Test case development',
                'Functional & integration testing',
                'Performance testing',
                'UAT facilitation',
                'Bug tracking & resolution',
            ],
            deliverables: [
                'Test plans',
                'QA reports',
                'UAT sign off',
            ],
            duration: 'Ongoing + 1–2 weeks final',
        },
        {
            number: '05',
            title: 'Deployment & Release',
            description: 'Coordinated transition from development to production with minimal risk and maximum stability.',
            keyActivities: [
                'Deployment planning',
                'Environment validation',
                'Data migration',
                'Release coordination',
                'Go live support',
            ],
            deliverables: [
                'Deployment plan',
                'Release notes',
                'Go live checklist',
            ],
            duration: '1–2 weeks',
        },
        {
            number: '06',
            title: 'Handover, Training & Support',
            description: 'Smooth transition with comprehensive documentation, training, and post launch support.',
            keyActivities: [
                'User & admin training',
                'Documentation delivery',
                'Knowledge transfer',
                'Performance monitoring',
                'Maintenance planning',
            ],
            deliverables: [
                'User manuals',
                'Admin guides',
                'Support protocols',
                'Maintenance plan',
            ],
            duration: '2–4 weeks',
        },
    ];

    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        A Structured Yet Flexible Approach to Software Delivery
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                        I follow a strategic, phased approach tailored to project complexity, team size, and organizational culture — balancing structure with adaptability to deliver measurable results.
                    </p>
                </section>

                {/* Steps */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <ProcessStep key={i} {...step} />
                    ))}
                </section>

                {/* Communication Section */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-16">Transparent & Structured Communication</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* How I Keep You Informed */}
                            <div className="bg-white p-10 rounded-[32px] shadow-sm space-y-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <MessageSquare className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">How I Keep You Informed</h3>
                                <ul className="space-y-2 text-gray-600 leading-relaxed">
                                    <li><span className="font-semibold text-gray-800">Daily Standups</span> — team sync</li>
                                    <li><span className="font-semibold text-gray-800">Weekly Status Reports</span></li>
                                    <li><span className="font-semibold text-gray-800">Bi-weekly Sprint Reviews</span></li>
                                    <li><span className="font-semibold text-gray-800">Monthly Steering Meetings</span></li>
                                    <li><span className="font-semibold text-gray-800">Ad-hoc updates</span> for critical decisions</li>
                                </ul>
                            </div>
                            {/* Tools I Use */}
                            <div className="bg-white p-10 rounded-[32px] shadow-sm space-y-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <Zap className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Tools I Use</h3>
                                <div className="space-y-3 text-gray-600">
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Project Management</span>
                                        <p className="font-medium text-gray-800">Jira, ClickUp, MS Project</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Communication</span>
                                        <p className="font-medium text-gray-800">Slack, Microsoft Teams</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Documentation</span>
                                        <p className="font-medium text-gray-800">Confluence, Notion, Google Docs</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Collaboration</span>
                                        <p className="font-medium text-gray-800">Figma, GitHub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Flexible by Design */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-4xl font-semibold text-gray-900">Flexible by Design</h2>
                        <p className="text-xl text-gray-500">I adapt the framework to your organization.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                            {[
                                { icon: ShieldCheck, label: 'Waterfall', description: 'Structured upfront planning, phased delivery.' },
                                { icon: RefreshCw, label: 'Agile', description: 'Iterative sprints, continuous feedback.' },
                                { icon: Clock, label: 'Hybrid', description: 'Balanced structure with agility.' },
                                { icon: Handshake, label: 'Remote Teams', description: 'Optimized digital collaboration workflows.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                        <item.icon className="text-blue-600" size={24} />
                                    </div>
                                    <span className="font-bold text-gray-900 block">{item.label}</span>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What You Can Expect */}
                <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h2 className="text-4xl font-semibold text-gray-900">What You Can Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto pt-8">
                            {[
                                'Full transparency',
                                'Proactive risk management',
                                'Continuous alignment',
                                'Strong quality control',
                                'Realistic planning',
                                'Comprehensive docs',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Let's discuss your goals and build a structured plan for success.
                        </p>
                        <div className="pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};