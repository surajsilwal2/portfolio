"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, FileText, GraduationCap, Award, Code } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional credentials
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column - Resume Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500/50 pl-4">
                    <h4 className="text-lg font-semibold text-white">
                      Bachelor of Science in Computer Science and Information
                      Technology (BSc.CSIT)
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Currently in 7th Semester
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      2021 - Present
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Pursuing comprehensive studies in computer science,
                      software engineering, and modern web technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accordions for Additional Info */}
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="skills"
                className="border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm px-4"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-400" />
                    Technical Skills
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  <div className="space-y-2">
                    <p>
                      <strong className="text-gray-300">Frontend:</strong>{" "}
                      React, Next.js, TypeScript, JavaScript, HTML, CSS
                    </p>
                    <p>
                      <strong className="text-gray-300">Styling:</strong>{" "}
                      Tailwind CSS, shadcn/ui, Framer Motion
                    </p>
                    <p>
                      <strong className="text-gray-300">Backend:</strong>{" "}
                      Node.js, Prisma ORM, Better Auth, Appwrite
                    </p>
                    <p>
                      <strong className="text-gray-300">Tools:</strong> Git,
                      GitHub, Vercel, VS Code, npm
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="achievements"
                className="border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm px-4"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    Projects & Learning
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      Built Patient Management System using Next.js and Appwrite
                    </li>
                    <li>
                      Developed Learning Management System with Stripe
                      integration
                    </li>
                    <li>
                      Continuously learning modern web development technologies
                    </li>
                    <li>
                      Active on GitHub building and experimenting with new
                      projects
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Right Column - Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Download Resume Card */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Download Resume
                  </h3>
                  <p className="text-gray-700">
                    Get the complete PDF version with all details
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Resume
                  </a>
                </Button>
                <p className="text-xs text-gray-700 mt-4">
                  PDF format • Last updated: January 2024
                </p>
              </CardContent>
            </Card>

            {/* Quick Summary */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Professional Summary
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Currently pursuing BSc.CSIT (7th semester) with a strong
                  passion for full-stack web development. Experienced in
                  building modern web applications using React, Next.js, and
                  TypeScript.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Focused on creating user-centric applications with clean code
                  and scalable architecture. Constantly learning and adapting to
                  new technologies and industry best practices.
                </p>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-gray-400 mb-4">
                  Interested in working together?
                </p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-700 hover:bg-blue-500 hover:border-blue-500 w-full"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
