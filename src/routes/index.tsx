import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Star, MapPin, Clock } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80";

const highlights = [
  {
    name: "Japanese Cheesecake",
    price: "$7.25",
    blurb: "Made fresh in-house — pillowy, lightly sweet, unforgettable.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Garden Party Latte",
    price: "$7.00",
    blurb: "House-made lavender, rose & white chocolate over espresso.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Frenchie Croissant",
    price: "$13.00",
    blurb: "Ham, provolone, goat cheese & spicy jam on a buttery croissant.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
  },
];

const teasers = [
  {
    name: "Kayte H.",
    quote:
      "The Mansion Society have the sweetest baristas EVER! Their iced vanilla latte was one of the best I've ever had.",
  },
  {
    name: "Maram E.",
    quote:
      "Probably one of the nicest family owned coffee shops in Indy. Creative drinks and incredible service.",
  },
  {
    name: "Natalie L.",
    quote:
      "Neat coffeehouse with a unique history and ambiance. A hidden gem with fantastic service.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mansion Society — Best Coffee in Indianapolis | Brunch & Bakery" },
      {
        name: "description",
        content:
          "Voted some of the best coffee in Indianapolis. Mansion Society serves artisanal lattes, gourmet brunch and house-baked treats inside a restored historic mansion. Latinx & women-owned coffee shop in Indianapolis, IN.",
      },
      { property: "og:title", content: "Mansion Society — Best Coffee in Indianapolis" },
      {
        property: "og:description",
        content:
          "The best coffee shop in Indianapolis — specialty lattes, gourmet brunch and pastries inside a historic mansion.",
      },
      {
        name: "keywords",
        content:
          "best coffee in Indianapolis, Indianapolis coffee shop, specialty coffee Indianapolis, brunch Indianapolis, latte Indianapolis, Japanese cheesecake Indianapolis, Latinx owned coffee shop, women owned coffee shop, Mansion Society",
      },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Warm interior of Mansion Society coffee house"
            className="h-full w-full object-cover img-warm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80 fade-in-up">
            Est. in a historic Indianapolis mansion
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl fade-in-up">
            Where heritage meets modern indulgence.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg fade-in-up">
            Experience artisanal coffee, gourmet pastries and a timeless ambiance —
            crafted by hand in a Latinx and women-owned coffee house.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 fade-in-up">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0px_4px_8px_rgb(0_0_0_/_0.25)] transition hover:bg-primary/90"
            >
              View Our Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Welcome</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          A coffee house with a soul.
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />
        <p className="mt-8 text-lg leading-relaxed text-foreground/80">
          Mansion Society was born from a love of beautifully made things —
          house-crafted syrups, pillowy Japanese cheesecake, gourmet brunch and
          espresso pulled with care. Step inside and you'll find the warmth of a
          historic mansion paired with the thoughtful detail of a modern
          specialty café.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Latinx & women-owned · proudly serving Indianapolis.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[oklch(0.92_0.014_75)] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Guest favorites</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                A few things to fall in love with.
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-primary/80"
            >
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-xl bg-background shadow-[0px_4px_8px_rgb(0_0_0_/_0.06)] transition hover:shadow-[0px_12px_32px_rgb(60_40_20_/_0.12)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover img-warm transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                    <span className="text-sm font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-xl shadow-[0px_12px_32px_rgb(60_40_20_/_0.12)]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80"
              alt="Cozy seating inside Mansion Society"
              className="h-full w-full object-cover img-warm"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">The ambiance</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Linger a little longer.
            </h2>
            <div className="mt-6 h-px w-16 bg-border" />
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Velvet couches, tall windows, original mouldings, the gentle hiss of
              espresso. Whether you're meeting a friend, settling in for a slow
              brunch, or finding a quiet corner to work, our mansion was made to
              be enjoyed unhurried.
            </p>
            <div className="mt-10 flex items-center gap-6 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" /> Specialty espresso
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> 4.6 ★ on Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[oklch(0.92_0.014_75)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Guests are saying</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Kind words from our regulars.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {teasers.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-border/70 bg-background p-8 shadow-[0px_4px_8px_rgb(0_0_0_/_0.04)]"
              >
                <div className="flex gap-1 text-primary">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-foreground/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Come visit</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          We've saved a seat for you.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-card p-8 text-left">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-4 font-serif text-xl text-foreground">Find us</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              202 Steeples Blvd<br />Indianapolis, IN
            </p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-8 text-left">
            <Clock className="h-5 w-5 text-primary" />
            <p className="mt-4 font-serif text-xl text-foreground">Hours</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Wed – Sat · 8am – 4pm<br />
              Sunday · 9am – 4pm<br />
              Closed Monday & Tuesday
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0px_4px_8px_rgb(0_0_0_/_0.1)] transition hover:bg-primary/90"
          >
            Plan your visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
