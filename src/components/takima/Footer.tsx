import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why Takima" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-wide text-foreground">TAKIMA</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.32em] text-primary">
            The House of Creams
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cumbum's first artisanal café — handcrafted ice creams, signature desserts, and
            premium coffee, served with quiet elegance.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
              Main Road, Cumbum, Theni Dist, Tamil Nadu 625516
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href="tel:+910000000000" className="hover:text-primary">+91 00000 00000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href="mailto:hello@takima.cafe" className="hover:text-primary">hello@takima.cafe</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} TAKIMA — The House of Creams. All rights reserved.</p>
          <p>Crafted with care in Cumbum, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}
