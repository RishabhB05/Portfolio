"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Mail, Phone, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ContactSectionProps {
  y: any
  scrollToSection: (section: string) => void
}

export default function ContactSection({ y, scrollToSection }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 dark:bg-[#1a1a2e] bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r dark:from-blue-400 dark:to-teal-400 from-blue-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 dark:bg-blue-400 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg dark:text-slate-300 text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="dark:bg-[#2a2a4a]/70 bg-white/70 backdrop-blur-sm dark:border-gray-700 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold dark:text-slate-200 text-slate-800">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r dark:from-blue-600 dark:to-teal-600 from-blue-700 to-teal-700 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-slate-200 text-slate-800">Email</p>
                      <p className="dark:text-slate-300 text-slate-600">rishabhbaruah87@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r dark:from-emerald-600 dark:to-blue-600 from-emerald-700 to-blue-700 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-slate-200 text-slate-800">Phone</p>
                      <p className="dark:text-slate-300 text-slate-600">+91 9387530963</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r dark:from-indigo-600 dark:to-purple-500 from-indigo-700 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-slate-200 text-slate-800">Location</p>
                      <p className="dark:text-slate-300 text-slate-600">Bhopal, India</p>
                    </div>
                  </div>

                  <div className="pt-6 dark:border-t-gray-700 border-t-gray-200">
                    <p className="font-semibold dark:text-slate-200 text-slate-800 mb-4">Follow Me</p>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="dark:hover:bg-gray-800 dark:bg-transparent dark:border-slate-600 hover:bg-blue-50 bg-transparent border-slate-300"
                        asChild
                      >
                        <a href="https://github.com/RishabhB05" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 dark:text-white text-gray-700" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="dark:hover:bg-gray-800 dark:bg-transparent dark:border-slate-600 hover:bg-blue-50 bg-transparent border-slate-300"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/rishabh-baruah-a9606b252/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5 dark:text-white text-gray-700" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="dark:hover:bg-gray-800 dark:bg-transparent dark:border-slate-600 hover:bg-blue-50 bg-transparent border-slate-300"
                        asChild
                      >
                        <a href="mailto:rishabhbaruah87@gmail.com">
                          <Mail className="w-5 h-5 dark:text-white text-gray-700" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="dark:bg-[#2a2a4a]/70 bg-white/70 backdrop-blur-sm dark:border-gray-700 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold dark:text-slate-200 text-slate-800">Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r dark:from-blue-700 dark:to-teal-600 from-blue-700 to-teal-600 hover:dark:from-blue-800 hover:dark:to-teal-700 hover:from-blue-800 hover:to-teal-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
