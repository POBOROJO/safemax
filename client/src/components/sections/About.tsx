import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Trophy, Globe, TrendingUp, Target } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const cards = [
  {
    icon: Shield,
    title: "Our Mission",
    content:
      "To provide cutting-edge cybersecurity solutions that protect our clients' digital assets and maintain their trust.",
  },
  {
    icon: Users,
    title: "Our Expertise",
    content:
      "Expert security professionals with extensive experience in threat detection, prevention, and response across diverse industries.",
  },
  {
    icon: Trophy,
    title: "Our Achievement",
    content:
      "Recognized industry leader with 50+ clients, including 22 international organizations, and valued at $75 million in 2023.",
  },
];

const companyStats = [
  {
    icon: Globe,
    title: "Clients",
    value: "50+",
    description: "International organizations secured",
  },
  {
    icon: TrendingUp,
    title: "Valuation",
    value: "$75M",
    description: "Company valuation in 2023",
  },
  {
    icon: Target,
    title: "Goal",
    value: "$200M",
    description: "Projected valuation for 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            About SafeMax Security
          </h2>
          <p className="text-muted-foreground text-lg">
            Established in 2020, SafeMax Security stands as a pioneering force
            in cybersecurity, delivering comprehensive Vulnerability Assessment
            & Penetration Testing (VAPT) services to secure digital assets
            globally.
          </p>
        </FadeIn>

        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Our journey began with a singular vision: to create robust defense
            mechanisms that adapt to the ever-evolving landscape of cyber
            threats. By leveraging advanced penetration testing methodologies
            and deep threat intelligence expertise, we design security solutions
            that go beyond traditional protection.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4"
                  >
                    <card.icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.content}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-background rounded-lg p-8 shadow-sm">
          {companyStats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">
                  <span className="font-semibold">{stat.title}</span>
                  <br />
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Company Details */}
        <div className="mt-16 text-center">
          <FadeIn>
            <h3 className="text-2xl font-bold mb-4">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Industry</h4>
                <p className="text-muted-foreground">
                  Technology, Information and Internet
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Company Size</h4>
                <p className="text-muted-foreground">11-50 employees</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Headquarters</h4>
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Founded</h4>
                <p className="text-muted-foreground">2020</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
