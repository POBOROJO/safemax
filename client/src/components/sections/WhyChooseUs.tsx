import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const reasons = [
  "Expert Team of Certified Security Professionals",
  "24/7 Monitoring and Support",
  "Customized Security Solutions",
  "Proven Track Record of Success",
  "Industry-Leading Security Tools",
  "Compliance with Global Security Standards",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Choose SafeMax Security?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We combine expertise, innovation, and dedication to deliver
                unparalleled cybersecurity solutions for your business.
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{reason}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-3/4 h-3/4 rounded-lg bg-background/95 shadow-lg p-8 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-2"
                      >
                        500+
                      </motion.div>
                      <div className="text-muted-foreground">
                        Successful Security Projects
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
