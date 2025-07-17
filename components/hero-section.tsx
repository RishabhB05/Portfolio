"use client"

import { motion } from "framer-motion"
import { Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import WavyUnderline from "./wavy-underline"
import CircularSocials from "./circular-socials"
import { HyperText } from "@/components/magicui/hyper-text";
import AnimatedBackground from "@/components/animated-background";
import { MorphingText } from "@/components/magicui/morphing-text";



interface HeroSectionProps {
  y: any
  scrollToSection: (section: string) => void
}

export default function HeroSection({ y, scrollToSection }: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden dark:bg-[#1a1a2e] bg-white dark:text-white text-gray-900 pt-16 md:pt-24"
    >
      {/* Animated Background Particles */}
      <AnimatedBackground />
      {/* Background Image of Person */}
      <div className="absolute inset-y-0 right-0 w-1/2 lg:w-[45%] xl:w-[40%] overflow-hidden flex items-center justify-center">
        {isClient && (
          <motion.img
            src="PFP.jpg"
            alt="Rishabh Baruah"
            className="h-full w-auto object-cover object-center scale-125 translate-x-1/4 lg:scale-100 lg:translate-x-0"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-left py-20 lg:py-0 lg:w-1/2 xl:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-xl md:text-2xl dark:text-slate-300 text-slate-700 mb-4">
            <div className="text-3xl">
              Hello! I'm
              </div>
              
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-2 leading-tight dark:text-white text-gray-900"
          >
            <HyperText className="text-5xl">Rishabh Baruah</HyperText>    
          </motion.h1>
          <motion.div variants={itemVariants} className="w-48 md:w-64 mb-6">
            <WavyUnderline className="dark:text-blue-400 text-blue-600" />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-8  max-w-xl text-left"
          >

            Computer Science Student & Full Stack Developer specializing in AI & Web Technologies.
            <MorphingText 
              
              texts={[
                "Building intelligent web solutions with AI & React.",
                "Transforming ideas into scalable, secure applications.",
                "Passionate about real-time systems & generative AI."
              ]}
              className="block text-base md:text-lg lg:text-xl min-h-[56px] mt-4 pt-4 font-semibold text-blue-600 dark:text-blue-400 drop-shadow max-w-xl text-left"
            />

          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center">
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full"
                asChild
              >
                <a href="/RishabhBaruah_resume1.pdf" download="RishabhBaruah_resume1.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Get Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="dark:border-white/30 dark:text-white border-gray-300 text-gray-700 px-8 py-3 rounded-full dark:bg-transparent bg-white/50 dark:hover:bg-white/10 hover:bg-gray-100"
                onClick={() => alert("Video playback not implemented yet!")} // Placeholder for video
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {isClient && <CircularSocials scrollToTop={scrollToTop} />}
    </section>
  )
}
