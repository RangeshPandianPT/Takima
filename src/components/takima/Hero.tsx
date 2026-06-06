import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/takima/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="TAKIMA artisanal café interior at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-divider" />
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Cumbum · Tamil Nadu
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl">
            Experience the Art of <em className="not-italic text-primary">Creams</em> & Coffee
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Cumbum's first artisanal café — serving handcrafted ice creams, signature
            desserts, and premium beverages, plated with quiet elegance.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform duration-300 hover:scale-[1.03]"
            >
              View Menu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary"
            >
              <MapPin size={16} /> Visit Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-16 flex max-w-md items-center gap-8"
          >
            {[
              { k: "100%", v: "Handcrafted" },
              { k: "20+", v: "Signature flavours" },
              { k: "1st", v: "In Cumbum" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-foreground">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/60"
      >
        Scroll
      </motion.div>
    </section>
  );
}
