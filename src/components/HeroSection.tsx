import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  skills?: string;
  resumeUrl?: string;
  photoUrl?: string;
}

const HeroSection = ({
  name = "Saurav Sisodia",
  tagline = "a Developer Who Builds Real-World Solutions",
  skills = "AI • Python • IoT • Web • Automation",
  resumeUrl = "/resume.pdf",
  photoUrl = "/profile.jpeg",

}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content container with enhanced glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-20"
      >
        <div className="liquid-glass rounded-3xl ios-shadow-lg p-8 md:p-16 relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 rounded-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden liquid-glass ios-shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={photoUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-80"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
              {/* Greeting text with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light tracking-wide"
              >
                Hi, I'm
              </motion.div>

              {/* Name and tagline with enhanced typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none">
                  <span className="gradient-text">{name}</span> —
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 leading-tight">
                  {tagline}
                </h2>
              </motion.div>

              {/* Skills with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="pt-4"
              >
                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium tracking-wider">
                  {skills}
                </p>
              </motion.div>

              {/* Enhanced resume download button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="pt-8 md:pt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white rounded-2xl px-8 py-6 h-auto text-lg font-semibold ios-shadow hover:ios-shadow-lg transition-all duration-500 border-0"
                    onClick={() => window.open(resumeUrl, "_blank")}
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-slate-400/60 flex justify-center pt-3 backdrop-blur-sm bg-white/20">
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
