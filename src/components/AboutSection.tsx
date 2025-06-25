import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  title?: string;
  description?: string;
  quote?: string;
}

const AboutSection = ({
  title = "About Me",
  description = "M.Tech graduate in Computer Science Engineering from HPTU, hands-on in multiple domains, passionate about building smarter solutions. I believe in exploring new technologies, adapting quickly to challenges, and creating innovative solutions that make a real difference.",
  quote = "I don't stick to one domain — I explore, build, and adapt.",
}: AboutSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass rounded-3xl ios-shadow p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />

          <div className="relative space-y-8">
            {/* Section title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-3xl text-blue-500 mb-2">&quot;</div>
                <p className="text-xl md:text-2xl font-medium gradient-text italic leading-relaxed">
                  {quote}
                </p>
                <div className="text-3xl text-teal-500 text-right">&quot;</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
