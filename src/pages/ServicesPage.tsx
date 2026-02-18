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
            description: 'End-to-end framework application for predictable outcomes. I combine Agile methodologies with strategic oversight to ensure software projects are delivered on time and within scope.',
            benefits: ['Agile & Scrum coaching & workshops', 'Project planning & roadmap defining', 'Scope management & risk mitigation', 'Resource optimization & team leadership'],
            tags: ['Agile', 'Scrum', 'Kanban', 'Jira', 'Monday.com', 'Trello']
        },
        {
            icon: BarChart3,
            title: 'Business Analysis',
            description: 'Bridging the gap between business needs and technical solutions through rigorous requirement gathering and strategic modeling.',
            benefits: ['Functional & non-functional requirements', 'Process mapping & gap analysis', 'Wireframing & user story definition', 'Stakeholder alignment & management'],
            tags: ['BPMN', 'UML', 'Data Modeling', 'Stakeholder Analysis', 'User Stories']
        },
        {
            icon: Zap,
            title: 'Solution Design & Architecture',
            description: 'Crafting robust technical blueprints that scale. I design systems that solve today\'s problems while anticipating tomorrow\'s growth.',
            benefits: ['System architecture design', 'Cloud strategy & infrastructure planning', 'Database design & optimization', 'API strategy & interface design'],
            tags: ['Microservices', 'AWS', 'Azure', 'System Design', 'API First']
        },
        {
            icon: Code,
            title: 'Custom Software Project Delivery',
            description: 'End-to-end management of custom development initiatives, from initial concept to deployment and beyond.',
            benefits: ['Full-stack delivery management', 'Vendor/Team selection & coordination', 'Quality assurance oversight', 'Deployment strategy & automation'],
            tags: ['SaaS', 'Mobile Apps', 'Web Portals', 'Enterprise Software']
        },
        {
            icon: RefreshCw,
            title: 'Agile Transformation',
            description: 'Guiding organizations through the mindset shift required for true agility and continuous improvement.',
            benefits: ['Organizational agile assessment', 'Agile workspace setup', 'Process refactoring', 'Continuous feedback loops'],
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
                        I help businesses bridge the gap between business vision and technical execution through proven methodologies and expert leadership.
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
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">The Process</span>
                            <h2 className="text-4xl font-semibold text-gray-900 mt-4">A Structured Path to Success</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Search, title: '1. Discovery', desc: 'Understanding your business landscape, goals, and challenges.' },
                                { icon: PenTool, title: '2. Strategy & Planning', desc: 'Defining the roadmap and architecting the optimal solution.' },
                                { icon: Play, title: '3. Execution', desc: 'Leading teams to build and deliver through structured development.' },
                                { icon: CheckCircle, title: '4. Delivery & Support', desc: 'Ensuring smooth transition and long-term project stability.' }
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
                            Ready to transform your next software project into an enterprise success story?
                        </p>
                        <div className="pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-3">
                                Get in Touch
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
