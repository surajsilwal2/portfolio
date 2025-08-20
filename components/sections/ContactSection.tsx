"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      detail: "surajsilwal3210@gmail.com",
      link: "mailto:surajsilwal3210@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      detail: "+977 9746299831",
      link: "tel:+977 9746299831",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      detail: "Hetauda, Nepal",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-7 w-7" />,
      name: "GitHub",
      url: "https://github.com/surajsilwal2",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin className="h-7 w-7" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/surajsilwal2/",
      gradient: "from-blue-500 to-blue-700",
    },
    
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent" />

      <div className="container relative mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind, or just want to say hello?  
            Let’s create something amazing together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10"
        >
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-blue-500/60 backdrop-blur-sm transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-white font-semibold mb-6 text-lg text-center md:text-left">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`group relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${social.gradient} shadow-md hover:shadow-lg hover:scale-110 transition-all`}
                >
                  <span className="text-white">{social.icon}</span>
                  <span className="absolute -bottom-8 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
