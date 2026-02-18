import { MainLayout } from '../components/MainLayout';
import {
    Mail,
    Phone,
    Linkedin,
    MapPin,
    Clock,
    PhoneCall,
    MessageSquare,
    Plus
} from 'lucide-react';

const ContactInfo = ({ icon: Icon, label, value }: any) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <Icon className="text-blue-600" size={20} />
        </div>
        <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-gray-900 font-medium">{value}</p>
        </div>
    </div>
);

const FormInput = ({ label, placeholder, type = "text", required = true }: any) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
            {label} {required && <span className="text-blue-600">*</span>}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-5 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
        />
    </div>
);

const FormSelect = ({ label, options, required = true }: any) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
            {label} {required && <span className="text-blue-600">*</span>}
        </label>
        <select className="w-full px-5 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%20fill%3D%22none%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat">
            <option value="">Select Option</option>
            {options.map((opt: string, i: number) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export const ContactPage = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20">
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 text-center mb-24 tracking-tight">
                        Let's Work Together
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Left Column */}
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Get in touch</h3>
                                <div className="space-y-6">
                                    <ContactInfo icon={Mail} label="Email" value="lahirusandeepa22@gmail.com" />
                                    <ContactInfo icon={Phone} label="Phone" value="+94 71 118 6028" />
                                    <ContactInfo icon={Linkedin} label="LinkedIn" value="linkedin.com/in/lahiru-sandeepa" />
                                    <ContactInfo icon={MapPin} label="Location" value="kandy, Sri Lanka" />
                                    <ContactInfo icon={Clock} label="Availability" value="Freelance, Mon - Sat, 09:00 - 18:00" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Prefer to Talk Directly?</h3>
                                <p className="text-gray-500 text-sm">Schedule a face-to-face consultation to discuss your project in detail and explore how we can work together.</p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all">
                                        <PhoneCall size={20} />
                                        Schedule a Call
                                    </button>
                                    <button className="flex-1 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
                                        <MessageSquare size={20} className="text-blue-600" />
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white rounded-[48px] p-8 lg:p-12 shadow-sm border border-gray-50">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-semibold text-gray-900">Send Me a Message</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormInput label="Full Name" placeholder="John Doe" />
                                    <FormInput label="Email Address" placeholder="john@example.com" type="email" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormSelect label="Professional Category" options={['Business Owner', 'Startup Founder', 'Project Manager', 'Other']} />
                                    <FormSelect label="Industry" options={['FinTech', 'HealthTech', 'EdTech', 'Real Estate', 'E-commerce']} />
                                </div>
                                <FormInput label="Company Name" placeholder="Your Company Ltd" />
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormSelect label="Project Type" options={['Web Application', 'Mobile App', 'SaaS', 'Consulting']} />
                                    <FormSelect label="Estimated Budget" options={['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+']} />
                                </div>
                                <FormSelect label="Estimated Project Timeline" options={['1-3 Months', '3-6 Months', '6-12 Months', 'Ongoing']} />
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Message *</label>
                                    <textarea
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-4 bg-white border border-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm h-32 resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transition-all">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Happens Next */}
                <section className="py-32 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-20">What Happens Next?</h2>
                        <div className="space-y-12">
                            {[
                                { step: '01', title: 'Step Beyond Your Inquiry', desc: 'Initial review of your message and project scope.' },
                                { step: '02', title: 'Initial Response (within 24 hours)', desc: 'I will reach out to schedule an initial discovery call.' },
                                { step: '03', title: 'Discovery Call', desc: 'Discussing requirements, challenges, and goals.' },
                                { step: '04', title: 'Proposal', desc: 'Detailed breakdown of the strategy, timeline, and budget.' },
                                { step: '05', title: 'Project Kickoff', desc: 'Finalizing contracts and assembly of the design and engineering team.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <span className="text-sm font-bold text-gray-300 pt-1 group-hover:text-blue-600 transition-colors">{item.step}</span>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-32 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-20">Quick Answers</h2>
                        <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-50 space-y-2">
                            {[
                                { q: 'What is your typical project timeline?', a: 'Timelines vary by scope, but most custom software projects range from 3 to 6 months for initial delivery.' },
                                { q: 'Do you work with startups or global clients?', a: 'I work with both ambitious startups looking to launch their first MVP and established enterprises looking to scale.' },
                                { q: 'What is your hourly rate or pricing model?', a: 'I typically work on a fixed-price project basis or retainer-based model depending on the engagement type.' },
                                { q: 'Can you integrate existing software?', a: 'Yes, I specialize in architecting solutions that seamlessly integrate with legacy systems and third-party APIs.' },
                                { q: 'Do you provide post-launch support?', a: 'Absolutely. I offer ongoing maintenance and support packages to ensure long-term stability and growth.' }
                            ].map((faq, i) => (
                                <div key={i} className={`p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group`}>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-bold text-gray-900">{faq.q}</span>
                                        <Plus className="text-gray-300 group-hover:text-blue-600 transition-colors" size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                            Looking Forward to Hearing From You.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            If you prefer traditional methods, email me directly at <span className="text-blue-600 font-bold">lahirusandeepa22@gmail.com</span>
                            <br />We are available to chat via WhatsApp
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">
                                Schedule a Call
                            </button>
                            <button className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors">
                                WhatsApp
                            </button>
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4">No commitment required</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
