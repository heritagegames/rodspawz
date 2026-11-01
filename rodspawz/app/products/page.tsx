import ProductCard from "@/components/ProductCard";
import { Category, byCategory, categories } from "@/lib/products";

export const metadata = { title: "Shop" };

const order: Category[] = ["dog-treats", "gift-sets", "diy", "cat-products", "pet-care"];

export default function Products() {
  return (
    <section className="wrap section">
      <h1>Shop Rod&rsquo;s Pawz</h1>
      <p className="lede">Everything we make, all in one place.</p>
      {order.map((c) => (
        <div key={c} id={c} className="shelf">
          <h2>{categories[c].title}</h2>
          <div className="grid">
            {byCategory(c).map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
