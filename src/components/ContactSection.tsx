import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

interface ContactSectionProps {
  title?: string;
  contactInfo?: ContactInfo;
}

const ContactSection = ({
  title = "Contact",
  contactInfo = defaultContactInfo,
}: ContactSectionProps) => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}`,
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sauravsisodia",
      href: contactInfo.linkedin,
      color: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass rounded-3xl ios-shadow p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />

          <div className="relative space-y-12">
            {/* Section title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-6" />
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Let's connect and discuss how we can work together on exciting
                projects.
              </p>
            </motion.div>

            {/* Contact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group"
                  >
                    <div className="glass rounded-2xl p-6 ios-shadow hover:ios-shadow-lg transition-all duration-500 h-full">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:gradient-text transition-all duration-300">
                            {item.label}
                          </h3>
                          <p className="text-slate-600 text-sm truncate">
                            {item.value}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full p-2 hover:bg-white/50"
                          asChild
                        >
                          <a
                            href={item.href}
                            target={
                              item.label === "LinkedIn" ? "_blank" : "_self"
                            }
                            rel={
                              item.label === "LinkedIn"
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 hover:from-blue-700 hover:via-purple-700 hover:to-teal-600 text-white rounded-2xl px-10 py-6 h-auto text-lg font-semibold ios-shadow hover:ios-shadow-lg transition-all duration-500 border-0"
                  asChild
                >
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="mr-3 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const defaultContactInfo: ContactInfo = {
  email: "orav2709@gmail.com",
  phone: "+91 7876140010",
  location: "Kangra, Himachal Pradesh, India",
  linkedin: "https://linkedin.com/in/sauravsisodia",
};

export default ContactSection;
