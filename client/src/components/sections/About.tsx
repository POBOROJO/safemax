import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Trophy } from "lucide-react";
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
    title: "Our Team",
    content:
      "Expert security professionals with extensive experience in threat detection, prevention, and response.",
  },
  {
    icon: Trophy,
    title: "Our Achievement",
    content:
      "Recognized industry leader with multiple awards for excellence in cybersecurity services.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            About SafeMax Security
          </h2>
          <p className="text-muted-foreground text-lg">
            With over a decade of experience in cybersecurity, we've protected
            thousands of businesses from evolving digital threats.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
