import { motion } from "motion/react";
import { Sparkles, Leaf, Heart, Award } from "lucide-react";
import aboutImg from "@/assets/takima/about.jpg";

const pills = [
  { icon: Sparkles, label: "First Artisanal Café in Cumbum" },
  { icon: Heart, label: "Handcrafted in Small Batches" },
  { icon: Leaf, label: "Premium, Fresh Ingredients" },
  { icon: Award, label: "Exceptional Hospitality" },
];

export function About() {
  return (
    <section id="about" className="relative bg-card py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary/60 blur-2xl" />
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={aboutImg}
              alt="Barista crafting latte art at TAKIMA"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-[560px] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background px-6 py-5 shadow-[var(--shadow-soft)] md:block">
            <div className="font-display text-3xl text-primary">Est. 2024</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              Cumbum, Tamil Nadu
            </div>
          </div>
        </motion.div>

        <div>
          <div className="flex items-center gap-3">
            <span className="gold-divider" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-primary">Our Story</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl text-balance">
            A quiet revolution in <em className="not-italic text-primary">handcrafted</em> indulgence.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            TAKIMA — The House of Creams — was born from a simple idea: that Cumbum deserves a
            café where every scoop, every pour, and every plate is composed with intention. From
            slow-churned ice creams to single-origin espresso, each detail is shaped by hand.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Step in for a moment, and stay for the afternoon. This is the new home of creams.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pills.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
                  <p.icon size={16} />
                </span>
                <span className="text-sm text-foreground">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
