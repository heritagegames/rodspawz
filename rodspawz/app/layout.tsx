import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { contact } from "@/lib/products";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodspawz.com"),
  title: { default: "Rod's Pawz | Homemade Organic Dog Treats", template: "%s | Rod's Pawz" },
  description:
    "Homemade organic dog treats, catnip and natural pet care, made with love in Newmarket, NH since 2003.",
};

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/dog-treats", label: "Dog Treats" },
  { href: "/cat-products", label: "Cat" },
  { href: "/pet-care", label: "Pet Care" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap site-header__inner">
            <Link href="/" className="brand">
              <Photo file="rp-logo-hi-res.gif" alt="RP" className="brand__logo" />
              <span className="brand__name">Rod&rsquo;s Pawz</span>
            </Link>
            <nav className="nav" aria-label="Main">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap site-footer__inner">
            <div>
              <p className="site-footer__brand">Rod&rsquo;s Pawz</p>
              <p>Homemade organic treats &amp; fun stuff since 2003.</p>
            </div>
            <div>
              <p>{contact.company}</p>
              <p>{contact.town}</p>
              <p>
                <a href={`tel:${contact.phone.replace(/-/g, "")}`}>{contact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
            <nav className="site-footer__links" aria-label="Footer">
              <Link href="/treat-mix">DIY Treats</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/legacy-of-rod">Legacy of RP</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <p className="wrap site-footer__copy">© {new Date().getFullYear()} Rod&rsquo;s Pawz, Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
