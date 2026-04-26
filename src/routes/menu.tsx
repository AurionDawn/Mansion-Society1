import { createFileRoute } from "@tanstack/react-router";

const OG_IMG =
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1600&q=80";

type Item = { name: string; price: string; desc?: string; img?: string };
type Section = { id: string; label: string; title: string; subtitle?: string; items: Item[] };

const sections: Section[] = [
  {
    id: "seasonal",
    label: "Seasonal",
    title: "Seasonal Specialty Drinks",
    subtitle: "Summer menu — house-made syrups & limited pours.",
    items: [
      {
        name: "Garden Party Latte",
        price: "$7.00",
        desc: "In-house made lavender, rose & white chocolate.",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "That's Money, Honey Matcha Latte",
        price: "$7.00",
        desc: "In-house made pistachio syrup & honey.",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80",
      },
      { name: "Citrine Chai Latte", price: "$7.00", desc: "In-house made chai, orange & dulce de leche." },
      { name: "Rose Neapolitan Latte", price: "$7.00", desc: "In-house made rose, mocha & vanilla bean." },
      { name: "Banana Pancakes Latte", price: "$7.00", desc: "Fig, orange & in-house made chai concentrate." },
      { name: "The Crimson Latte", price: "$7.00", desc: "Apple cider, chai & apple spice." },
      { name: "Scarlet Cold Brew", price: "$6.00", desc: "Warm-spiced cold brew, vanilla bean & cranberry juice. (Iced only)" },
      { name: "A Little Sweet Treat Matcha Latte", price: "$7.00", desc: "Brown sugar bourbon & strawberry." },
      { name: "Pumpkin Spice & Everything Nice Latte", price: "$6.95", desc: "Our take on pumpkin spice & maple." },
      { name: "Matcha Killer Latte", price: "$6.50", desc: "White chocolate matcha topped with whipped cream." },
      { name: "The Orange Brew", price: "$6.00", desc: "Orange-infused cold brew with mocha & your choice of milk. (Iced only)" },
      { name: "The Pear Tart Latte", price: "$6.25", desc: "Brown sugar rosemary pear." },
      { name: "The Apple Ever After Latte", price: "$6.50", desc: "Apple butterscotch." },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    title: "Coffee & Espresso Basics",
    items: [
      {
        name: "Hot / Iced Vanilla Latte",
        price: "$6.15",
        desc: "In-house made vanilla bean syrup, espresso & your choice of milk.",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80",
      },
      { name: "Hot / Iced Lavender Latte", price: "$6.15", desc: "Espresso with steamed milk infused with lavender." },
      { name: "Hot Mocha Latte", price: "$6.15", desc: "Rich espresso blended with steamed milk and chocolate." },
      { name: "Hot / Iced Vanilla Oatmilk Latte", price: "$7.50", desc: "Our vanilla latte made with creamy oat milk." },
      { name: "Hot Oatmilk Latte", price: "$6.50", desc: "Plain oat milk latte, no syrup." },
      { name: "Drip Coffee", price: "$3.50", desc: "Freshly brewed coffee — rich and full-bodied." },
      { name: "Cortado", price: "$3.50", desc: "Espresso & steamed milk in equal measure for a smooth, balanced drink." },
      { name: "Americano", price: "$4.00", desc: "Espresso & water." },
      { name: "Cappuccino", price: "$4.75", desc: "Rich and smooth espresso-style coffee drink." },
      { name: "Chai Latte", price: "$5.75", desc: "Spiced black tea latte." },
    ],
  },
  {
    id: "food",
    label: "Food",
    title: "Food Menu",
    items: [
      {
        name: "The Frenchie Croissant",
        price: "$13.00",
        desc: "Ham, provolone, goat cheese & spicy jam.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
      },
      { name: "The Goat", price: "$12.00", desc: "French roll bread, two scrambled eggs, arugula & goat cheese." },
      { name: "Spicy BLT", price: "$12.00", desc: "French roll bread, bacon, lettuce, tomato & in-house chipotle mayo." },
      { name: "Chicken Pesto Croissant", price: "$14.00", desc: "Chicken, pesto, provolone, tomato & arugula." },
      { name: "The Go-To French Roll", price: "$13.00", desc: "Chicken, bacon, tomato, lettuce & Dijon mustard." },
      { name: "The Greenie", price: "$11.50", desc: "French roll bread, pesto, tomato, arugula, mozzarella & a splash of balsamic." },
      { name: "The Classic Croissant", price: "$13.00", desc: "Turkey ham, provolone, lettuce, tomato & mayo." },
      { name: "Italian Way Croissant", price: "$9.00", desc: "Warm butter croissant with powdered sugar, butter & jam." },
      { name: "BLT Croissant", price: "$12.00", desc: "Bacon, lettuce, tomato & in-house chipotle mayo." },
    ],
  },
  {
    id: "treats",
    label: "Treats",
    title: "Treats & Pastries",
    items: [
      {
        name: "Japanese Cheesecake Slice",
        price: "$7.25",
        desc: "Made fresh in-house — authentic, pillowy Japanese cheesecake.",
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
      },
      { name: "Death by Chocolate", price: "$8.25", desc: "Decadent layered chocolate dessert." },
      { name: "Carrot Cake Slice", price: "$5.25", desc: "House-baked spiced carrot cake with cream cheese glaze (contains nuts)." },
      { name: "Banana Bread Slice", price: "$5.25", desc: "Moist, lightly sweet, baked in-house." },
      { name: "Feta Spinach Croissant", price: "$7.00", desc: "Savory laminated croissant with feta & spinach." },
      { name: "Nutella Croissant", price: "$5.15", desc: "Rich, flaky croissant filled with creamy Nutella." },
      { name: "Butter Croissant", price: "$4.65", desc: "Golden butter croissant — extra flaky." },
    ],
  },
  {
    id: "others",
    label: "Others",
    title: "Refreshers & Bottled",
    items: [
      { name: "Lemonade", price: "$5.15", desc: "In-house lemonade with lavender, brown sugar rosemary pear, or hibiscus raspberry." },
      { name: "Classic Lemonade", price: "$4.00", desc: "Fresh squeezed lemonade." },
      { name: "Gold Peak Iced Tea", price: "$3.00", desc: "High-quality ready-to-drink iced tea with home-brewed taste." },
      { name: "Topo Chico", price: "$3.00", desc: "Sparkling mineral water." },
    ],
  },
];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Best Coffee, Lattes & Brunch in Indianapolis | Mansion Society" },
      {
        name: "description",
        content:
          "Explore the Mansion Society menu — seasonal specialty lattes, espresso classics, gourmet brunch sandwiches and house-baked Japanese cheesecake. Some of the best coffee in Indianapolis.",
      },
      { property: "og:title", content: "Our Curated Selections — Mansion Society" },
      {
        property: "og:description",
        content: "A taste of timeless elegance — house-made syrups, gourmet brunch and freshly baked pastries.",
      },
      { property: "og:image", content: OG_IMG },
      { name: "twitter:image", content: OG_IMG },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-[oklch(0.92_0.014_75)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">The menu</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Our Curated Selections
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
          <p className="mt-6 text-lg italic text-muted-foreground">A taste of timeless elegance.</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-20 z-30 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 lg:px-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/75 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
        {sections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={idx > 0 ? "mt-24 scroll-mt-44" : "scroll-mt-44"}
          >
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">{section.label}</p>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">{section.title}</h2>
              {section.subtitle && (
                <p className="mt-3 text-sm italic text-muted-foreground">{section.subtitle}</p>
              )}
              <div className="mx-auto mt-6 h-px w-12 bg-border" />
            </div>

            <ul className="divide-y divide-border">
              {section.items.map((item) => (
                <li key={item.name} className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
                  {item.img && (
                    <div className="hidden h-20 w-20 overflow-hidden rounded-lg sm:block">
                      <img src={item.img} alt={item.name} className="h-full w-full object-cover img-warm" />
                    </div>
                  )}
                  <div className={item.img ? "" : "sm:col-start-2"}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                      <span
                        aria-hidden
                        className="mx-2 hidden flex-1 translate-y-[-4px] border-b border-dotted border-border sm:block"
                      />
                      <span className="font-serif text-lg text-primary">{item.price}</span>
                    </div>
                    {item.desc && (
                      <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">{item.desc}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}