import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import icecream from "@/assets/takima/menu-icecream.jpg";
import waffle from "@/assets/takima/menu-waffle.jpg";
import sundae from "@/assets/takima/menu-sundae.jpg";
import shake from "@/assets/takima/menu-shake.jpg";
import coffee from "@/assets/takima/menu-coffee.jpg";
import dessert from "@/assets/takima/menu-dessert.jpg";
import combo from "@/assets/takima/menu-combo.jpg";

type Item = { name: string; desc: string; price: string; img: string };
type Category = { id: string; label: string; items: Item[] };

const categories: Category[] = [
  {
    id: "ice-creams",
    label: "Artisan Ice Creams",
    items: [
      { name: "Madagascar Vanilla", desc: "Slow-churned bourbon vanilla bean", price: "₹120", img: icecream },
      { name: "Pistachio Praline", desc: "Roasted pistachio with caramel ribbon", price: "₹160", img: icecream },
      { name: "Belgian Dark Chocolate", desc: "70% single-origin couverture", price: "₹150", img: dessert },
    ],
  },
  {
    id: "waffles",
    label: "Waffles",
    items: [
      { name: "Honey Berry Stack", desc: "Crisp waffle, vanilla cream, wild berries", price: "₹240", img: waffle },
      { name: "Nutella Indulgence", desc: "Warm waffle drowned in hazelnut chocolate", price: "₹260", img: waffle },
      { name: "Banana Caramel", desc: "Caramelised banana, salted toffee", price: "₹220", img: waffle },
    ],
  },
  {
    id: "sundaes",
    label: "Sundaes",
    items: [
      { name: "Classic Hot Fudge", desc: "Vanilla, dark fudge, toasted walnuts", price: "₹220", img: sundae },
      { name: "Strawberry Cloud", desc: "Strawberry compote, cream, meringue shards", price: "₹230", img: sundae },
      { name: "Brownie Avalanche", desc: "Fudge brownie, chocolate, cherry", price: "₹260", img: dessert },
    ],
  },
  {
    id: "milkshakes",
    label: "Milkshakes",
    items: [
      { name: "Strawberry Bliss", desc: "Fresh berries, whipped cream", price: "₹180", img: shake },
      { name: "Cookies & Cream", desc: "Crushed cookies, vanilla bean", price: "₹190", img: shake },
      { name: "Salted Caramel", desc: "House caramel, sea salt flakes", price: "₹210", img: shake },
    ],
  },
  {
    id: "coffee",
    label: "Premium Coffee",
    items: [
      { name: "Signature Cappuccino", desc: "Single-origin espresso, velvet foam", price: "₹140", img: coffee },
      { name: "Vanilla Latte", desc: "Madagascar vanilla, oat or whole milk", price: "₹160", img: coffee },
      { name: "Cold Brew Tonic", desc: "12-hour cold brew, citrus tonic", price: "₹180", img: coffee },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Molten Lava Cake", desc: "Warm chocolate, vanilla ice cream", price: "₹220", img: dessert },
      { name: "Tiramisu Classique", desc: "Espresso, mascarpone, cocoa", price: "₹240", img: dessert },
      { name: "Crème Brûlée", desc: "Torched vanilla custard", price: "₹230", img: dessert },
    ],
  },
  {
    id: "combos",
    label: "Special Combos",
    items: [
      { name: "Sharing Platter", desc: "Waffles, scoops, brownies, berries", price: "₹520", img: combo },
      { name: "Date Night Duo", desc: "Two desserts + two coffees", price: "₹480", img: combo },
      { name: "Family Feast", desc: "Plated for four — chef's selection", price: "₹890", img: combo },
    ],
  },
];

export function SignatureMenu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Signature Menu"
          title={<>Plates, scoops & pours — <em className="not-italic text-primary">crafted daily</em>.</>}
          description="A curated selection from our seasonal menu. Every item is prepared in small batches with premium, traceable ingredients."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border border-border bg-background text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.items.map((item) => (
              <article
                key={item.name}
                className="hover-lift group overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                    <span className="shrink-0 font-display text-lg text-primary">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
