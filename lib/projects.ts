import { Globe, Brain, Code, Users } from "lucide-react"

export const projects = [
  {
    title: "Unichat – Social Networking Platform",
    description:
      "Developed a secure social networking platform enabling real-time communication, reducing spam by 40% and increasing user engagement by 30% within the first month.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["MongoDB", "Node.js", "JWT", "Socket.io", "React", "Express.js"],
    features: [
      "Real-time chat pipeline using WebSockets for seamless message delivery",
      "JWT-based authentication for security",
      "MongoDB for data storage",
      "40% spam reduction through advanced filtering",
      "30% increase in user engagement",
      "Responsive design for all devices",
    ],
    icon: Globe,
    color: "from-blue-600 to-teal-500", // Updated color
    github: "#",
    live: "#",
  },
  {
    title: "Employer Management System",
    description:
      "Developed a full-stack task management platform enabling admins to assign, track tasks and manage employee accounts with custom credentials, improving team productivity by 35%.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React.js", "Tailwind CSS", "Shadcn", "Vite", "Magic UI"," HTML"],
    features: [
      "Admin dashboard for task assignment and progress monitoring",
      "Employee portal with task acceptance/rejection and completion tracking",
      "Custom email/password generation system for secure onboarding",
      "35% improvement in team productivity",
      "Responsive design for all devices",
      "Real-time notifications",
    ],
    icon: Users,
    color: "from-emerald-600 to-green-500", // Updated color
    github: "#",
    live: "#",
  },
  {
    title: "AI Career Coach Platform",
    description:
      "Developed an AI-powered career guidance platform enabling resume building, interview preparation, and personalized cover letter generation.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "Tailwind CSS", "Clerk Auth", "Neon DB", "Prisma", "Gemini AI"],
    features: [
      "AI-generated resumes tailored to job descriptions",
      "Role-specific interview questions with analytics",
      "Dynamic cover letter creation from job descriptions",
      "Personalized career path recommendations",
      "Interview practice with AI feedback",
      "Job application tracking system",
      "Cover letter generation with AI",
    ],
    icon: Brain,
    color: "from-indigo-600 to-purple-500", // Updated color
    github: "#",
    live: "#",
  },
  {
    title: "Clone Projects – UI/UX & Security-Focused Replications",
    description:
      "Developed secure, high-performance clones of popular platforms like Netflix, Pinterest, and Amazon with enhanced UI/UX and data handling efficiency.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React.js", "Next.js", "OAuth", "API Optimization", "UI/UX Design"],
    features: [
      "Enhanced UI/UX with React.js and Next.js",
      "Improved data handling efficiency",
      "OAuth authentication implementation",
      "Optimized API performance",
      "Responsive design across all devices",
      "Security-focused implementations",
    ],
    icon: Code,
    color: "from-amber-600 to-orange-500", // Updated color
    github: "#",
    live: "#",
  },
]
