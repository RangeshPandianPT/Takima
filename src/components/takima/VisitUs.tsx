import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function VisitUs() {
  return (
    <section id="visit" className="relative bg-card py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title={<>Find your seat at <em className="not-italic text-primary">the house</em>.</>}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)] md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <iframe
              title="TAKIMA location"
              src="https://www.google.com/maps?q=Cumbum,Tamil+Nadu&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

          <div className="flex flex-col justify-center gap-7 p-10 md:p-14">
            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin size={16} />
              </span>
              <div>
                <h3 className="font-display text-xl text-foreground">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Main Road, Cumbum<br /> Theni District, Tamil Nadu 625516
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Clock size={16} />
              </span>
              <div>
                <h3 className="font-display text-xl text-foreground">Opening Hours</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Mon – Sun · 10:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Phone size={16} />
              </span>
              <div>
                <h3 className="font-display text-xl text-foreground">Contact</h3>
                <a
                  href="tel:+910000000000"
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  +91 00000 00000
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Cumbum,Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
