import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Search,
  AlertTriangle,
  Lock,
  Cloud,
  BookOpen,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  {
    icon: Shield,
    title: "Vulnerability Assessment",
    description:
      "Comprehensive scanning and assessment of your systems to identify potential security vulnerabilities.",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description:
      "Simulated cyber attacks to evaluate the security of your IT infrastructure.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "24/7 support and rapid response to security incidents and breaches.",
  },
  {
    icon: Lock,
    title: "Security Auditing",
    description:
      "Detailed analysis of your security policies, procedures, and controls.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Specialized security solutions for cloud-based infrastructure and applications.",
  },
  {
    icon: BookOpen,
    title: "Security Training",
    description:
      "Comprehensive security awareness training for your employees.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive cybersecurity solutions tailored to protect your
            business from evolving threats.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full group">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
