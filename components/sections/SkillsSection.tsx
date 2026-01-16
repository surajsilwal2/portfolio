"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "React / Next.js", level: 85, icon: "⚛️" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML & CSS", level: 90, icon: "🎨" },
      ],
    },
    {
      name: "Styling",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "shadcn/ui", level: 85, icon: "🎯" },
        { name: "Responsive Design", level: 85, icon: "📱" },
        { name: "Framer Motion", level: 75, icon: "🎭" },
      ],
    },
    {
      name: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 70, icon: "🟩" },
        { name: "Prisma ORM", level: 75, icon: "🔷" },
        { name: "Better Auth", level: 70, icon: "🔐" },
        { name: "Appwrite", level: 75, icon: "☁️" },
      ],
    },
    {
      name: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git & GitHub", level: 85, icon: "🔧" },
        { name: "Vercel", level: 80, icon: "▲" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "npm / pnpm", level: 85, icon: "📦" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />

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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-800 border border-gray-700 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{skill.icon}</span>
                              <h4 className="text-lg font-semibold text-white">
                                {skill.name}
                              </h4>
                            </div>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            value={skill.level}
                            className="h-2 bg-gray-700"
                          />
                          <div className="mt-2 text-xs text-gray-500">
                            {skill.level >= 85
                              ? "Advanced"
                              : skill.level >= 75
                              ? "Proficient"
                              : "Learning"}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-black border-blue-500/30 backdrop-blur-sm text-red-900">
            <CardContent className="p-6">
              <p className="text-gray-300 text-sm md:text-base">
                🚀 Always learning and exploring new technologies to stay
                current with industry trends
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
