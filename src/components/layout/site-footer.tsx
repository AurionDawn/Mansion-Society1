import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.92_0.014_75)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-serif text-3xl text-foreground">Mansion Society</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            Where Heritage Meets Modern Indulgence
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/80">
            A Latinx & women-owned coffee house serving in-house syrups, gourmet
            brunch and freshly baked pastries inside a beautifully restored
            historic mansion.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-serif text-lg text-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/menu" className="hover:text-primary">Menu</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-lg text-foreground">Visit</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-foreground/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>202 Steeples Blvd<br />Indianapolis, IN</span>
          </p>
          <div className="mt-5 flex items-start gap-2 text-sm text-foreground/75">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p>Wed – Sat · 8am – 4pm</p>
              <p>Sunday · 9am – 4pm</p>
              <p className="text-muted-foreground">Closed Mon & Tue</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Mansion Society. All rights reserved.</p>
          <p className="uppercase tracking-[0.24em]">Latinx & women-owned</p>
        </div>
      </div>
    </footer>
  );
}