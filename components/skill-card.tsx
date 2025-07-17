"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import MagicCard from "./magic-card"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  icon: LucideIcon
  name: string
  level: number
  color: string // Tailwind gradient classes, e.g., "from-blue-600 to-teal-500"
  delay?: number
}

export default function SkillCard({ icon: Icon, name, level, color, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.66rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
    >
      <MagicCard className="p-4 flex flex-col items-center text-center h-full" gradientColor="#2563eb">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-3`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h4 className="text-lg font-semibold dark:text-slate-200 text-slate-800 mb-2">{name}</h4>
        <div className="w-full dark:bg-slate-700 bg-slate-200 rounded-full h-2.5 mb-1">
          <motion.div
            className={cn("h-2.5 rounded-full", `bg-gradient-to-r ${color}`)}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <span className="text-sm dark:text-slate-400 text-slate-600">{level}%</span>
      </MagicCard>
    </motion.div>
  )
}
