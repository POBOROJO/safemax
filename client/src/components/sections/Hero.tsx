import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 -z-20 w-full h-full"
        style={{
          backgroundImage: `url("/path-to-your-image.jpg")`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Adjust opacity as needed */}
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center justify-center space-x-2 rounded-full bg-muted/80 backdrop-blur-sm px-3 py-1 text-sm"
          >
            <Shield className="h-4 w-4" />
            <span>Your Security Is Our Priority</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Protecting Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Digital Assets
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Advanced Cybersecurity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-muted-foreground text-lg md:text-xl backdrop-blur-sm bg-background/5 p-4 rounded-lg"
          >
            SafeMax Security provides enterprise-grade protection for businesses
            of all sizes. Our expert team ensures your data stays secure in an
            ever-evolving threat landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 "
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-background/10 border-primary/20 hover:bg-primary/20"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background/5 via-background/50 to-background"
      />
    </section>
  );
}
