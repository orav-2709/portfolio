import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

interface ResumeSectionProps {
  title?: string;
  resumeUrl?: string;
  publicationUrl?: string;
  publicationTitle?: string;
}

const ResumeSection = ({
  title = "Resume & Publications",
  resumeUrl = "/resume.pdf",
  publicationUrl = "https://www.irjmets.com/uploadedfiles/paper//issue_2_february_2025/67419/final/fin_irjmets1738995601.pdf",
  publicationTitle = "Review Paper Published in IRJMETS",
}: ResumeSectionProps) => {
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
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-teal-400/10 rounded-full blur-2xl" />

          <div className="relative space-y-8">
            {/* Section title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
            </motion.div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Resume card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 ios-shadow hover:ios-shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:gradient-text transition-all duration-300">
                      Resume
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Download my complete resume with detailed information about
                    my experience, education, and projects.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 border-0 hover:from-blue-600 hover:to-teal-600"
                      onClick={() => window.open(resumeUrl, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-xl glass border-slate-200"
                      onClick={() => window.open(resumeUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Publication card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 ios-shadow hover:ios-shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:gradient-text transition-all duration-300">
                      Publication
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {publicationTitle} - Research work published in a
                    peer-reviewed journal.
                  </p>
                  <Button
                    className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600"
                    onClick={() => window.open(publicationUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Publication
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
