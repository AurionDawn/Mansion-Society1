import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, HeartHandshake, Coffee, Home } from "lucide-react";

const OG_IMG =
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80";

const values = [
  {
    icon: Sparkles,
    title: "Quality, always",
    body:
      "We make our syrups, bake our cheesecake and pull every espresso to order. The little details matter most.",
  },
  {
    icon: HeartHandshake,
    title: "Community first",
    body:
      "We're proudly Latinx and women-owned, here to lift up our neighbors, our team, and the artists who make our space sing.",
  },
  {
    icon: Coffee,
    title: "Hospitality with soul",
    body:
      "Warm welcomes, real conversations, and a barista who remembers your name on visit two. That's the standard.",
  },
  {
    icon: Home,
    title: "An ambiance to keep",
    body:
      "A historic mansion lovingly restored — original details, soft light, slow mornings. A room you'll want to linger in.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Latinx & Women-Owned Coffee Shop in Indianapolis | Mansion Society" },
      {
        name: "description",
        content:
          "The story behind Mansion Society — a Latinx and women-owned coffee shop pouring some of the best coffee in Indianapolis from a beautifully restored historic mansion.",
      },
      { property: "og:title", content: "Our Story — Mansion Society" },
      {
        property: "og:description",
        content: "Crafting moments, one cup at a time — the story behind a Latinx & women-owned coffee house.",
      },
      { property: "og:image", content: OG_IMG },
      { name: "twitter:image", content: OG_IMG },
    ],
    links: [{ rel: "canonical", href: "https://mansionsociety.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-[oklch(0.92_0.014_75)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">About</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground sm:text-6xl">Our Story</h1>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
          <p className="mt-6 text-lg italic text-muted-foreground">Crafting moments, one cup at a time.</p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-32">
        <div className="overflow-hidden rounded-xl shadow-[0px_12px_32px_rgb(60_40_20_/_0.12)]">
          <img
            src={OG_IMG}
            alt="A barista crafting a latte at Mansion Society"
            className="h-full w-full object-cover img-warm"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">The beginning</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Built by hand, with heritage at heart.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Mansion Society was born from a simple idea: that a coffee house can
              feel like a home. Founded by women who refused to compromise on
              flavor, beauty or hospitality, our café is a love letter to the
              craftsmanship we grew up with — and to the city we now call ours.
            </p>
            <p>
              We chose a historic Indianapolis mansion because the building told a
              story we wanted to continue: detail, patience, and warmth that
              welcomes everyone through the door.
            </p>
            <p>
              Every menu item — from the in-house lavender syrup to the pillowy
              Japanese cheesecake — is made with the same care our families
              taught us. We hope you taste it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[oklch(0.92_0.014_75)] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">What guides us</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Our mission & values.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border/70 bg-background p-8 transition hover:shadow-[0px_12px_32px_rgb(60_40_20_/_0.1)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Visit us</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Come find us in Indianapolis.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Stop by our historic mansion for what locals call some of the best
            coffee in Indianapolis — pulled to order, served with care.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0px_4px_8px_rgb(0_0_0_/_0.1)] transition hover:bg-primary/90"
          >
            Come say hello
          </Link>
        </div>
      </section>
    </div>
  );
}