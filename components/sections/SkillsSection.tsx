"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-blue-500",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML5", icon: "🔥" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
      ]
    },
    {
      title: "Backend",
      color: "bg-green-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🎸" },
      ]
    },
    {
      title: "Databases",
      color: "bg-purple-500",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Prisma", icon: "◆" },
      ]
    },
    {
      title: "Tools & Technologies",
      color: "bg-orange-500",
      skills: [
        { name: "Git", icon: "📚" },
        { name: "Docker", icon: "🐳" },
        { name: "Vercel", icon: "▲" },
        { name: "RESTful APIs", icon: "🔌" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <Badge 
                        variant="secondary"
                        className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border-gray-700 py-3 px-4 text-sm font-medium transition-all duration-300 cursor-default"
                      >
                        <span className="mr-2 text-lg group-hover:animate-bounce">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skill proficiency visualization */}
      
      </div>
    </section>
  );
};

export default SkillsSection;