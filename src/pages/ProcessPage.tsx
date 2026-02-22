import { MainLayout } from '../components/MainLayout';
import {
    CheckCircle2,
    MessageSquare,
    Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    slideInFromBottom,
    scaleIn,
    buttonPulse,
} from '../hooks/useAnimations';

const ProcessStep = ({ number, title, description, keyActivities, deliverables, duration, isLast }: any) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={slideInFromBottom}
    >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-16">
            {/* Left: Large number */}
            <div className="md:w-32 flex-shrink-0">
                <span className="text-7xl md:text-8xl font-bold text-gray-200 leading-none select-none">
                    {number}
                </span>
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-8">
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{title}</h3>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Activities</h4>
                        <ul className="space-y-1.5">
                            {keyActivities.map((item: string, i: number) => (
                                <li key={i} className="text-gray-800 font-medium text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Deliverables</h4>
                        <ul className="space-y-1.5">
                            {deliverables.map((item: string, i: number) => (
                                <li key={i} className="text-gray-800 font-medium text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {duration && (
                    <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
                        <span className="text-sm font-semibold text-gray-600">Typical Duration: <span className="font-bold text-gray-800">{duration}</span></span>
                    </div>
                )}
            </div>
        </div>

        {/* Divider between steps */}
        {!isLast && <div className="border-t border-gray-200" />}
    </motion.div>
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
                <motion.section
                    className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight"
                        variants={fadeInUp}
                    >
                        A Structured Yet Flexible Approach to Software Delivery
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-500 font-medium max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        I follow a strategic, phased approach tailored to project complexity, team size, and organizational culture — balancing structure with adaptability to deliver measurable results.
                    </motion.p>
                </motion.section>

                {/* Steps */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <ProcessStep key={i} {...step} isLast={i === steps.length - 1} />
                    ))}
                </section>

                {/* Communication Section */}
                <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            className="text-4xl font-semibold text-gray-900 text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            Transparent & Structured Communication
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                className="bg-white p-10 rounded-[32px] shadow-sm space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInLeft}
                            >
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
                            </motion.div>
                            <motion.div
                                className="bg-white p-10 rounded-[32px] shadow-sm space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInRight}
                            >
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
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Flexible by Design */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            className="text-5xl font-semibold text-gray-900"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            Flexible by Design
                        </motion.h2>

                        <motion.p
                            className="mt-6 text-xl text-gray-600"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            I adapt the framework to your organization.
                        </motion.p>

                        <motion.div
                            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            {[
                                {
                                    label: "Waterfall",
                                    description: "Structured upfront planning, phased delivery.",
                                },
                                {
                                    label: "Agile",
                                    description: "Iterative sprints, continuous feedback.",
                                },
                                {
                                    label: "Hybrid",
                                    description: "Balanced structure with agility.",
                                },
                                {
                                    label: "Remote Teams",
                                    description: "Optimized digital collaboration workflows.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-gray-100 rounded-2xl p-8 text-left hover:shadow-md transition"
                                    variants={scaleIn}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.label}
                                    </h3>

                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </section>

                {/* What You Can Expect */}
                <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <motion.h2
                            className="text-4xl font-semibold text-gray-900"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            What You Can Expect
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto pt-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            {[
                                'Full transparency',
                                'Proactive risk management',
                                'Continuous alignment',
                                'Strong quality control',
                                'Realistic planning',
                                'Comprehensive docs',
                            ].map((item, i) => (
                                <motion.div key={i} className="flex items-center gap-3" variants={fadeInUp}>
                                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA */}
                <motion.section
                    className="py-32 px-4 sm:px-6 lg:px-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <div className="max-w-4xl mx-auto space-y-12">
                        <motion.h2
                            className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight"
                            variants={fadeInUp}
                        >
                            Ready to Start Your Project?
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-500 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            Let's discuss your goals and build a structured plan for success.
                        </motion.p>
                        <motion.div className="pt-8" variants={fadeInUp}>
                            <motion.a
                                href="https://cal.com/lahiru-sandeepa-43gdzg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#2B7BE9] hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg"
                                animate={buttonPulse}
                                whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(43, 123, 233, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Schedule a Call
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </MainLayout>
    );
};