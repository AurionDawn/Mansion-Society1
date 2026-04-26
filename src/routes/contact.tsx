import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";

const OG_IMG =
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Best Coffee in Indianapolis | Mansion Society" },
      {
        name: "description",
        content:
          "Visit Mansion Society for the best coffee in Indianapolis. Located at 202 Steeples Blvd, Indianapolis, IN. Hours: Wed–Sat 8am–4pm, Sun 9am–4pm. Closed Monday & Tuesday.",
      },
      { property: "og:title", content: "Connect With Us — Mansion Society" },
      { property: "og:description", content: "We'd love to hear from you. Find our address, hours and how to get in touch." },
      { property: "og:image", content: OG_IMG },
      { name: "twitter:image", content: OG_IMG },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-[oklch(0.92_0.014_75)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Contact</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground sm:text-6xl">Connect With Us</h1>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
          <p className="mt-6 text-lg italic text-muted-foreground">
            Pouring some of the best coffee in Indianapolis — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Find us</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">Stop by the mansion.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Tucked into a beautifully restored historic home — there's always
                a seat with your name on it.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Address</p>
                  <p className="mt-1 font-serif text-lg text-foreground">
                    202 Steeples Blvd<br />Indianapolis, IN
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Hours</p>
                  <table className="mt-2 text-sm text-foreground/85">
                    <tbody>
                      <tr>
                        <td className="pr-6 font-medium">Wed – Sat</td>
                        <td>8am – 4pm</td>
                      </tr>
                      <tr>
                        <td className="pr-6 font-medium">Sunday</td>
                        <td>9am – 4pm</td>
                      </tr>
                      <tr>
                        <td className="pr-6 font-medium text-muted-foreground">Mon & Tue</td>
                        <td className="text-muted-foreground">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Follow along</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-[0px_12px_32px_rgb(60_40_20_/_0.12)]">
            <iframe
              title="Mansion Society location"
              src="https://www.google.com/maps?q=202+Steeples+Blvd+Indianapolis+IN&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full lg:min-h-[560px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}