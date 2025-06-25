import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  level?: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: string;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const SkillsSection = ({
  categories = defaultCategories,
}: SkillsSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 min-h-[700px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
          >
            Skills
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 ios-shadow hover:ios-shadow-lg transition-all duration-500 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  {/* Category icon/emoji */}
                  <div className="text-3xl mb-4">{category.icon}</div>

                  <h3 className="text-xl font-bold mb-6 text-slate-900 group-hover:gradient-text transition-all duration-300">
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        skill={skill}
                        delay={skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SkillBadge = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="transition-all duration-200"
    >
      <Badge className="px-4 py-2 text-sm font-medium glass rounded-full border-0 text-slate-700 hover:gradient-text hover:scale-105 transition-all duration-300 cursor-default">
        {skill.name}
        {skill.level && skill.level > 80 && (
          <motion.span
            className="ml-2 inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </Badge>
    </motion.div>
  );
};

const defaultCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    name: "Web",
    icon: "🌐",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    name: "Others",
    icon: "🚀",
    skills: [
      { name: "IoT Hardware", level: 70 },
      { name: "AI Tools", level: 75 },
      { name: "DSA (Basic)", level: 65 },
      { name: "System Design (Beginner)", level: 60 },
    ],
  },
];

export default SkillsSection;
