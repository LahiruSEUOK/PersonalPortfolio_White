import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import {
    Mail,
    Phone,
    Linkedin,
    Clock,
    PhoneCall,
    MessageSquare,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    fadeInUp,
    staggerContainer,
    buttonPulse,
    scaleIn
} from '../hooks/useAnimations';

const ContactInfo = ({ icon: Icon, label, value }: any) => (
    <motion.div className="flex items-start gap-4" variants={fadeInUp}>
        <motion.div
            className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0"
            variants={scaleIn}
        >
            <Icon className="text-gray-500" size={16} />
        </motion.div>
        <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
            <p className="text-gray-800 font-medium text-sm">{value}</p>
        </div>
    </motion.div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-gray-100 last:border-0 cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between gap-4 py-5">
                <span className="font-semibold text-gray-900 text-sm">{q}</span>
                {open
                    ? <ChevronUp className="text-gray-400 shrink-0" size={18} />
                    : <ChevronDown className="text-gray-300 shrink-0" size={18} />
                }
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-500 text-sm leading-relaxed pb-5 -mt-1">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ContactPage = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20 overflow-hidden">

                {/* ── Hero Title ── */}
                <motion.section
                    className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight"
                        variants={fadeInUp}
                    >
                        Let's Work Together
                    </motion.h1>
                </motion.section>
                <br />

                {/* ── Main Content: Contact Details only ── */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
                    <motion.div
                        className="space-y-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6"
                                variants={staggerContainer}
                            >
                                <ContactInfo icon={Mail} label="Email" value="lahirusandeepa22@gmail.com" />
                                <ContactInfo icon={Phone} label="Phone" value="+94 71 118 6028" />
                                <ContactInfo icon={Clock} label="Response Time" value="Within 24 hours on business days" />
                                <ContactInfo icon={CheckCircle} label="Availability" value="Accepting new project inquiries" />
                            </motion.div>
                        </div>
                        <br /> <br />

                        {/* Prefer to Talk */}
                        <motion.div className="space-y-4" variants={fadeInUp}>
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
                                {/* Schedule a Call Button */}
                                <motion.a
                                    href="https://cal.com/lahiru-sandeepa-43gdzg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                                    animate={buttonPulse}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <PhoneCall size={16} />
                                    Schedule a Call
                                </motion.a>

                                {/* Call Now Button */}
                                <motion.a
                                    href="tel:+94711186028"
                                    className="w-fit px-6 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Phone size={16} className="text-blue-600" />
                                    Call Now
                                </motion.a>

                                {/* WhatsApp Button */}
                                <motion.a
                                    href="https://wa.me/94711186028"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit px-6 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <MessageSquare size={16} className="text-green-500" />
                                    WhatsApp
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── Social Links Bar ── */}
                <motion.section
                    className="mt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-b border-gray-100">
                        <a href="https://linkedin.com/in/lahiru-sandeepa" target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={16} />
                            linkedin.com/in/lahiru-sandeepa
                        </a>
                        <a href="https://lahirusandeepa.online" target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                            <Globe size={16} />
                            lahirusandeepa.online
                        </a>
                    </div>
                </motion.section>

                {/* ── What Happens Next ── */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl font-semibold text-gray-900 text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Happens Next?
                    </motion.h2>

                    <motion.div
                        className="max-w-xl mx-auto space-y-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { step: '01', title: 'Consultation Inquiry Received', desc: 'Review your initial details from our direct conversation.' },
                            { step: '02', title: 'Initial Response (Within 24 Hours)', desc: 'Follow-up questions or scheduling a discovery call.' },
                            { step: '03', title: 'Discovery Call', desc: 'We discuss scope, challenges, and goals.' },
                            { step: '04', title: 'Proposal', desc: 'Clear scope, timeline, and pricing structure.' },
                            { step: '05', title: 'Project Kickoff', desc: 'Structured execution with defined milestones and communication plan.' }
                        ].map((item, i) => (
                            <motion.div key={i} className="flex gap-6 group" variants={fadeInUp}>
                                <span className="text-sm font-bold text-gray-300 pt-0.5 w-8 shrink-0 group-hover:text-blue-500 transition-colors">
                                    {item.step}
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-3xl mx-auto">
                        <motion.h2
                            className="text-4xl font-semibold text-gray-900 text-center mb-12"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Quick Answers
                        </motion.h2>
                        <motion.div
                            className="bg-white rounded-[32px] px-8 py-4 border border-gray-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                {
                                    q: 'What is your typical project timeline?',
                                    a: 'Most projects range from 2–6 months depending on complexity. After discovery, I provide a tailored estimate.'
                                },
                                {
                                    q: 'Do you work with remote teams?',
                                    a: 'Yes, I work fully remotely and have experience coordinating distributed teams across multiple time zones.'
                                },
                                {
                                    q: "What's your pricing model?",
                                    a: 'I offer fixed-price project engagements and monthly retainer models depending on the scope and duration of the work.'
                                },
                                {
                                    q: 'Can you integrate into our existing team?',
                                    a: 'Absolutely. I can embed as an extension of your internal team and adapt to your existing workflows and tools.'
                                },
                                {
                                    q: 'Do you provide post-launch support?',
                                    a: 'Yes, I offer post-launch support packages covering monitoring, bug fixes, and feature iterations.'
                                }
                            ].map((faq, i) => (
                                <motion.div key={i} variants={fadeInUp}>
                                    <FAQItem q={faq.q} a={faq.a} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <br /> <br />

                {/* ── Bottom CTA ── */}
                <motion.section
                    className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.h2
                            className="text-5xl md:text-5xl font-semibold text-gray-900 leading-tight"
                            variants={fadeInUp}
                        >
                            Looking Forward to Hearing From You.
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-500 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            Let's build systems that scale, automate intelligently, and deliver measurable impact.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center"
                            variants={fadeInUp}
                        >
                            {/* Schedule a Call Button */}
                            <motion.a
                                href="https://cal.com/lahiru-sandeepa-43gdzg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                                animate={buttonPulse}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <PhoneCall size={16} />
                                Schedule a Call
                            </motion.a>

                            {/* Call Now Button */}
                            <motion.a
                                href="tel:+94711186028"
                                className="w-fit px-6 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone size={16} className="text-blue-600" />
                                Call Now
                            </motion.a>

                            {/* WhatsApp Button */}
                            <motion.a
                                href="https://wa.me/94711186028"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit px-6 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageSquare size={16} className="text-green-500" />
                                WhatsApp
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.section>

            </div>
        </MainLayout>
    );
};
