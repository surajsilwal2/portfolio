"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Suraj Silwal
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
                Full Stack Web Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              I create digital experiences that are not only functional but intuitive and engaging. I enjoy tackling complex problems and transforming them into elegant, scalable solutions that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-gray-700/40"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {[
                {
                  href: "https://github.com/surajsilwal2",
                  icon: <Github className="h-6 w-6" />,
                  hover: "hover:shadow-gray-400/40",
                },
                {
                  href: "https://www.linkedin.com/in/surajsilwal2/",
                  icon: <Linkedin className="h-6 w-6" />,
                  hover: "hover:shadow-blue-400/40",
                },
                {
                  href: "mailto:surajsilwal3210@gmail.com",
                  icon: <Mail className="h-6 w-6" />,
                  hover: "hover:shadow-purple-400/40",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/60 border border-gray-800 backdrop-blur-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-md ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-gray-800">
              <Image
                src="./profile.png" // replace with your image path
                alt="Suraj Silwal"
                width={384}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
