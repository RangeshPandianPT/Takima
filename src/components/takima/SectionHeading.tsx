import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="gold-divider" />
        <span className="text-[11px] uppercase tracking-[0.32em] text-primary">{eyebrow}</span>
        <span className="gold-divider" />
      </div>
      <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
