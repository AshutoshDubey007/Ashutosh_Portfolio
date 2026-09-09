"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    title: "Signalist",
    subtitle: "Stock Market Intelligence Platform",
    description:
      "A modern stock-market tracking platform providing real-time market insights, top gainers and losers, personalized news summaries, and automated daily updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Finnhub API", "Inngest"],
    github: "https://github.com/AshutoshDubey007/Signalist-Stalker",
    number: "01",
    icon: <Globe size={20} />,
  },
  {
    title: "NexTALK",
    subtitle: "Real-Time Communication Platform",
    description:
      "A full-stack real-time chat application with authentication, private and group conversations, persistent messaging, and responsive communication experiences.",
    tech: ["MERN", "Socket.io", "MongoDB", "React", "Node.js"],
    github: "https://github.com/AshutoshDubey007/NexTALK",
    number: "02",
    icon: <Layers size={20} />,
  },
  {
    title: "Investor Dashboard",
    subtitle: "Investment Analytics Dashboard",
    description:
      "An interactive investment dashboard designed to present financial information and analytical insights through a clean, responsive and data-focused interface.",
    tech: ["TypeScript", "Dashboard UI", "Data Visualization"],
    github: "https://github.com/AshutoshDubey007/Investor-Dashboard",
    number: "03",
    icon: <Database size={20} />,
  },
  {
    title: "FinanceFlow",
    subtitle: "Personal Finance Platform",
    description:
      "A modern finance management application focused on organizing financial information and presenting useful insights through an intuitive dashboard experience.",
    tech: ["TypeScript", "React", "Dashboard", "UI/UX"],
    github: "https://github.com/AshutoshDubey007/FinanceFlow",
    number: "04",
    icon: <Code2 size={20} />,
  },
  {
    title: "SkillSwap Hub",
    subtitle: "Peer-to-Peer Skill Exchange",
    description:
      "A platform designed to connect people who want to exchange knowledge and skills, with user-focused experiences for discovering and connecting with others.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/AshutoshDubey007/SkillSwap-hub",
    number: "05",
    icon: <Terminal size={20} />,
  },
  {
    title: "AI-CHATBOT",
    subtitle: "AI Conversational Interface",
    description:
      "A ChatGPT-inspired conversational interface featuring a dynamic UI, responsive design, state management and an interactive AI-focused user experience.",
    tech: ["JavaScript", "React", "HTML", "CSS"],
    github: "https://github.com/AshutoshDubey007/AI-CHATBOT",
    number: "06",
    icon: <Mail size={20} />,
  },
];

const experience = [
  {
    company: "Turing",
    role: "Software Developer",
    location: "Remote",
    date: "Nov 2025 — Dec 2025",
    description:
      "Worked on software development fundamentals including secure authentication systems, Linux command-line environments and Docker-based containerization.",
  },
  {
    company: "Nexora Cogniware",
    role: "Software Developer",
    location: "Gwalior, India",
    date: "Jun 2025 — Nov 2025",
    description:
      "Built responsive and interactive web interfaces using Astro.js and Tailwind CSS. Integrated RESTful APIs and worked with Directus for dynamic content and data management.",
  },
  {
    company: "ZeTheta",
    role: "AI Chatbot Developer",
    location: "Remote",
    date: "Mar 2025 — Jul 2025",
    description:
      "Developed and deployed AI chatbot solutions using LangChain and Groq API. Integrated FAISS vector databases for retrieval-based responses from custom documents and implemented fallback logic for reliable responses.",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["C++", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Astro.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQLite", "Directus"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Linux", "Docker"],
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
      <span>{number}</span>
      <span className="h-px w-8 bg-purple-500/40" />
      <span>{children}</span>
    </div>
  );
}

function SocialLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 font-mono text-[10px] transition-all group-hover:border-purple-400/50 group-hover:text-purple-300">
        {label}
      </span>
    </a>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.14),transparent_35%)]" />

        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute right-[-15%] top-[45%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-wider"
          >
            <span className="text-purple-400">A</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300">D</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SocialLink
              label="GH"
              href="https://github.com/AshutoshDubey007"
            />

            <SocialLink
              label="LI"
              href="https://www.linkedin.com/in/ashutoshdubey31/"
            />

            <a
              href="#contact"
              className="ml-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-xs font-medium text-purple-300 transition-all hover:border-purple-400/60 hover:bg-purple-500/20"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/[0.06] bg-black/95 px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-20 lg:px-10"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />

                <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
              >
                Ashutosh
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-300 to-purple-400 bg-clip-text text-transparent">
                  Dubey.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 max-w-2xl text-lg leading-8 text-zinc-500 md:text-xl"
              >
                Full Stack Web Developer crafting modern, scalable and
                interactive digital experiences with{" "}
                <span className="text-zinc-300">
                  React, Next.js and Node.js.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all hover:bg-purple-300"
                >
                  View selected work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition-all hover:border-white/30 hover:bg-white/[0.04]"
                >
                  Download Resume
                  <ArrowDown size={15} />
                </a>
              </motion.div>
            </div>

            {/* =====================================================
                HERO SIDE - DEVELOPER TERMINAL
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="relative hidden h-[460px] items-center justify-center lg:flex"
            >
              {/* Background Glow */}
              <div className="absolute h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[110px]" />

              {/* Terminal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#09090b]/95 shadow-2xl shadow-purple-950/30 backdrop-blur-xl"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-[10px] text-zinc-600">
                    ashutosh.dev
                  </span>
                </div>

                {/* Terminal Code */}
                <div className="px-6 py-7 font-mono text-sm leading-8">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">developer</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-purple-300">&#123;</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-zinc-500">name:</span>{" "}
                    <span className="text-green-300">
                      &quot;Ashutosh Dubey&quot;
                    </span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-zinc-500">role:</span>{" "}
                    <span className="text-green-300">
                      &quot;Full Stack Developer&quot;
                    </span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-zinc-500">stack:</span>{" "}
                    <span className="text-purple-300">&#91;</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-green-300">&quot;Next.js&quot;</span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-green-300">&quot;React&quot;</span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-green-300">&quot;Node.js&quot;</span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-green-300">&quot;MongoDB&quot;</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-purple-300">&#93;</span>
                    <span className="text-zinc-600">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-zinc-500">status:</span>{" "}
                    <span className="text-green-300">
                      &quot;building&quot;
                    </span>
                  </div>

                  <div>
                    <span className="text-purple-300">&#125;</span>
                  </div>

                  {/* Terminal Prompt */}
                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-xs">
                    <span className="text-purple-400">➜</span>
                    <span className="text-zinc-500">
                      Ready to build.
                    </span>
                    <span className="h-4 w-[2px] animate-pulse bg-purple-400" />
                  </div>
                </div>
              </motion.div>

              {/* Full Stack Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-16 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-purple-300" />

                  <span className="font-mono text-[10px] text-purple-200">
                    FULL STACK
                  </span>
                </div>
              </motion.div>

              {/* Available Badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs text-zinc-400">
                    Available for work
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-6 flex items-center gap-4 text-zinc-700 lg:left-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-px w-12 bg-zinc-800" />
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative border-t border-white/[0.06] px-6 py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01">About me</SectionLabel>

          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                I build products that are{" "}
                <span className="text-zinc-600">functional, fast</span> and
                <span className="text-purple-300"> memorable.</span>
              </h2>
            </div>

            <div className="space-y-7 text-sm leading-7 text-zinc-500">
              <p>
                I&apos;m Ashutosh Dubey, a Full Stack Web Developer passionate
                about building modern web applications and solving real-world
                problems through technology.
              </p>

              <p>
                My experience spans frontend development, backend APIs,
                databases, AI-powered applications and real-time systems. I
                enjoy taking an idea from concept to a polished, working
                product.
              </p>

              <div className="flex items-center gap-3 pt-4 text-zinc-400">
                <MapPin size={15} className="text-purple-400" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid border-y border-white/[0.06] sm:grid-cols-3">
            <div className="border-b border-white/[0.06] py-8 sm:border-b-0 sm:border-r sm:px-8">
              <p className="text-4xl font-semibold tracking-tight">6+</p>

              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                Featured Projects
              </p>
            </div>

            <div className="border-b border-white/[0.06] py-8 sm:border-b-0 sm:border-r sm:px-8">
              <p className="text-4xl font-semibold tracking-tight">3+</p>

              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                Industry Experiences
              </p>
            </div>

            <div className="py-8 sm:px-8">
              <p className="text-4xl font-semibold tracking-tight">∞</p>

              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                Things to build
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="relative border-t border-white/[0.06] px-6 py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02">Experience</SectionLabel>

          <div className="grid gap-16 lg:grid-cols-[0.45fr_1fr]">
            <div>
              <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                Where I&apos;ve
                <br />
                <span className="text-zinc-600">worked.</span>
              </h2>
            </div>

            <div className="space-y-0">
              {experience.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative border-t border-white/[0.08] py-10"
                >
                  <div className="grid gap-5 md:grid-cols-[0.3fr_1fr]">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">
                        {item.date}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-purple-300">
                            {item.role}
                          </h3>

                          <p className="mt-1 text-sm text-purple-400">
                            {item.company}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-zinc-600">
                          <MapPin size={13} />
                          {item.location}
                        </div>
                      </div>

                      <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="relative border-t border-white/[0.06] px-6 py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-8">
            <div>
              <SectionLabel number="03">Projects</SectionLabel>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Selected work.
              </h2>
            </div>

            <p className="hidden font-mono text-xs text-zinc-600 md:block">
              {projects.length.toString().padStart(2, "0")} projects
            </p>
          </div>

          {/* Project Grid */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[390px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.018] p-7 transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-500/[0.035] md:p-8"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* GitHub Arrow */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  <ArrowUpRight size={18} />
                </a>

                {/* Project Number */}
                <div className="mb-10 flex items-center gap-3">
                  <span className="font-mono text-xs text-purple-400">
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                    Project
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-purple-300 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/10">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="max-w-[80%] text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-sm font-medium text-purple-300/80">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 pb-20 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2 md:bottom-8 md:left-8 md:right-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.015] px-3 py-1.5 text-[10px] text-zinc-500 transition-colors group-hover:border-purple-500/20 group-hover:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/AshutoshDubey007?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-400 transition-all hover:border-purple-400/40 hover:bg-purple-500/5 hover:text-white"
            >
              View all repositories

              <ExternalLink
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="relative border-t border-white/[0.06] px-6 py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">Skills</SectionLabel>

          <div className="grid gap-16 lg:grid-cols-[0.45fr_1fr]">
            <div>
              <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                Tools of
                <br />
                <span className="text-zinc-600">the trade.</span>
              </h2>
            </div>

            <div>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[180px_1fr]"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                    {skill.category}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-4 py-2 text-xs text-zinc-400 transition-all hover:border-purple-400/30 hover:text-purple-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative border-t border-white/[0.06] px-6 py-32 lg:px-10 lg:py-44"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="05">Contact</SectionLabel>

          <div className="grid gap-14 lg:grid-cols-[1fr_0.5fr]">
            <div>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
                Have an idea?
                <br />
                <span className="text-zinc-600">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mt-10 max-w-xl text-base leading-7 text-zinc-500">
                Whether you have a project in mind, an interesting
                opportunity, or simply want to connect, feel free to reach
                out.
              </p>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshkdubey007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 text-lg text-white"
              >
                ashutoshkdubey007@gmail.com

                <ArrowUpRight
                  size={20}
                  className="text-purple-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <div className="flex flex-col justify-end">
              <div className="border-t border-white/[0.08] pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Find me online
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <SocialLink
                    label="GH"
                    href="https://github.com/AshutoshDubey007"
                  />

                  <SocialLink
                    label="LI"
                    href="https://www.linkedin.com/in/ashutoshdubey31/"
                  />

                  <SocialLink
                    label="EM"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshkdubey007@gmail.com"
                  />
                </div>
              </div>

              <div className="mt-12 border-t border-white/[0.08] pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Currently
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Open to software development opportunities, freelance
                  projects and interesting collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/[0.06] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-zinc-700 sm:flex-row">
          <p>© {new Date().getFullYear()} Ashutosh Dubey</p>

          <p className="font-mono">Designed & built with Next.js</p>
        </div>
      </footer>

      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed bottom-0 left-0 right-0 z-[60] h-[2px] origin-left bg-purple-400"
      />
    </main>
  );
}