"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Cloud, Smartphone } from "lucide-react"

const icons = [
  { Icon: Code, color: "text-blue-500", delay: 0 },
  { Icon: Database, color: "text-green-500", delay: 0.5 },
  { Icon: Globe, color: "text-purple-500", delay: 1 },
  { Icon: Server, color: "text-orange-500", delay: 1.5 },
  { Icon: Cloud, color: "text-cyan-500", delay: 2 },
  { Icon: Smartphone, color: "text-pink-500", delay: 2.5 },
]

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -200, -300],
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  )
}
