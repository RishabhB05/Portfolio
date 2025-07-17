"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export default function GradientText({
  children,
  className,
  gradient = "from-blue-400 via-purple-400 to-indigo-400", // Adjusted default gradient for dark background
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold`, className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.span>
  )
}
