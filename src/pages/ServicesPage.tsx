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
    ArrowRight,
    Wrench,
    Rocket,
    BarChart,
    FileText,
    Layers,
    Package
    
} from 'lucide-react';

interface SubSection {
    label: string;
    paragraph: string;
}

interface RightSection {
    label: string;
    paragraph?: string;
    tags?: string[];
    subSections?: SubSection[];
}

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
    benefits: string[];
    right: RightSection;
}

const ServiceCard = ({ icon: Icon, title, description, benefits, right }: ServiceCardProps) => (
    <div className="bg-white rounded-[32px] p-8 lg:p-12 mb-12 shadow-sm border border-gray-50">
        {/* Top: Icon + Title + Description — full width */}
        <div className="mb-10">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <Icon className="text-gray-700" size={22} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                {description}
            </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-8" />

        {/* Bottom: Left = What's Included, Right = Dynamic content */}
        <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: What's Included */}
            <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">What's Included</h4>
                <ul className="space-y-2">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="text-gray-400 flex-shrink-0" size={15} />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Dynamic content */}
            <div className="lg:w-2/5 space-y-6">
                {/* Primary section: label + optional paragraph + optional tags */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{right.label}</h4>
                    {right.paragraph && (
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{right.paragraph}</p>
                    )}
                    {right.tags && right.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {right.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 border border-gray-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Optional sub-sections (e.g. "Ideal For" below "Deliverables") */}
                {right.subSections && right.subSections.map((sub, i) => (
                    <div key={i}>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{sub.label}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{sub.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const ServicesPage = () => {
    const services: ServiceCardProps[] = [
        {
            icon: BarChart,
            title: 'Project Management',
            description: 'I lead software projects from idea to delivery — managing scope, timelines, budgets, and cross-functional teams using Agile and hybrid methodologies.',
            benefits: [
                'Strategic project planning & roadmapping',
                'Sprint planning & agile facilitation',
                'Risk management & mitigation',
                'Stakeholder communication & reporting',
                'QA oversight & delivery governance'
            ],
            right: {
                label: 'Ideal For & Tools',
                paragraph: 'Organizations building custom software, SaaS products, web applications, or enterprise platforms.',
                tags: ['Agile', 'Scrum', 'Kanban', 'Jira', 'ClickUp', 'MS Project']
            }
        },
        {
            icon: FileText,
            title: 'Business Analysis',
            description: 'I translate business vision into clear, structured requirements that technical teams can execute with precision.',
            benefits: [
                'Requirement gathering & stakeholder interviews',
                'Process mapping & workflow analysis',
                'User story & backlog creation',
                'Gap analysis & solution recommendations',
                'Acceptance criteria definition'
            ],
            right: {
                label: 'Deliverables',
                paragraph: 'Requirements documents, user stories, process maps, functional specifications.',
                subSections: [
                    {
                        label: 'Ideal For',
                        paragraph: 'Organizations needing clarity before development or alignment between business and tech teams.'
                    }
                ]
            }
        },
        {
            icon: Layers,
            title: 'Solution Design & Architecture',
            description: 'I design scalable, maintainable system architectures that align technical capabilities with long-term business growth.',
            benefits: [
                'System architecture design',
                'Workflow & integration planning',
                'Database schema & API strategy',
                'Scalability & performance considerations',
                'Technical documentation'
            ],
            right: {
                label: 'Expertise Areas',
                paragraph: '',
                tags: ['SaaS Platforms', 'Enterprise Systems', 'LMS', 'HR/Payroll', 'Workflow Tools']
            }
        },
        {
            icon: Package,
            title: 'Custom Software Project Delivery',
            description: 'End-to-end leadership for custom software delivery — from concept to deployment.',
            benefits: [
                'Full lifecycle management',
                'Cross-functional team coordination',
                'Sprint & QA oversight',
                'Deployment & release management'
            ],
            right: {
                label: 'Project Types',
                paragraph: '',
                tags: ['Web Apps', 'SaaS Platforms', 'CRM Systems', 'Enterprise Software']
            }
        },
        {
            icon: Zap,
            title: 'Agile Transformation',
            description: 'I help teams adopt agile frameworks and optimize processes to increase delivery speed and performance.',
            benefits: [
                'Agile maturity assessment',
                'Workflow optimization',
                'Team training & coaching',
                'KPI design & performance tracking'
            ],
            right: {
                label: 'Frameworks',
                paragraph: '',
                tags: ['Agile', 'Scrum', 'Kanban', 'Hybrid Models']
            }
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

                        {/* Steps row */}
                        <div className="flex items-start justify-between">
                            {[
                                {
                                    icon: Search,
                                    title: '1. Discovery',
                                    desc: 'We explore your challenges, goals, and vision to ensure perfect alignment.'
                                },
                                {
                                    icon: PenTool,
                                    title: '2. Proposal & Planning',
                                    desc: 'Detailed scope, timeline, strategy, and investment plan tailored to you.'
                                },
                                {
                                    icon: Wrench,
                                    title: '3. Execution',
                                    desc: 'Structured delivery with transparent communication and stakeholder alignment.'
                                },
                                {
                                    icon: Rocket,
                                    title: '4. Delivery & Support',
                                    desc: 'Deployment, documentation, handover, and optional ongoing support.'
                                }
                            ].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    {/* Step */}
                                    <div className="flex flex-col items-start w-44">
                                        {/* Icon circle */}
                                        <div className="w-14 h-14 rounded-full  flex items-center justify-center bg-white mb-5">
                                            <step.icon className="text-gray-800" size={20} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Connector arrow — between steps only */}
                                    {i < arr.length - 1 && (
                                        <div className="flex items-center mt-7 flex-1 mx-2">
                                            <div className="flex-1 border-t border border-gray-300" />
                                            <svg width="10" height="10" viewBox="0 0 10 10" className="text-gray-400 flex-shrink-0 -ml-px">
                                                <path d="M0 5 L8 5 M4 1 L8 5 L4 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
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