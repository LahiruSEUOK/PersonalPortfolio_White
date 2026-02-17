import { MainLayout } from '../components/MainLayout';
import { ArrowRight } from 'lucide-react';

// Import images from assets
import flowSuiteImg from '../assets/flowSuite.svg';
import saasPayrollImg from '../assets/SaaSPayroll.svg';
import cenziosLMSImg from '../assets/cenziosLMS.svg';

const ProjectCard = ({ title, subtitle, image, industries, platform, techStack, challenge, solution, results }: any) => (
    <div className="bg-[#F8F9FA] rounded-[48px] p-8 lg:p-20 mb-20 shadow-sm border border-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
                <p className="text-lg text-gray-500 font-medium">{subtitle}</p>
            </div>

            <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 group-hover:bg-blue-600/10 transition-colors" />
                <img
                    src={image}
                    alt={title}
                    className="relative w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industries</h4>
                    <p className="text-gray-900 font-bold">{industries}</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Platform</h4>
                    <p className="text-gray-900 font-bold">{platform}</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stack</h4>
                    <p className="text-gray-900 font-bold">{techStack}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-blue-600 uppercase">The Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{challenge}</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-blue-600 uppercase">The Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{solution}</p>
                    </div>
                </div>
                <div className="space-y-8 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-400 uppercase">The Results</h4>
                    <div className="grid grid-cols-2 gap-8">
                        {results.map((res: any, i: number) => (
                            <div key={i} className="space-y-1">
                                <p className="text-3xl font-bold text-gray-900">{res.value}</p>
                                <p className="text-xs text-gray-500 font-medium">{res.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const ProjectsPage = () => {
    const projects = [
        {
            title: 'FlowSuite',
            subtitle: 'Workflow Automation & Asset Management',
            image: flowSuiteImg,
            industries: 'Real Estate, Finance',
            platform: 'Web Dashboard',
            techStack: 'React, Node.js, AWS',
            challenge: 'Managing thousands of property documents and financial records manually led to frequent human errors and slow processing times.',
            solution: 'Developed a custom automation engine that digitizes document workflows and provides real-time equity tracking and reporting.',
            results: [
                { value: '70%', label: 'Efficiency Increase' },
                { value: '90%', label: 'Error Reduction' },
                { value: '0', label: 'Human Error' },
                { value: '100%', label: 'Visibility' }
            ]
        },
        {
            title: 'Payroll by Cenzios',
            subtitle: 'Enterprise SaaS Payroll for SMBs',
            image: saasPayrollImg,
            industries: 'HR Tech, FinTech',
            platform: 'SaaS Platform',
            techStack: 'React, Spring Boot, MySQL',
            challenge: 'Local businesses struggled with complex tax compliance and manual salary calculations for varying employee types.',
            solution: 'Built a 100% cloud-based payroll system with automated tax filing, contribution tracking, and one-click salary generation.',
            results: [
                { value: '100%', label: 'Compliance' },
                { value: '2 Min', label: 'Salary Gen' },
                { value: 'Scalable', label: 'Growth Ready' },
                { value: 'Instant', label: 'Reporting' }
            ]
        },
        {
            title: 'Cenzios Learning',
            subtitle: 'Modern LMS Platform for Education',
            image: cenziosLMSImg,
            industries: 'EdTech, Training',
            platform: 'LMS Platform',
            techStack: 'Next.js, Firebase, Stripe',
            challenge: 'Educational institutions needed a way to deliver high-quality video content with secure progress tracking and interactive assessments.',
            solution: 'Created a comprehensive learning management system with real-time analytics, automated certification, and integrated payment gateways.',
            results: [
                { value: '40k+', label: 'Active Learners' },
                { value: '15%', label: 'Higher Completion' },
                { value: 'Data', label: 'Driven Insights' }
            ]
        }
    ];

    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                {/* Header Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Transforming Complex Operations Into Scalable Digital Systems
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                        A portfolio of high-impact technical solutions that solve real-world business challenges through strategic engineering.
                    </p>
                    <div className="flex justify-center gap-4 mt-12">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-sm">Web Applications</button>
                        <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-bold text-sm">Mobile Applications</button>
                        <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-bold text-sm">SaaS</button>
                    </div>
                </section>

                {/* Projects List */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </section>

                {/* CTA */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Ready to transform your vision into a high-performance digital reality?
                        </p>
                        <div className="pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-3">
                                Let's Talk
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
