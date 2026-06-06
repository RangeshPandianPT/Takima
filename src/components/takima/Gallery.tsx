import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/takima/gallery-1.jpg";
import g2 from "@/assets/takima/gallery-2.jpg";
import g3 from "@/assets/takima/gallery-3.jpg";
import g4 from "@/assets/takima/gallery-4.jpg";
import g5 from "@/assets/takima/gallery-5.jpg";
import g6 from "@/assets/takima/gallery-6.jpg";
import g7 from "@/assets/takima/gallery-7.jpg";
import g8 from "@/assets/takima/gallery-8.jpg";
import g9 from "@/assets/takima/gallery-9.jpg";

const photos = [
  { src: g1, alt: "Cozy café corner", span: "row-span-2" },
  { src: g2, alt: "Coffee flat lay", span: "" },
  { src: g3, alt: "Ice cream cone", span: "row-span-2" },
  { src: g4, alt: "Pastry display", span: "" },
  { src: g5, alt: "Milkshake toast", span: "" },
  { src: g6, alt: "Plated chocolate dessert", span: "row-span-2" },
  { src: g7, alt: "Gallery moments", span: "" },
  { src: g8, alt: "House interior", span: "row-span-2" },
  { src: g9, alt: "Cozy atmosphere", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from the <em className="not-italic text-primary">house</em>.</>}
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpen(p.src)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/80 p-6 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full bg-background/90 p-2 text-foreground"
              onClick={() => setOpen(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
