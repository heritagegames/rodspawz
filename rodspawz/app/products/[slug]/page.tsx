import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { categories, contact, getProduct, money, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  return p ? { title: p.name, description: p.tagline } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const cat = categories[p.category];
  return (
    <section className="wrap section product">
      <Photo file={p.image} alt={p.name} className="product__img" />
      <div className="product__info">
        <Link href={cat.href} className="eyebrow">
          ← {cat.title}
        </Link>
        <h1>{p.name}</h1>
        <p className="product__tag">{p.tagline}</p>
        <p className="product__price">{money(p.price)}</p>
        <p>{p.description}</p>
        {p.details && (
          <ul className="ticks">
            {p.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
        <a
          className="btn"
          href={`mailto:${contact.email}?subject=${encodeURIComponent(`Order: ${p.name}`)}`}
        >
          Order by email
        </a>
        <p className="muted">
          Or call us at <a href={`tel:${contact.phone.replace(/-/g, "")}`}>{contact.phone}</a>.
        </p>
      </div>
    </section>
  );
}
