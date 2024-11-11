import { motion } from 'framer-motion';

export function FadeIn({
  children,
  className,
  delay = 0,
  viewTrigger = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewTrigger?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}