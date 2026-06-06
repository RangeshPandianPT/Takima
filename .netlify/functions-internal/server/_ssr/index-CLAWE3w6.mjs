import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { X, M as Menu, A as ArrowRight, a as MapPin, S as Sparkles, H as Heart, L as Leaf, b as Award, C as ChefHat, G as Gem, c as Sofa, U as Users, d as Camera, e as Star, f as ChevronLeft, g as ChevronRight, I as Instagram$1, h as Clock, P as Phone, N as Navigation, F as Facebook, i as Mail } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links$1 = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why Takima" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-semibold tracking-wide text-foreground", children: "TAKIMA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-[10px] uppercase tracking-[0.3em] text-primary sm:inline", children: "House of Creams" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-9 md:flex", children: links$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "relative text-sm text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "hidden rounded-full border border-primary bg-primary px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary md:inline-block",
              children: "Book a Table"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              onClick: () => setOpen((v) => !v),
              className: "rounded-full border border-border p-2 text-foreground md:hidden",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 18 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-6 mt-3 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          links$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "text-sm text-foreground/80",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-full bg-primary px-5 py-2 text-center text-xs font-medium uppercase tracking-widest text-primary-foreground",
              children: "Book a Table"
            }
          )
        ] }) })
      ]
    }
  );
}
function ScrollProgress() {
  const [p, setP] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight) || 0;
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "h-full bg-primary transition-[width] duration-150",
      style: { width: `${p * 100}%` }
    }
  ) });
}
const heroImg = "/assets/hero-C7dlFOTJ.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative isolate min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "TAKIMA artisanal café interior at golden hour",
        width: 1920,
        height: 1280,
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
        className: "max-w-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.32em] text-primary", children: "Cumbum · Tamil Nadu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl", children: [
            "Experience the Art of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "Creams" }),
            " & Coffee"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg", children: "Cumbum's first artisanal café — serving handcrafted ice creams, signature desserts, and premium beverages, plated with quiet elegance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, delay: 0.25 },
              className: "mt-10 flex flex-wrap items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#menu",
                    className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform duration-300 hover:scale-[1.03]",
                    children: [
                      "View Menu",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-0.5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#visit",
                    className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
                      " Visit Us"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.7, duration: 1 },
              className: "mt-16 flex max-w-md items-center gap-8",
              children: [
                { k: "100%", v: "Handcrafted" },
                { k: "20+", v: "Signature flavours" },
                { k: "1st", v: "In Cumbum" }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-foreground", children: s.k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground", children: s.v })
              ] }, s.v))
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2 },
        className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/60",
        children: "Scroll"
      }
    )
  ] });
}
const aboutImg = "/assets/about-B0ltUYOk.jpg";
const pills = [
  { icon: Sparkles, label: "First Artisanal Café in Cumbum" },
  { icon: Heart, label: "Handcrafted in Small Batches" },
  { icon: Leaf, label: "Premium, Fresh Ingredients" },
  { icon: Award, label: "Exceptional Hospitality" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative bg-card py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-secondary/60 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: aboutImg,
              alt: "Barista crafting latte art at TAKIMA",
              width: 1280,
              height: 1280,
              loading: "lazy",
              className: "h-[560px] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background px-6 py-5 shadow-[var(--shadow-soft)] md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary", children: "Est. 2024" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground", children: "Cumbum, Tamil Nadu" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.32em] text-primary", children: "Our Story" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl text-balance", children: [
        "A quiet revolution in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "handcrafted" }),
        " indulgence."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground", children: "TAKIMA — The House of Creams — was born from a simple idea: that Cumbum deserves a café where every scoop, every pour, and every plate is composed with intention. From slow-churned ice creams to single-origin espresso, each detail is shaped by hand." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Step in for a moment, and stay for the afternoon. This is the new home of creams." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2", children: pills.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: p.label })
          ]
        },
        p.label
      )) })
    ] })
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  description,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7 },
      className: center ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 ${center ? "justify-center" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.32em] text-primary", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-divider" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl text-balance", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed text-muted-foreground", children: description })
      ]
    }
  );
}
const icecream = "/assets/menu-icecream-Dt2bGc57.jpg";
const waffle = "/assets/menu-waffle-DSOp4hIS.jpg";
const sundae = "/assets/menu-sundae-91nurvf5.jpg";
const shake = "/assets/menu-shake-9JLwSoed.jpg";
const coffee = "/assets/menu-coffee-BfhGYDI5.jpg";
const dessert = "/assets/menu-dessert-Dp4TXB70.jpg";
const combo = "/assets/menu-combo-BEZ6JHQp.jpg";
const categories = [
  {
    id: "ice-creams",
    label: "Artisan Ice Creams",
    items: [
      { name: "Madagascar Vanilla", desc: "Slow-churned bourbon vanilla bean", price: "₹120", img: icecream },
      { name: "Pistachio Praline", desc: "Roasted pistachio with caramel ribbon", price: "₹160", img: icecream },
      { name: "Belgian Dark Chocolate", desc: "70% single-origin couverture", price: "₹150", img: dessert }
    ]
  },
  {
    id: "waffles",
    label: "Waffles",
    items: [
      { name: "Honey Berry Stack", desc: "Crisp waffle, vanilla cream, wild berries", price: "₹240", img: waffle },
      { name: "Nutella Indulgence", desc: "Warm waffle drowned in hazelnut chocolate", price: "₹260", img: waffle },
      { name: "Banana Caramel", desc: "Caramelised banana, salted toffee", price: "₹220", img: waffle }
    ]
  },
  {
    id: "sundaes",
    label: "Sundaes",
    items: [
      { name: "Classic Hot Fudge", desc: "Vanilla, dark fudge, toasted walnuts", price: "₹220", img: sundae },
      { name: "Strawberry Cloud", desc: "Strawberry compote, cream, meringue shards", price: "₹230", img: sundae },
      { name: "Brownie Avalanche", desc: "Fudge brownie, chocolate, cherry", price: "₹260", img: dessert }
    ]
  },
  {
    id: "milkshakes",
    label: "Milkshakes",
    items: [
      { name: "Strawberry Bliss", desc: "Fresh berries, whipped cream", price: "₹180", img: shake },
      { name: "Cookies & Cream", desc: "Crushed cookies, vanilla bean", price: "₹190", img: shake },
      { name: "Salted Caramel", desc: "House caramel, sea salt flakes", price: "₹210", img: shake }
    ]
  },
  {
    id: "coffee",
    label: "Premium Coffee",
    items: [
      { name: "Signature Cappuccino", desc: "Single-origin espresso, velvet foam", price: "₹140", img: coffee },
      { name: "Vanilla Latte", desc: "Madagascar vanilla, oat or whole milk", price: "₹160", img: coffee },
      { name: "Cold Brew Tonic", desc: "12-hour cold brew, citrus tonic", price: "₹180", img: coffee }
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Molten Lava Cake", desc: "Warm chocolate, vanilla ice cream", price: "₹220", img: dessert },
      { name: "Tiramisu Classique", desc: "Espresso, mascarpone, cocoa", price: "₹240", img: dessert },
      { name: "Crème Brûlée", desc: "Torched vanilla custard", price: "₹230", img: dessert }
    ]
  },
  {
    id: "combos",
    label: "Special Combos",
    items: [
      { name: "Sharing Platter", desc: "Waffles, scoops, brownies, berries", price: "₹520", img: combo },
      { name: "Date Night Duo", desc: "Two desserts + two coffees", price: "₹480", img: combo },
      { name: "Family Feast", desc: "Plated for four — chef's selection", price: "₹890", img: combo }
    ]
  }
];
function SignatureMenu() {
  const [active, setActive] = reactExports.useState(categories[0].id);
  const current = categories.find((c) => c.id === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Signature Menu",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Plates, scoops & pours — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "crafted daily" }),
          "."
        ] }),
        description: "A curated selection from our seasonal menu. Every item is prepared in small batches with premium, traceable ingredients."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(c.id),
        className: `rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${active === c.id ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]" : "border border-border bg-background text-foreground/70 hover:border-primary hover:text-primary"}`,
        children: c.label
      },
      c.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.45 },
        className: "mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3",
        children: current.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "hover-lift group overflow-hidden rounded-3xl border border-border bg-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.img,
                  alt: item.name,
                  loading: "lazy",
                  className: "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-display text-lg text-primary", children: item.price })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: item.desc })
              ] })
            ]
          },
          item.name
        ))
      },
      current.id
    ) })
  ] }) });
}
const items = [
  { icon: Sparkles, title: "Fresh Ingredients", desc: "Sourced daily from trusted local growers and global premiums." },
  { icon: ChefHat, title: "Handmade Recipes", desc: "Every scoop, sauce, and shell — made by hand in our kitchen." },
  { icon: Gem, title: "Premium Quality", desc: "Single-origin coffees, real vanilla, Belgian couverture." },
  { icon: Sofa, title: "Cozy Ambience", desc: "Marble, brass, warm light — designed to linger in." },
  { icon: Users, title: "Family Friendly", desc: "Spaces, menus, and service that welcome every age." },
  { icon: Camera, title: "Instagram Worthy", desc: "Plated with care, photographed by you — shared everywhere." }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "relative bg-card py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Why Takima",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "The details others overlook, we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "obsess" }),
          " over."
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.06 },
        className: "hover-lift group rounded-3xl border border-border bg-background p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl text-foreground", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: it.desc })
        ]
      },
      it.title
    )) })
  ] }) });
}
const g1 = "/assets/gallery-1-Ctaz1CHB.jpg";
const g2 = "/assets/gallery-2-BwoMmLtu.jpg";
const g3 = "/assets/gallery-3-34v263Ao.jpg";
const g4 = "/assets/gallery-4-DZ23Bdt5.jpg";
const g5 = "/assets/gallery-5-9kQtNQh1.jpg";
const g6 = "/assets/gallery-6-hI66sKzG.jpg";
const g7 = "/assets/gallery-7-DwDEAH7w.jpg";
const g8 = "/assets/gallery-8-9ExrE03g.jpg";
const g9 = "/assets/gallery-9-gWCsPlVy.jpg";
const photos = [
  { src: g1, alt: "Cozy café corner", span: "row-span-2" },
  { src: g2, alt: "Coffee flat lay", span: "" },
  { src: g3, alt: "Ice cream cone", span: "row-span-2" },
  { src: g4, alt: "Pastry display", span: "" },
  { src: g5, alt: "Milkshake toast", span: "" },
  { src: g6, alt: "Plated chocolate dessert", span: "row-span-2" },
  { src: g7, alt: "Gallery moments", span: "" },
  { src: g8, alt: "House interior", span: "row-span-2" },
  { src: g9, alt: "Cozy atmosphere", span: "" }
];
function Gallery() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "relative py-28 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Gallery",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Moments from the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "house" }),
            "."
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]", children: photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          onClick: () => setOpen(p.src),
          initial: { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.06 },
          className: `group relative overflow-hidden rounded-3xl ${p.span}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.src,
                alt: p.alt,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" })
          ]
        },
        p.src
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(null),
        className: "fixed inset-0 z-[70] flex items-center justify-center bg-foreground/80 p-6 backdrop-blur-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Close",
              className: "absolute right-6 top-6 rounded-full bg-background/90 p-2 text-foreground",
              onClick: () => setOpen(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              initial: { scale: 0.96, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.96, opacity: 0 },
              transition: { duration: 0.3 },
              src: open,
              alt: "",
              className: "max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            }
          )
        ]
      }
    ) })
  ] });
}
const reviews = [
  {
    name: "Priya R.",
    role: "Cumbum",
    quote: "Genuinely the most beautiful café I've stepped into in Tamil Nadu. The pistachio ice cream is unreal, and the staff make you feel like a regular from the first visit."
  },
  {
    name: "Arun K.",
    role: "Theni",
    quote: "Drove down just for the waffles. Worth every kilometre. The cappuccino is some of the best I've had outside Bangalore."
  },
  {
    name: "Meera S.",
    role: "Madurai",
    quote: "TAKIMA is what Cumbum has been missing. Premium without being pretentious. We've already been back three times this month."
  },
  {
    name: "Vikram J.",
    role: "Tourist",
    quote: "Stumbled in by accident and stayed for two hours. The ambience, the plating, the little gold details — everything feels intentional."
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const len = reviews.length;
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % len), 6e3);
    return () => clearInterval(t);
  }, [len]);
  const r = reviews[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-card py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Guest Reviews",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Words from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "our guests" }),
          "."
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-14 min-h-[260px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 },
        className: "mx-auto max-w-3xl rounded-3xl border border-border bg-background p-10 text-center shadow-[var(--shadow-soft)] md:p-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 text-primary", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, fill: "currentColor", strokeWidth: 0 }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl text-balance", children: [
            '"',
            r.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-7 text-sm uppercase tracking-widest text-muted-foreground", children: [
            r.name,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: r.role })
          ] })
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Previous",
          onClick: () => setI((v) => (v - 1 + len) % len),
          className: "rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: reviews.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": `Go to review ${k + 1}`,
          onClick: () => setI(k),
          className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-4 bg-border"}`
        },
        k
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Next",
          onClick: () => setI((v) => (v + 1) % len),
          className: "rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
        }
      )
    ] })
  ] }) });
}
const tiles = [g3, g5, g2, g6, g1, g4];
function Instagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "@takima.cumbum",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Follow the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "daily edit" }),
          "."
        ] }),
        description: "Behind the scenes, new flavours, and your photos — reposted with love."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-3 md:grid-cols-6", children: tiles.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: i * 0.05 },
        className: "group relative aspect-square overflow-hidden rounded-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: t,
              alt: "Instagram post",
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-primary/0 text-background opacity-0 transition-all group-hover:bg-primary/70 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram$1, { size: 22 }) })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#",
        className: "inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram$1, { size: 16 }),
          " Follow @takima.cumbum"
        ]
      }
    ) })
  ] }) });
}
function VisitUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", className: "relative bg-card py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Visit Us",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Find your seat at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "the house" }),
          "."
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)] md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] md:aspect-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "TAKIMA location",
          src: "https://www.google.com/maps?q=Cumbum,Tamil+Nadu&output=embed",
          width: "100%",
          height: "100%",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "h-full w-full border-0"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-7 p-10 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: [
              "Main Road, Cumbum",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " Theni District, Tamil Nadu 625516"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: "Opening Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: "Mon – Sun · 10:00 AM – 11:00 PM" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+910000000000",
                className: "mt-1 block text-sm text-muted-foreground hover:text-primary",
                children: "+91 00000 00000"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.google.com/maps/dir/?api=1&destination=Cumbum,Tamil+Nadu",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 16 }),
              " Get Directions"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(80),
  phone: stringType().trim().min(7, "Please enter a valid phone").max(20),
  email: stringType().trim().email("Please enter a valid email").max(255),
  message: stringType().trim().min(5, "Message is too short").max(800)
});
function Contact() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message")
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    e.target.reset();
    toast.success("Thank you — we'll be in touch shortly.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Get In Touch",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Reserve a table or just ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "say hello" }),
          "."
        ] }),
        description: "Drop us a line for reservations, private events, or any questions. We respond within the day."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit,
        className: "mt-12 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Name", placeholder: "Your full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "phone", label: "Phone", placeholder: "+91 00000 00000", type: "tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", placeholder: "you@example.com", type: "email" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  name: "message",
                  rows: 5,
                  required: true,
                  placeholder: "How can we help?",
                  className: "w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "We reply within working hours · Mon–Sun, 10am–11pm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: submitting,
                className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60",
                children: submitting ? "Sending…" : "Book a Table"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function Field({
  name,
  label,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        type,
        required: true,
        placeholder,
        className: "w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      }
    )
  ] });
}
const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why Takima" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl tracking-wide text-foreground", children: "TAKIMA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.32em] text-primary", children: "The House of Creams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "Cumbum's first artisanal café — handcrafted ice creams, signature desserts, and premium coffee, served with quiet elegance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [Instagram$1, Facebook].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base text-foreground", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "text-sm text-muted-foreground transition-colors hover:text-primary",
            children: l.label
          }
        ) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base text-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-0.5 shrink-0 text-primary" }),
            "Main Road, Cumbum, Theni Dist, Tamil Nadu 625516"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+910000000000", className: "hover:text-primary", children: "+91 00000 00000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@takima.cafe", className: "hover:text-primary", children: "hello@takima.cafe" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " TAKIMA — The House of Creams. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with care in Cumbum, Tamil Nadu." })
    ] }) })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/910000000000?text=Hi%20TAKIMA%2C%20I%27d%20like%20to%20book%20a%20table.",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-luxe)] transition-transform hover:scale-110",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" }) })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignatureMenu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisitUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-center", richColors: true })
  ] });
}
export {
  Index as component
};
