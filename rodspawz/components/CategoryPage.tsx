import ProductCard from "./ProductCard";
import { Category, byCategory, categories } from "@/lib/products";

export default function CategoryPage({ category }: { category: Category }) {
  const c = categories[category];
  return (
    <section className="wrap section">
      <h1>{c.title}</h1>
      <p className="lede">{c.blurb}</p>
      <div className="grid">
        {byCategory(category).map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
