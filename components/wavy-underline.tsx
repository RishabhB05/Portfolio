"use client"

import { motion } from "framer-motion"

interface WavyUnderlineProps {
  className?: string
}

export default function WavyUnderline({ className }: WavyUnderlineProps) {
  return (
    <motion.svg
      className={className}
      width="100%"
      height="16"
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
    >
      <path
        d="M1 8C1 8 20.5 1 40 8C59.5 15 79 8 98.5 8C118 8 137.5 15 157 8C176.5 1 199 8 199 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
