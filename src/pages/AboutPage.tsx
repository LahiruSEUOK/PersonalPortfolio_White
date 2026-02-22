import { MainLayout } from "../components/MainLayout";
import {
  Landmark,
  Workflow,
  TrendingUp,
  MessageSquare,
  Layers,
  RefreshCw,
} from "lucide-react";

// Additional local asset imports
import confluenceIcon from "../assets/confluence.png";
import dockerIcon from "../assets/docker.png";
import awsIcon from "../assets/aws.png";
import githubIcon2 from "../assets/github.png";
import dockployIcon from "../assets/dockploy.svg";
import cloudeIcon from "../assets/cloude.svg";
import cloudflareIcon from "../assets/cloudflare.svg";
import mongodbIcon from "../assets/mongodb.png";
import clickupIcon from "../assets/clickup.svg";
import agileIcon from "../assets/agile.png";
import scrumIcon from "../assets/scrum.png";
import kanbanIcon from "../assets/kanban.png";
import waterfallIcon from "../assets/waterfall.png";
import gitIcon from "../assets/git.svg";
import msprojectIcon from "../assets/msproject.svg";

// Local asset imports
import jiraIcon from "../assets/jira.svg";
import figmaIcon from "../assets/figma.svg";
import vscodeIcon from "../assets/vscode.svg";
import slackIcon from "../assets/slck.svg";
import postmanIcon from "../assets/postman-inc-48.png";

