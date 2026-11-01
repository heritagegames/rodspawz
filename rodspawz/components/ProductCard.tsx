import Link from "next/link";
import Photo from "./Photo";
import { Product, money } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className="card">
      <Photo file={p.image} alt={p.name} className="card__img" />
      <div className="card__body">
        <h3 className="card__title">{p.name}</h3>
        <p className="card__tag">{p.tagline}</p>
        <p className="card__price">{money(p.price)}</p>
      </div>
    </Link>
  );
}
