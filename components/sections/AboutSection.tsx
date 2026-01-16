"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    {
      icon: <Code2 className="h-8 w-8" />,
      value: "2+",
      label: "Projects Built",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      value: "7th Sem",
      label: "BSc.CSIT",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      value: "15+",
      label: "Technologies",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      value: "∞",
      label: "Learning",
    },
  ];

  const journey = [
    {
      title: "The Beginning",
      icon: "📚",
      description:
        "Started my journey into web development during my BSc.CSIT studies. What began as curiosity about how websites work turned into a genuine passion for creating digital solutions.",
    },
    {
      title: "Finding My Stack",
      icon: "🚀",
      description:
        "Discovered React and Next.js, fell in love with modern web development. TypeScript made my code more robust, and Tailwind CSS transformed how I approach styling.",
    },
    {
      title: "Building Real Projects",
      icon: "💼",
      description:
        "Currently working on practical projects like healthcare management systems and learning platforms. Each project teaches me something new and pushes my skills further.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer on a journey to create meaningful digital experiences
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {journey.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{chapter.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            What Drives Me
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Quality Code",
              "Continuous Learning",
              "Problem Solving",
              "User Experience",
              "Clean Architecture",
              "Modern Technologies",
            ].map((value, index) => (
              <motion.span
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
              >
                {value}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