export const AboutPage = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-20">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#333333] mb-6 tracking-tight">
            Lahiru Sandeepa
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-8">
            Project Manager | Business Analyst | Solution Designer
          </p>
          <p className="text-lg text-[#111111] leading-relaxed max-w-2xl mx-auto">
            Based in Sri Lanka, I transform complex business challenges into elegant,
            scalable software solutions. With 7+ years of professional experience and 3+ years in project management,
            I’ve led cross- functional teams delivering enterprise systems, SaaS platforms, and custom web applications.
          </p>
        </section>

        {/* Who I Am Section */}
        <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-6xl font-semibold text-[#333333]">What I Do</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#111111] leading-relaxed">
                I bridge the gap between business strategy and technical execution.
              </p>
              <p className="text-lg text-[#111111] leading-relaxed">
                With a background in financial services and a B.Sc. (Hons) in Software Engineering from the University of Kelaniya,
                I combine business insight with strong technical understanding to design solutions that are practical, scalable, and impactful.
              </p>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-[#333333] mb-4">
                My Journey
              </h2>
              <p className="text-[#6B6B6B]">
                The milestones that shaped my professional path.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Foundation",
                  desc: "Began career as Executive Wealth Planner at AIA Insurance, mastering needs analysis and client- focused solution design. Later led IT modernization initiatives and operational strategy at Our Nation Pvt Ltd.",
                  icon: <Landmark className="text-[#111111]" size={24} />,
                },
                {
                  title: "The Transition",
                  desc: "Transitioned fully into project management and business analysis in software development. Focused on bridging the communication gap between stakeholders and engineering teams.",
                  icon: <Workflow className="text-[#111111]" size={24} />,
                },
                {
                  title: "Current Impact",
                  desc: "Currently Project Manager & Business Analyst at Cenzios Pvt Ltd, leading multiple web and SaaS products while pursuing an MBA in Project Management from Cardiff Metropolitan University.",
                  icon: <TrendingUp className="text-[#111111]" size={24} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 text-[#111111] bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-[32px] font-semibold text-[#111111] mb-4">
                    {item.title}
                  </h3>
                  <p className=" text-[19px] text-[#6B6B6B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-32 bg-gray-100 px-4 sm:px-6 lg:px-8 text-center border-y border-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#333333] leading-tight">
              Turning ambiguity into clarity.
            </h2>
            <p className="mt-8 text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              I’m driven by the challenge of transforming complex, ambiguous business problems into clear, practical, and scalable solutions. I find deep satisfaction in
              bringing structure to uncertainty and turning ideas into systems that truly work.
              <br />
              <br />
              For me, success isn’t just about delivery, it’s about meaningful impact.
              Whether it’s streamlining operations, improving efficiency, accelerating workflows, or making daily work easier for end users, I’m motivated by solutions that create lasting value and measurable progress.
            </p>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-[#111111] mb-16">
              My Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Clear Communication",
                  desc: "Keeping stakeholders aligned at every stage, ensuring transparency and managing expectations effectively.",
                  icon: <MessageSquare className="text-[#111111]" size={24} />,
                },
                {
                  title: "Technical Excellence",
                  desc: "Designing scalable, maintainable, and user-friendly systems that stand the test of time and scale.",
                  icon: <Layers className="text-[#111111]" size={24} />,
                },
                {
                  title: "Agile Adaptability",
                  desc: "Responding to change while protecting delivery momentum. Pragmatic application of Agile methodologies.",
                  icon: <RefreshCw className="text-[#111111]" size={24} />,
                },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-[17px] text-[#6B6B6B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise & Skills */}
        {/* <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20"> */}
        {/* <div>
              <h2 className="text-[32px] font-semibold text-[#1D1D1F] mb-12">
                Core Expertise
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Project Management",
                    desc: "Agile, Scrum, Waterfall methodologies.",
                  },
                  {
                    title: "Business Analysis",
                    desc: "Requirement gathering, process modeling, gap analysis.",
                  },
                  {
                    title: "Solution Architecture",
                    desc: "Designing scalable and robust software systems.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-[#86868B]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div> */}
        <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[32px] font-semibold text-[#1D1D1F] mb-12">
              Core Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Project Management",
                  desc: "Agile, Scrum, Kanban, Waterfall methodologies, risk management and mitigation, budget and resource allocation, stakeholder management and communication, sprint planning and facilitation.",
                },
                {
                  title: "Business Analysis",
                  desc: "Requirements gathering and documentation, stakeholder engagement and collaboration, process mapping and optimization, user story development, gap analysis.",
                },
                {
                  title: "Solution Design",
                  desc: "Workflow and process design, technical feasibility assessment, UI/UX collaboration, scalability planning, solution architecture.",
                },
                {
                  title: "Technical Skills",
                  desc: "API testing, server and environment management, release management, QA testing and test case development, product roadmapping.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#86868B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-[#111111] mb-16">
              Tools & Technologies
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Jira", icon: <img src={jiraIcon} alt="Jira" className="w-5 h-5" /> },
                { name: "Confluence", icon: <img src={confluenceIcon} alt="Confluence" className="w-5 h-5" /> },
                { name: "Figma", icon: <img src={figmaIcon} alt="Figma" className="w-5 h-5" /> },
                { name: "Git", icon: <img src={gitIcon} alt="Git" className="w-5 h-5" /> },
                { name: "GitHub", icon: <img src={githubIcon2} alt="GitHub" className="w-5 h-5" /> },
                { name: "VS Code", icon: <img src={vscodeIcon} alt="VS Code" className="w-5 h-5" /> },
                { name: "Docker", icon: <img src={dockerIcon} alt="Docker" className="w-5 h-5" /> },
                { name: "Dockploy", icon: <img src={dockployIcon} alt="Dockploy" className="w-5 h-5" /> },
                { name: "Cloudflare", icon: <img src={cloudflareIcon} alt="Cloudflare" className="w-5 h-5" /> },
                { name: "AWS", icon: <img src={awsIcon} alt="AWS" className="w-5 h-5" /> },
                { name: "MongoDB", icon: <img src={mongodbIcon} alt="MongoDB" className="w-5 h-5" /> },
                { name: "Postman", icon: <img src={postmanIcon} alt="Postman" className="w-5 h-5" /> },
                { name: "Slack", icon: <img src={slackIcon} alt="Slack" className="w-5 h-5" /> },
                { name: "ClickUp", icon: <img src={clickupIcon} alt="ClickUp" className="w-5 h-5" /> },
                { name: "MS Project", icon: <img src={msprojectIcon} alt="MS Project" className="w-5 h-5" /> },
                { name: "Agile", icon: <img src={agileIcon} alt="Agile" className="w-5 h-5" /> },
                { name: "Scrum", icon: <img src={scrumIcon} alt="Scrum" className="w-5 h-5" /> },
                { name: "Kanban", icon: <img src={kanbanIcon} alt="Kanban" className="w-5 h-5" /> },
                { name: "Waterfall", icon: <img src={waterfallIcon} alt="Waterfall" className="w-5 h-5" /> },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-lg">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-24 bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-semibold text-[#111111] mb-12">
                Education
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-1">
                    MBA in Project Management
                  </h4>
                  <p className="text-[#6B6B6B] mb-2">
                    Cardiff Metropolitan University | 2021
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-1">
                    B.Sc. (Hons) in Software Engineering
                  </h4>
                  <p className="text-[#6B6B6B]">Plymouth University | 2018</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#111111] mb-12">
                Certifications
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-1">
                    {/* PMP® Certification */}
                  </h4>
                  <p className="text-[#6B6B6B] mb-2">
                    Agile Scrum Master
                  </p>
                  <p className="text-[#6B6B6B] mb-2">
                    Disciplined Agile
                  </p>
                  <p className="text-[#6B6B6B] mb-2">
                    PRINCE2 Preparation
                  </p>
                  <p className="text-[#6B6B6B] mb-2">
                    Generative AI for Project Managers
                  </p>


                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-1">
                    {/* AWS Solution Architect */}
                  </h4>
                  {/* <p className="text-[#6B6B6B]">Amazon Web Services</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        {/* <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">
              Career Timeline
            </h2>
            <div className="relative border-l border-gray-200 ml-4 md:ml-0">
              {[
                {
                  role: "Project Manager & Business Analyst",
                  company: "Cenzios",
                  period: "2021 - PRESENT",
                  desc: "Leading digital transformation initiatives and managing multi-disciplinary teams.",
                },
                {
                  role: "Associate Project Manager",
                  company: "Innovate Tech",
                  period: "2019 - 2021",
                  desc: "Facilitating agile ceremonies and coordinating cross-functional product development.",
                },
                {
                  role: "Software Engineer",
                  company: "DevSolutions",
                  period: "2018 - 2019",
                  desc: "Developing full-stack web applications and optimizing system performance.",
                },
              ].map((job, i) => (
                <div key={i} className="mb-12 ml-8 relative">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 bg-[#2B7BE9] rounded-full border-4 border-white shadow-sm" />
                  <span className="text-[14px] font-bold text-[#2B7BE9] mb-1 block">
                    {job.period}
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F]">
                    {job.role}
                  </h3>
                  <p className="text-[18px] text-[#1D1D1F] font-medium mb-4">
                    {job.company}
                  </p>
                  <p className="text-[#86868B] text-[16px] leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">
              Career Timeline
            </h2>
            <div className="relative border-l border-gray-200 ml-4 md:ml-0">
              {[
                {
                  role: "Project Manager",
                  company: "Cenzios · Full-time",
                  period: "Mar 2025 - Present · 1 yr",

                  desc: [
                    "Lead multiple software projects from initiation to delivery, ensuring timelines, budgets, and quality standards were met",
                    "Coordinates cross-functional teams of 8–12 developers, designers, and QA engineers to drive effective collaboration",
                    "Gather and analyze business requirements, translating them into actionable technical solutions aligned with client goals",
                    "Apply Agile, Waterfall, and hybrid methodologies to streamline project execution and delivery",
                    "Maintain clear communication with stakeholders, ensuring alignment across clients, technical teams, and internal leadership",
                    "Deliver solutions that enhanced operational efficiency and supported client objectives",
                  ],

                },
                {
                  role: "Associate Project Manager",
                  company: "Aventure · Full-time",
                  period: "Oct 2024 - Mar 2025 · 6 mos",

                  desc: [
                    "Led project planning and execution for various client projects",
                    "Coordinated with stakeholders to define project scope, objectives, and timelines",
                    "Managed resource allocation and ensured optimal team performance",
                    "Conducted risk management and financial planning to ensure smooth project execution",
                    "Supervised workload distribution and tracked project progress using tools like JIRA",
                    "Ensured compliance with project deadlines and budgets",
                    "Facilitated communication between teams and clients for timely updates and feedback",
                    "Provided regular status reports and presented project updates to senior management",
                    "Ensured the delivery of high-quality solutions aligned with client needs and expectations",
                  ],
                },
                {
                  role: "Business Development Manager",
                  company: "Our Nation PVT Ltd · Self-employed",
                  period: "Oct 2022 - Oct 2024 · 2 yrs 1 mo",

                  desc: [
                    "Managed operations of 4 restaurant locations and 1 grocery shop with 25+ staff",
                    "Implemented IT modernization, including POS systems and workflow automation",
                    "Led budgeting, financial planning, procurement, payroll, and compliance management",
                    "Introduced operational improvements to increase efficiency and customer satisfaction",
                  ],
                  achievements: [
                    "Optimized team allocation and resource planning, improving operational performance",
                    "Expanded business reach through strategic planning and stakeholder engagement",
                  ],

                },
                {
                  role: "President",
                  company: "Software Engineering Students' Association - University of Kelaniya · Full-time",
                  period: "Jul 2022 - Jul 2023 · 1 yr 1 mo",

                  desc: [
                    "Cultivated effective leadership and teamwork skills",
                    "Organized largest 24-hour coding inter-university hackathon physically at the university",
                    "Expanded network, built relationships, planned events, fundraised, and motivated four undergraduate batches",
                  ],

                },
                {
                  role: "Committee Member",
                  company: "Software Engineering Students' Association - University of Kelaniya",
                  period: "Jul 2021 - Jul 2022 · 1 yr 1 mo",

                  desc: [
                    "Presented suggestions and ideas about SESA events & degree-related matters during meetings",
                  ],

                },
                {
                  role: "Junior Treasurer",
                  company: "Software Engineering Students' Association - University of Kelaniya · Full-time",
                  period: "Jul 2020 - Jul 2021 · 1 yr 1 mo",

                  desc: [
                    "Responsible for all financial activities carried out by SESA",
                    "Managed key events: Realhack, JuniorHack, Inceptio, CSR Projects, Webinars, Seminars",
                  ],

                },
                {
                  role: "Business Analyst Intern",
                  company: "ELZIAN AGRO · Internship",
                  period: "Sep 2021 - Feb 2022 · 6 mos",

                  desc: [
                    "Maintained good relationships with stakeholders",
                    "Managed communications and scheduled meetings",
                    "Requirement elicitation and documentation",
                    "Assisted in recruitment and selection processes",
                    "Supported organizational activities like site visits, customer awareness programs, and event planning",
                    "Collected and analyzed client requirements and converted them into actionable insights",
                  ],

                },
                {
                  role: "Sales Manager",
                  company: "AIA Sri Lanka · Part-time",
                  period: "Feb 2019 - Sep 2021 · 2 yrs 8 mos",

                  desc: [
                    "Gained leadership, recruiting, teamwork, mentoring, and employee training skills",
                  ],

                },
                {
                  role: "Sales Executive",
                  company: "AIA Sri Lanka",
                  period: "Apr 2018 - Feb 2019 · 11 mos",

                  desc: [
                    "Gained skills in sales, marketing, communication, lead generation, strategic planning, requirement analysis, corporate relationships, convincing, leadership, mentoring, and meeting deadlines",
                  ],

                },
              ].map((job, i) => (
                <div key={i} className="mb-12 ml-8 relative">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 bg-[#2B7BE9] rounded-full border-4 border-white shadow-sm" />
                  <span className="text-[14px] font-bold text-[#2B7BE9] mb-1 block">
                    {job.period}
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F]">
                    {job.role}
                  </h3>
                  <p className="text-[18px] text-[#1D1D1F] font-medium mb-2">
                    {job.company}
                  </p>

                  {job.desc && (
                    <ul className="list-disc ml-5 text-[#86868B] text-[16px] leading-relaxed mb-2">
                      {job.desc.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {job.achievements && (
                    <ul className="list-disc ml-5 text-[#86868B] text-[16px] leading-relaxed">
                      {job.achievements.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond Work Section */}
        <section className="py-24 bg-[#171717] text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] text-[#FFFFFF] font-semibold mb-8">Beyond Work</h2>
            <p className="text-[18px] text-[#F2F2F2] font-regular leading-relaxed mb-12 max-w-2xl mx-auto">
              When I'm not optimizing workflows, I explore the landscapes of Sri Lanka through photography and mentoring young tech enthusiasts,
              believing that balance is the key to sustained creativity.
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};