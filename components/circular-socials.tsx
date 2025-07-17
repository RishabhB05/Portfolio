"use client"

import { motion } from "framer-motion"
import { Facebook, Dribbble, DribbbleIcon as Behance, Linkedin, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CircularSocialsProps {
  scrollToTop: () => void
}

export default function CircularSocials({ scrollToTop }: CircularSocialsProps) {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/yourprofile", label: "Facebook" },
    { icon: Dribbble, href: "https://dribbble.com/yourprofile", label: "Dribbble" },
    { icon: Behance, href: "https://behance.net/yourprofile", label: "Behance" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rishabh-baruah-a9606b252/", label: "LinkedIn" },
  ]

  const radius = 120 // Radius of the circle
  const centerOffset = 150 // Offset from the right/bottom edge

  return (
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] flex items-center justify-center pointer-events-none lg:block hidden">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Outer circle path */}
        <motion.svg
          className="absolute inset-0"
          viewBox="0 0 300 300"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <circle
            cx="150"
            cy="150"
            r={radius}
            stroke="var(--circle-stroke-color)" // Use CSS variable
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
          />
        </motion.svg>

        {socialLinks.map((social, index) => {
          const angle = (index / socialLinks.length) * 2 * Math.PI - Math.PI / 2 // Start from top
          const x = 150 + radius * Math.cos(angle)
          const y = 150 + radius * Math.sin(angle)

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/10 dark:border-white/20 dark:text-white bg-gray-200/50 border-gray-300/50 text-gray-700 backdrop-blur-sm pointer-events-auto"
              style={{
                left: x - 20, // Adjust for button size
                top: y - 20, // Adjust for button size
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "var(--social-hover-bg)" }} // Use CSS variable
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 dark:text-white text-gray-700" />
            </motion.a>
          )
        })}

        {/* Back to Top Button */}
        <motion.div
          className="absolute bottom-8 right-8 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 dark:bg-white/10 dark:border-white/20 dark:text-white bg-gray-200/50 border-gray-300/50 text-gray-700 backdrop-blur-sm dark:hover:bg-white/20 hover:bg-gray-300/50"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 dark:text-white text-gray-700" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
