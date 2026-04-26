import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

const OG_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80";

const tags = [
  "banana pancake latte",
  "croissants",
  "chocolate croissant",
  "sandwiches",
  "japanese cheesecake",
  "friendly staff",
  "historic building",
  "couches",
  "cream cheese muffin",
  "cozy spot",
];

const reviews = [
  {
    name: "Kayte H",
    badge: "Local Guide · 11 reviews · 17 photos",
    when: "a month ago",
    text:
      "The Mansion Society have the sweetest baristas EVER!! Sadly, I do not go very often due to distance, but every time I do, the baristas here make you feel like I am their best friend. Not to mention their iced vanilla latte was one of the best I've ever had!",
  },
  {
    name: "Margaret Easley",
    badge: "1 review · 1 photo",
    when: "4 months ago",
    text:
      "Marvelous experience! The cafe is adorable. The nice woman working was so warm and inviting! And the two coffee drinks we got with oat milk were delicious and just the right temperature. We will definitely be back to try the new vegan food options :)",
  },
  {
    name: "Natalie Lindsey Miller",
    badge: "Local Guide · 69 reviews · 10 photos",
    when: "6 months ago",
    text:
      "Neat coffeehouse with a unique history and ambiance. Needed a place to get some work done and stumbled upon this hidden gem. Fantastic service, banana pancake latte had just the right amount of mild sweetness. Great drip coffee. Will definitely return if in the area.",
  },
  {
    name: "Josie Martin",
    badge: "Local Guide · 18 reviews · 52 photos",
    when: "4 months ago",
    text:
      "Delicious drinks and fantastic service. We got the winter seasonal banana pancake latte and dirty carrot chai. You'll have to stir the drinks when you get them. The baristas were super personable, and the atmosphere was perfect for a cafe.",
  },
  {
    name: "Maram E.",
    badge: "Local Guide · 261 reviews · 404 photos",
    when: "Edited 5 months ago",
    text:
      "Probably one of the nicest family owned coffee shops in indy! They've got a homie vibe, they're so creative with their creations and they've got great customer service. Barbie did an amazing job accommodating our big group of friends and the owner was very helpful. Highly recommended!!",
  },
  {
    name: "Bekah Crotteau",
    badge: "7 reviews · 5 photos",
    when: "4 months ago",
    text:
      "Such a cozy and charming space! The drinks were beautiful and so delicious! I had the S'mores latte and she made it half sweet for me which was perfect. Highly recommend!",
  },
  {
    name: "Javier Carranza",
    badge: "Local Guide · 130 reviews · 170 photos",
    when: "2 months ago",
    text:
      "Lovely little shop! The energy and vibes here were great! I just sat at a table, drinking my coffee and taking in everything. It's family owned and the staff was helpful, friendly, and very knowledgeable.",
  },
  {
    name: "Jen Burnette",
    badge: "Local Guide · 50 reviews · 24 photos",
    when: "5 months ago",
    text:
      "Unexpected spot for great coffee! It has great personality and friendly service. My Cubano was perfect and I loved the cute glass it was served in. These unexpected touches make Mansion Society stand out from the rest.",
  },
  {
    name: "Timothy DeWeese",
    badge: "8 reviews · 1 photo",
    when: "2 months ago",
    text:
      "Went back after some time. Nothing made me stay away — I just like to spread my business out to local businesses. The Goat breakfast sandwich was outstanding. Perfectly fluffy scrambled eggs.",
  },
  {
    name: "Sess Eka",
    badge: "Local Guide · 71 reviews · 42 photos",
    when: "a year ago",
    text:
      "Delicious drinks and tasty sandwiches! Absolutely loved the iced strawberry matcha drink I got and the Frenchie croissant sandwich. Our barista was super nice. Will definitely go back!",
  },
];

const distribution = [
  { stars: 5, pct: 82 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 1 },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Best Coffee Shop in Indianapolis | Mansion Society" },
      {
        name: "description",
        content:
          "What guests are saying about Mansion Society — 4.6★ on Google with 256 reviews praising our baristas, lattes, croissants and ambiance.",
      },
      { property: "og:title", content: "What Our Guests Say — Mansion Society" },
      { property: "og:description", content: "4.6 ★ · 256 reviews. Read what our regulars love." },
      { property: "og:image", content: OG_IMG },
      { name: "twitter:image", content: OG_IMG },
    ],
    links: [{ rel: "canonical", href: "https://mansionsociety.lovable.app/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://mansionsociety.lovable.app/#business",
          name: "Mansion Society",
          url: "https://mansionsociety.lovable.app",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "256",
            bestRating: "5",
            worstRating: "1",
          },
          review: reviews.slice(0, 6).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: r.text,
          })),
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div>
      <section className="border-b border-border bg-[oklch(0.92_0.014_75)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Reviews</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            What Our Guests Say
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
          <p className="mt-6 text-lg italic text-muted-foreground">A few favorite words from the bar.</p>
        </div>
      </section>

      {/* Summary card */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-10 shadow-[0px_4px_8px_rgb(0_0_0_/_0.04)] md:grid-cols-[auto_1fr_auto] md:gap-16">
          <div className="text-center">
            <p className="font-serif text-7xl leading-none text-foreground">4.6</p>
            <div className="mt-3 flex justify-center gap-1 text-primary">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">256 Google reviews</p>
          </div>
          <div className="space-y-2">
            {distribution.map((d) => (
              <div key={d.stars} className="flex items-center gap-3 text-sm">
                <span className="w-6 text-foreground/70">{d.stars}</span>
                <Star className="h-3.5 w-3.5 fill-current text-primary" />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="w-10 text-right text-xs text-muted-foreground">{d.pct}%</span>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/search?q=mansion+society+indianapolis+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0px_4px_8px_rgb(0_0_0_/_0.1)] transition hover:bg-primary/90"
          >
            Write a review
          </a>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground/75"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-border/70 bg-card p-7 shadow-[0px_4px_8px_rgb(0_0_0_/_0.04)] transition hover:shadow-[0px_12px_32px_rgb(60_40_20_/_0.1)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{r.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{r.badge}</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-primary/60" />
              </div>
              <div className="mt-4 flex gap-1 text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground">{r.when}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}