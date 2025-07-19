"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypingAnimation } from "@/components/magicui/typing-animation";

import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Cloud,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Star,
  ImageIcon,
  TrendingUp,
  Sparkles,
  Cpu,
  Layers,
  Bot,
  Menu,
  X,
} from "lucide-react"
import { projects } from "../lib/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroSection from "../components/hero-section"
import ContactSection from "../components/contact-section"
import { Toaster } from "@/components/ui/toaster"
import { ThemeToggle } from "../components/theme-toggle"
import AnimatedBackground from "../components/animated-background"
import MagicCard from "../components/magic-card"
import GradientText from "../components/gradient-text"
import SkillCard from "../components/skill-card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const skills = {
    "Programming Languages": [
      { name: "C++", level: 85, icon: Code, color: "from-blue-600 to-teal-500" },
      { name: "JavaScript", level: 90, icon: Code, color: "from-amber-500 to-orange-500" },
      { name: "TypeScript", level: 85, icon: Code, color: "from-blue-600 to-indigo-700" },
    ],
    Frontend: [
      { name: "React", level: 90, icon: Globe, color: "from-blue-600 to-indigo-700" },
      { name: "Next.js", level: 85, icon: Globe, color: "from-gray-600 to-slate-500" },
      { name: "Tailwind CSS", level: 88, icon: Globe, color: "from-teal-500 to-blue-600" },
      { name: "HTML/CSS", level: 92, icon: Layers, color: "from-amber-600 to-orange-500" },
    ],
    Backend: [
      { name: "Node.js", level: 85, icon: Server, color: "from-emerald-600 to-green-500" },
      { name: "Express.js", level: 82, icon: Server, color: "from-slate-600 to-gray-500" },
      { name: "Socket.io", level: 78, icon: Cpu, color: "from-indigo-600 to-purple-500" },
    ],
    Database: [
      { name: "MongoDB", level: 80, icon: Database, color: "from-emerald-600 to-green-500" },
      { name: "MySQL", level: 75, icon: Database, color: "from-blue-600 to-teal-500" },
      { name: "Neon DB", level: 70, icon: Database, color: "from-indigo-600 to-purple-500" },
    ],
    "DevOps & Cloud": [
      { name: "Jenkins", level: 68, icon: Cloud, color: "from-rose-600 to-red-500" },
      { name: "AWS", level: 75, icon: Cloud, color: "from-amber-600 to-orange-500" },
      { name: "Docker", level: 70, icon: Cloud, color: "from-blue-600 to-teal-500" },
    ],
  }

  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology: Computer Science Engineering",
      location: "Bhopal, India",
      period: "2022 - 2026",
      grade: "CGPA: 8.17/10",
      icon: GraduationCap,
    },
    {
      institution: "NKEM Higher Secondary School",
      degree: "CBSE Board Class XII",
      location: "Assam, India",
      period: "2021",
      grade: "85%",
      icon: ImageIcon,
    },
    {
      institution: "Maharishi Vidya Mandir Public School",
      degree: "CBSE Board Class X",
      location: "Assam, India",
      period: "2019",
      grade: "88%",
      icon: ImageIcon,
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Ethnus codemitra",
      date: "April 2025",
      icon: ImageIcon,
      color: "from-amber-600 to-orange-500",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      date: "March 2025",
      icon: ImageIcon,
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "June 2024",
      icon: ImageIcon,
      color: "from-blue-700 to-teal-600",
    },
    {
      title: "Web Development Ultimate Guide",
      issuer: "Udemy",
      date: "November 2023",
      icon: ImageIcon,
      color: "from-indigo-600 to-purple-500",
    },
  ]

  const positions = [
    {
      title: "Volunteer",
      organization: "VIT Bhopal Northeast Club",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Organized and executed club events, from initial planning stages to final implementation",
        "Conducted orientation sessions for new members to familiarize them with club activities",
      ],
      icon: ImageIcon,
    },
    {
      title: "Core Team Member",
      organization: "VIT Bhopal Microsoft Club",
      period: "Nov 2022 - Present",
      responsibilities: ["Conducted talks by industry professionals, events, and educational sessions regularly"],
      icon: ImageIcon,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "skills", "certifications", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  return (
    <div className="min-h-screen dark:bg-[#1a1a2e] bg-slate-50 dark:text-white text-gray-900 overflow-x-hidden">
      <AnimatedBackground />
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-blue-900 dark:to-[#23234a] bg-white/80 backdrop-blur-md border-b-2 border-transparent dark:border-b-blue-800 border-b-gray-200 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <motion.div className="text-xl md:text-2xl font-bold" whileHover={{ scale: 1.05 }}>
              <span className="dark:text-white text-gray-900">{"<RB />"}</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                {["home", "about", "education", "projects", "skills", "certifications", "experience", "contact"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize transition-colors relative text-sm lg:text-base ${
                        activeSection === item
                          ? "dark:text-blue-400 text-blue-700 font-semibold"
                          : "dark:text-slate-300 text-slate-600 dark:hover:text-blue-300 hover:text-blue-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                      {activeSection === item && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 dark:bg-blue-400 bg-blue-600"
                          layoutId="activeSection"
                        />
                      )}
                    </motion.button>
                  ),
                )}
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg dark:text-white text-gray-900 dark:hover:bg-blue-800/50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t dark:border-gray-700 border-gray-200 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {["home", "about", "education", "projects", "skills", "certifications", "experience", "contact"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize transition-colors text-left py-2 px-3 rounded-lg ${
                        activeSection === item
                          ? "dark:text-blue-400 text-blue-700 font-semibold dark:bg-blue-800/30 bg-blue-50"
                          : "dark:text-slate-300 text-slate-600 dark:hover:text-blue-300 hover:text-blue-600 dark:hover:bg-gray-700/50 hover:bg-gray-50"
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.button>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
      {/* Hero Section */}
      <HeroSection y={y} scrollToSection={scrollToSection} />
      {/* About Section */}
      <section id="about" className="py-16 md:py-20 dark:bg-[#1a1a2e] bg-white/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                About Me
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <MagicCard
              className="p-6 md:p-8 dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
              gradientColor="#6366f1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mb-4">
                    Passionate Computer Science Student
                  </h3>
                  <p className="dark:text-slate-300 text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    <TypingAnimation>
                    I'm a dedicated Computer Science Engineering student at VIT Bhopal with a strong passion for
                    full-stack development and artificial intelligence. With hands-on experience in building scalable
                    applications and a keen interest in emerging technologies, I strive to create innovative solutions
                    that make a real impact.
                    </TypingAnimation>
                  </p>
                  <p className="dark:text-slate-300 text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                     <TypingAnimation>
                    My journey includes developing social networking platforms, AI-powered career coaching applications,
                    and employer management systems. I'm always eager to learn new technologies and take on challenging
                    projects that push the boundaries of what's possible.
                     </TypingAnimation>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="dark:bg-blue-800 dark:text-blue-200 bg-blue-50 text-blue-700 text-xs md:text-sm"
                      >
                        <Sparkles className="w-3 h-3 mr-1" />
                        Full Stack Developer
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="dark:bg-teal-800 dark:text-teal-200 bg-teal-50 text-teal-700 text-xs md:text-sm"
                      >
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Enthusiast
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="dark:bg-emerald-800 dark:text-emerald-200 bg-emerald-50 text-emerald-700 text-xs md:text-sm"
                      >
                        <Sparkles className="w-3 h-3 mr-1" />
                        Problem Solver
                      </Badge>
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
                  {[
                    { icon: MapPin, text: "Bhopal, India" },
                    { icon: GraduationCap, text: "VIT Bhopal - CSE" },
                    { icon: Award, text: "CGPA: 8.17/10" },
                    { icon: Phone, text: "+91 9387530963" },
                    { icon: Mail, text: "rishabhbaruah87@gmail.com" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 dark:text-blue-400 text-blue-600 flex-shrink-0" />
                      <span className="dark:text-slate-300 text-slate-600 text-sm md:text-base break-all">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-16 md:py-20 dark:bg-[#1a1a2e] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                Education
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-8 last:mb-0"
              >
                <MagicCard
                  className="p-4 md:p-6 dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
                  gradientColor="#14b8a6"
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 dark:bg-blue-600 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <edu.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-800 mb-2 md:mb-0">{edu.degree}</h3>
                        <Badge
                          variant="outline"
                          className="w-fit mx-auto sm:mx-0 md:mt-0 dark:bg-white/10 dark:text-slate-300 dark:border-slate-600 bg-gray-100 text-slate-600 border-gray-300 text-xs md:text-sm"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-base md:text-lg font-semibold dark:text-blue-400 text-blue-600 mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <p className="dark:text-slate-300 text-slate-600 flex items-center justify-center sm:justify-start text-sm md:text-base">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 flex-shrink-0" />
                          {edu.location}
                        </p>
                        <p className="dark:text-green-400 text-green-600 font-semibold text-sm md:text-base text-center sm:text-right">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16 dark:bg-[#1a1a2e] bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                Featured Projects
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="w-full relative">
            <button
              type="button"
              aria-label="Scroll Left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-[#23234a]/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition hidden lg:block"
              onClick={() => {
                const container = document.getElementById('project-scroll-container');
                if (container) container.scrollBy({ left: -440, behavior: 'smooth' });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div id="project-scroll-container" className="overflow-x-auto no-scrollbar">
              <div className="flex flex-row gap-4 md:gap-6 pb-4 min-w-full">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group w-[320px] sm:w-[360px] md:w-[420px] flex-shrink-0 mx-1 md:mx-2 flex select-none"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <MagicCard
                      className="overflow-hidden dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200 flex flex-col h-full"
                      gradientColor="#6366f1"
                    >
                      <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                      <div className="p-0 flex flex-col h-full">
                        <div className="p-4 md:p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-3 mb-4">
                            <motion.div
                              className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <project.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </motion.div>
                            <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-800 leading-tight">{project.title}</h3>
                          </div>
                          <p className="dark:text-slate-300 text-slate-600 mb-4 leading-relaxed text-xs md:text-sm">{project.description}</p>
                          <div className="mb-4">
                            <h4 className="text-sm md:text-base font-semibold dark:text-white text-slate-800 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {project.features.slice(0, 4).map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <Star className="w-3 h-3 md:w-4 md:h-4 dark:text-yellow-400 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="dark:text-slate-300 text-slate-600 text-xs leading-tight">{feature}</span>
                                </motion.li>
                              ))}
                              {project.features.length > 4 && (
                                <li className="text-xs text-slate-500 italic">+{project.features.length - 4} more features</li>
                              )}
                            </ul>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm md:text-base font-semibold dark:text-white text-slate-800 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, idx) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="dark:bg-slate-700 dark:text-slate-300 bg-slate-100 text-slate-700 text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-auto">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full dark:border-slate-600 dark:bg-transparent dark:text-white border-slate-300 bg-transparent text-slate-700 dark:hover:bg-slate-700 hover:bg-slate-100 text-xs md:text-sm"
                              >
                                <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                Code
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                              <Button
                                size="sm"
                                className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-700 hover:bg-blue-800 text-white text-xs md:text-sm"
                              >
                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                Demo
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                        <div className="relative overflow-hidden h-32 md:h-40 flex-shrink-0">
                          <motion.img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </MagicCard>
                  </motion.div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="Scroll Right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-[#23234a]/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition hidden lg:block"
              onClick={() => {
                const container = document.getElementById('project-scroll-container');
                if (container) container.scrollBy({ left: 440, behavior: 'smooth' });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 dark:bg-[#1a1a2e] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                Skills & Technologies
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="p-4 md:p-6 dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
                  gradientColor="#14b8a6"
                >
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-800 mb-4 md:mb-6 text-center">{category}</h3>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {skillList.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                        level={skill.level}
                        color={skill.color}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8"
          >
            <MagicCard
              className="p-4 text-center dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
              gradientColor="#6366f1"
            >
              <h3 className="text-base md:text-lg font-bold mb-3">
                <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                  Coursework
                </GradientText>
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["DBMS", "Computer Networks", "Operating Systems", "Data Structures & Algorithms"].map(
                  (course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="dark:bg-slate-700 dark:text-slate-200 bg-white/80 text-slate-700 px-2 md:px-3 py-1 text-xs md:text-sm"
                      >
                        {course}
                      </Badge>
                    </motion.div>
                  ),
                )}
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="py-12 md:py-16 dark:bg-[#1a1a2e] bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                Certifications
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <MagicCard
                  className="h-full dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
                  gradientColor="#f59e0b"
                >
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <motion.div
                        className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <cert.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-800 mb-2 group-hover:dark:text-blue-400 group-hover:text-blue-600 transition-colors leading-tight">
                          {cert.title}
                        </h3>
                        <p className="dark:text-blue-400 text-blue-600 font-semibold mb-2 text-sm md:text-base">{cert.issuer}</p>
                        <div className="flex items-center justify-center sm:justify-start dark:text-slate-400 text-slate-500">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-16 dark:bg-[#1a1a2e] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText gradient="dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 from-blue-700 via-teal-600 to-blue-800">
                Positions of Responsibility
              </GradientText>
            </h2>
            <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="p-4 md:p-6 dark:bg-[#2a2a4a]/70 bg-white/70 dark:border-gray-700 border-gray-200"
                  gradientColor="#10b981"
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 dark:bg-blue-600 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <position.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-800 mb-2 md:mb-0">{position.title}</h3>
                        <Badge
                          variant="outline"
                          className="w-fit mx-auto sm:mx-0 md:mt-0 dark:bg-white/10 dark:text-slate-300 dark:border-slate-600 bg-gray-100 text-slate-600 border-gray-300 text-xs md:text-sm"
                        >
                          {position.period}
                        </Badge>
                      </div>
                      <p className="text-base md:text-lg font-semibold dark:text-blue-400 text-blue-600 mb-4">
                        {position.organization}
                      </p>
                      <ul className="space-y-2">
                        {position.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start space-x-2 text-left"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 dark:text-green-400 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="dark:text-slate-300 text-slate-600 text-xs md:text-sm leading-relaxed">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection y={y} scrollToSection={scrollToSection} />
      {/* Footer */}
      <footer className="py-6 md:py-8 dark:bg-[#1a1a2e] bg-gray-900 dark:text-white text-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-blue-700/10 bg-blue-300/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="dark:text-slate-300 text-gray-300 text-sm md:text-base">&copy; 2024 Rishabh Baruah. All rights reserved.</p>
            <p className="mt-2 dark:text-slate-400 text-gray-400 text-xs md:text-sm">Built with React, Tailwind CSS, and Framer Motion</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
