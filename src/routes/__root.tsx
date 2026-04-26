import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Lost in the mansion</p>
          <h1 className="mt-4 font-serif text-7xl text-foreground">404</h1>
          <p className="mt-4 text-base text-muted-foreground">
            The page you're looking for has wandered off. Let's get you back home.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[0px_4px_8px_rgb(0_0_0_/_0.1)] transition hover:bg-primary/90"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mansion Society" },
      {
        name: "description",
        content:
          "A Latinx and women-owned specialty coffee house pairing artisanal lattes, gourmet brunch and house-baked treats with timeless mansion ambiance.",
      },
      { name: "author", content: "Mansion Society" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: "Mansion Society" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Mansion Society" },
      { name: "twitter:title", content: "Mansion Society" },
      { property: "og:description", content: "Best known for some of the best coffee in Indianapolis — Latinx & women-owned café with house-baked treats inside a historic mansion." },
      { name: "twitter:description", content: "Best known for some of the best coffee in Indianapolis — Latinx & women-owned café with house-baked treats inside a historic mansion." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a8f05481-a7ec-4324-a29c-7268345ee60b/id-preview-e4ff0b5c--49e228e4-a040-4259-9d36-69163173b6e3.lovable.app-1776904734428.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a8f05481-a7ec-4324-a29c-7268345ee60b/id-preview-e4ff0b5c--49e228e4-a040-4259-9d36-69163173b6e3.lovable.app-1776904734428.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
