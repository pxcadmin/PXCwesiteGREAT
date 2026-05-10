import { motion, type MotionProps, type Variants } from "framer-motion";
import { type ComponentProps, type ReactNode, forwardRef } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

type AnimatedSectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
};

export function AnimatedSection({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "",
  ...props 
}: AnimatedSectionProps) {
  const variants = {
    fadeInUp,
    fadeIn,
    scaleIn
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

type AnimatedDivProps = ComponentProps<"div"> & MotionProps & {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "staggerItem";
  delay?: number;
  className?: string;
};

export function AnimatedDiv({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "",
  ...props 
}: AnimatedDivProps) {
  const variants: Record<string, Variants> = {
    fadeInUp,
    fadeIn,
    scaleIn,
    staggerItem
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export function StaggerContainer({ 
  children, 
  className = "",
  ...props 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ 
  children, 
  className = "",
  ...props 
}: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const MotionDiv = motion.div;
export { fadeInUp, fadeIn, scaleIn, staggerContainer, staggerItem };
