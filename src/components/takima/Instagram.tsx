import { motion } from "motion/react";
import { Instagram as IgIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/takima/gallery-1.jpg";
import g2 from "@/assets/takima/gallery-2.jpg";
import g3 from "@/assets/takima/gallery-3.jpg";
import g4 from "@/assets/takima/gallery-4.jpg";
import g5 from "@/assets/takima/gallery-5.jpg";
import g6 from "@/assets/takima/gallery-6.jpg";

const tiles = [g3, g5, g2, g6, g1, g4];

export function Instagram() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="@takima.cumbum"
          title={<>Follow the <em className="not-italic text-primary">daily edit</em>.</>}
          description="Behind the scenes, new flavours, and your photos — reposted with love."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={t}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 text-background opacity-0 transition-all group-hover:bg-primary/70 group-hover:opacity-100">
                <IgIcon size={22} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <IgIcon size={16} /> Follow @takima.cumbum
          </a>
        </div>
      </div>
    </section>
  );
}
