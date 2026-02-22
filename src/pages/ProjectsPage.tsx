import { useState } from "react";
import { MainLayout } from "../components/MainLayout";

// Import images from assets
import flowSuiteImg from "../assets/flowSuite.svg";
import saasPayrollImg from "../assets/SaaSPayroll.svg";
import cenziosLMSImg from "../assets/cenziosLMS.svg";
import healthStationImg from "../assets/HealthStation24.svg";
import learnerByCenziosImg from "../assets/learnerbyCenzios.svg";
import { motion, AnimatePresence } from "framer-motion";
import {
  buttonPulse,
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInFromBottom
} from "../hooks/useAnimations";

const ProjectCard = ({
  title,
  subtitle,
  image,
  meta,
  challengeDescription,
  challengePoints,
  solution,
  impactTitle,
  impactVision,
  results,
  isMobile,
}: any) => (
  <motion.div
    className="bg-[#F5F5F7] rounded-[32px] p-8 lg:p-20 mb-20 shadow-sm border border-gray-50 overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={slideInFromBottom}
  >
    <div className="max-w-4xl mx-auto space-y-16 text-center">
      {/* Title */}
      <motion.div className="space-y-4" variants={fadeInUp}>
        <h3 className="text-[48px] font-semibold text-[#333333]">{title}</h3>
        <p className="text-[24px] text-[#8E8E93] font-medium">{subtitle}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        className={`relative group ${isMobile ? "flex justify-center" : ""}`}
        variants={scaleIn}
      >
        {!isMobile && (
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 group-hover:bg-blue-600/10 transition-colors" />
        )}
        <img
          src={image}
          alt={title}
          className={`relative h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ${isMobile ? "max-w-[280px] md:max-w-[320px]" : "w-full"}`}
        />
      </motion.div>

      {/* Meta Row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 text-left"
        variants={staggerContainer}
      >
        {meta.map((m: any, i: number) => (
          <motion.div key={i} className="space-y-2" variants={fadeInUp}>
            <h4 className="text-[12px] font-semibold text-[#8E8E93] uppercase tracking-widest">
              {m.label}
            </h4>
            <p className="text-[15px] text-[#333333] font-medium">{m.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Challenge & Solution + Results */}
      <div className="grid md:grid-cols-2 gap-16 text-left">
        <motion.div className="space-y-6" variants={fadeInUp}>
          {/* Challenge */}
          <div className="space-y-3">
            <h4 className="text-[28px] font-bold text-[#333333] uppercase">
              The Challenge
            </h4>
            <p className="text-[17px] text-[#424245] leading-relaxed">
              {challengeDescription}
            </p>
            {challengePoints && challengePoints.length > 0 && (
              <ul className="space-y-2 mt-2">
                {challengePoints.map((point: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#424245] text-[17px] leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <h4 className="text-[28px] font-bold text-[#333333] uppercase">
              The Solution
            </h4>
            <p className="text-[17px] text-[#424245] leading-relaxed">
              {solution}
            </p>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          className="space-y-6 bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
          variants={fadeInUp}
        >
          <div className="space-y-1">
            <h4 className="text-[28px] font-bold text-[#333333]">
              {impactTitle}
            </h4>
            {impactVision && (
              <p className="text-[17px] text-[#424245]  leading-relaxed">
                {impactVision}
              </p>
            )}
          </div>
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {results.map((res: any, i: number) => (
              <motion.div key={i} className="space-y-1" variants={fadeInUp}>
                <p className="text-[32px] font-bold text-[#000000]">{res.value}</p>
                <p className="text-[15px] text-[#8E8E93] font-medium">{res.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("web");

  const webProjects = [
    {
      title: "FlowSuite",
      subtitle: "Apparel Production Management Platform",
      image: flowSuiteImg,
      meta: [
        { label: "Industry", value: "Garment Manufacturing" },
        { label: "Role", value: "PM, BA & Solution Designer" },
        { label: "Team", value: "8 Members" },
        { label: "Status", value: "Live" },
      ],
      challengeDescription:
        "Apparel production teams were operating in silos with disconnected departments from Design to Packing. There was no real-time visibility into order progress, leading to manual coordination and errors.",
      challengePoints: [
        "Manual invoicing causing delays & billing errors",
        "Complex multi-dimensional pricing structures",
        "Inventory mismatches and untracked damages",
      ],
      solution:
        "I designed and led the development of FlowSuite, an end-to-end production platform featuring role-based workflows for 7+ departments, real-time tracking, and an automated invoicing engine.",
      impactTitle: "The Impact",
      impactVision:
        '"FlowSuite transformed our apparel production. Everything is visible in real time without manual coordination."',
      results: [
        { value: "75%", label: "Reduction in cycle time" },
        { value: "95%", label: "Increase in visibility" },
        { value: "0", label: "Billing errors (Automated)" },
        { value: "100%", label: "Inventory accuracy" },
      ],
    },
    {
      title: "Payroll by Cenzios",
      subtitle: "Cloud-Based Payroll & HR Platform",
      image: saasPayrollImg,
      meta: [
        { label: "Industry", value: "HR Technology / SaaS" },
        { label: "Role", value: "PM, BA & Solution Designer" },
        { label: "Time", value: "2 Months" },
        { label: "Status", value: "Live & Subscription" },
      ],
      challengeDescription:
        "SMEs were managing payroll manually using spreadsheet-based calculations, leading to frequent human errors, delayed reporting, and compliance risks with local regulations (EPF/ETF).",
      challengePoints: [],
      solution:
        "A scalable SaaS payroll platform including centralized employee database, automated salary & deduction calculations, built-in compliance engine, and one-click digital payslip generation.",
      impactTitle: "The Results",
      impactVision: null,
      results: [
        { value: "100%", label: "Accurate calculations" },
        { value: "2 Mo", label: "To production launch" },
        { value: "Scalable", label: "Unlimited companies" },
        { value: "Instant", label: "Payroll reporting" },
      ],
    },
    {
      title: "Cenzios Learning",
      subtitle: "Integrated Learning Management Ecosystem",
      image: cenziosLMSImg,
      meta: [
        { label: "Industry", value: "Education Technology" },
        { label: "Role", value: "Project Manager & Designer" },
        { label: "Duration", value: "8 Months (Ongoing)" },
        { label: "Status", value: "In Development" },
      ],
      challengeDescription:
        "Educational institutions struggled with fragmented systems for students, staff, and payments. Manual payment tracking and limited parent transparency were creating significant administrative overhead.",
      challengePoints: [],
      solution:
        "A comprehensive LMS platform featuring multi-role dashboards, centralized payment automation, real-time attendance tracking, and a parent engagement portal.",
      impactTitle: "Projected Impact",
      impactVision:
        "Vision: Creating a seamless educational ecosystem where institutions focus on teaching while the platform handles operational complexity.",
      results: [
        { value: "80%", label: "Less admin overhead" },
        { value: "75%", label: "Faster enrollment" },
        { value: "Data", label: "Driven decision making" },
      ],
    },
  ];

  const mobileProjects = [
    {
      title: "HealthStation24",
      subtitle: "Heal Care Mobile Application",
      image: healthStationImg,
      isMobile: true,
      meta: [
        { label: "Industry", value: "Human Health Management" },
        { label: "Role", value: "PM, BA & Solution Designer" },
        { label: "Team", value: "8 Members" },
        { label: "Status", value: "In Development" },
      ],
      challengeDescription:
        "Navigating the healthcare journey from diagnosis to medication is often fragmented. Patients face significant friction after leaving the doctor's office, leading to delayed treatments and frustration.",
      challengePoints: [
        "Patients struggle to find available specialists and book appointments quickly",
        "There is no real-time visibility into medication stock, forcing patients to visit multiple pharmacies to find their prescribed medicine.",
        "Manual handling of physical prescriptions leads to lost documents, illegible handwriting, and potential errors in medication dispensing.",
      ],
      solution:
        "I designed and led the development of HealthStation24, a comprehensive healthcare ecosystem that bridges the gap between doctors, patients, and pharmacies through a unified mobile experience.",
      impactTitle: "The Impact",
      impactVision:
        "Vision: Creating a seamless health care application for easy to find medicines for patients.",
      results: [
        { value: "60%", label: "Reduction in cycle time" },
        { value: "95%", label: "Increase in visibility" },
        { value: "0", label: "Billing errors (Automated)" },
        { value: "100%", label: "Inventory accuracy" },
      ],
    },
    {
      title: "learner by Cenzios",
      subtitle: "Integrated Learning Management Ecosystem",
      image: learnerByCenziosImg,
      isMobile: true,
      meta: [
        { label: "Industry", value: "Education Technology" },
        { label: "Role", value: "Project Manager & Designer" },
        { label: "Duration", value: "8 Months (Ongoing)" },
        { label: "Status", value: "In Development" },
      ],
      challengeDescription:
        "Educational institutions struggled with fragmented systems for students, staff, and payments. Manual payment tracking and limited parent transparency were creating significant administrative overhead.",
      challengePoints: [],
      solution:
        "A comprehensive LMS platform featuring multi-role dashboards, centralized payment automation, real-time attendance tracking, and a parent engagement portal.",
      impactTitle: "Projected Impact",
      impactVision:
        "Vision: Creating a seamless educational ecosystem where institutions focus on teaching while the platform handles operational complexity.",
      results: [
        { value: "80%", label: "Less admin overhead" },
        { value: "75%", label: "Faster enrollment" },
        { value: "Data", label: "Driven decision making" },
      ],
    },
  ];

  const filteredProjects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <MainLayout>
      <div className="pt-32 pb-20 overflow-hidden">
        {/* Header Section */}
        <motion.section
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-[#333333] mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Transforming Complex Operations Into Scalable Digital Systems
          </motion.h1>
          <motion.p
            className="text-[21px] text-[#111111] font-regular max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Across manufacturing, HR technology, and education, I've led the
            design and delivery of platforms that unify workflows, automate
            operations, and generate measurable business impact.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mt-12"
            variants={fadeInUp}
          >
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === "web" ? "bg-[#0073EC] text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200"}`}
            >
              Web Applications
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === "mobile" ? "bg-[#0073EC] text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200"}`}
            >
              Mobile Applications
            </button>
          </motion.div>
        </motion.section>

        {/* Projects List */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={`${activeTab}-${i}`} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CTA */}
        <motion.section
          className="py-32 px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.h2
              className="text-5xl md:text-[48px] font-bold text-[#333333] leading-tight"
              variants={fadeInUp}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-[21px] text-[#6B7280] max-w-2xl mx-auto"
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
