import { motion } from "motion/react";
import { Sparkles, ChefHat, Gem, Sofa, Users, Camera } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Sparkles, title: "Fresh Ingredients", desc: "Sourced daily from trusted local growers and global premiums." },
  { icon: ChefHat, title: "Handmade Recipes", desc: "Every scoop, sauce, and shell — made by hand in our kitchen." },
  { icon: Gem, title: "Premium Quality", desc: "Single-origin coffees, real vanilla, Belgian couverture." },
  { icon: Sofa, title: "Cozy Ambience", desc: "Marble, brass, warm light — designed to linger in." },
  { icon: Users, title: "Family Friendly", desc: "Spaces, menus, and service that welcome every age." },
  { icon: Camera, title: "Instagram Worthy", desc: "Plated with care, photographed by you — shared everywhere." },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative bg-card py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Takima"
          title={<>The details others overlook, we <em className="not-italic text-primary">obsess</em> over.</>}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="hover-lift group rounded-3xl border border-border bg-background p-8"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon size={22} />
              </span>
              <h3 className="mt-6 font-display text-2xl text-foreground">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
