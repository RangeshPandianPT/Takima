import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    name: "Priya R.",
    role: "Cumbum",
    quote:
      "Genuinely the most beautiful café I've stepped into in Tamil Nadu. The pistachio ice cream is unreal, and the staff make you feel like a regular from the first visit.",
  },
  {
    name: "Arun K.",
    role: "Theni",
    quote:
      "Drove down just for the waffles. Worth every kilometre. The cappuccino is some of the best I've had outside Bangalore.",
  },
  {
    name: "Meera S.",
    role: "Madurai",
    quote:
      "TAKIMA is what Cumbum has been missing. Premium without being pretentious. We've already been back three times this month.",
  },
  {
    name: "Vikram J.",
    role: "Tourist",
    quote:
      "Stumbled in by accident and stayed for two hours. The ambience, the plating, the little gold details — everything feels intentional.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const len = reviews.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % len), 6000);
    return () => clearInterval(t);
  }, [len]);

  const r = reviews[i];

  return (
    <section className="relative bg-card py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Guest Reviews"
          title={<>Words from <em className="not-italic text-primary">our guests</em>.</>}
        />

        <div className="relative mt-14 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl rounded-3xl border border-border bg-background p-10 text-center shadow-[var(--shadow-soft)] md:p-14"
            >
              <div className="flex justify-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl text-balance">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-7 text-sm uppercase tracking-widest text-muted-foreground">
                {r.name} · <span className="text-primary">{r.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((v) => (v - 1 + len) % len)}
            className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                aria-label={`Go to review ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setI((v) => (v + 1) % len)}
            className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
