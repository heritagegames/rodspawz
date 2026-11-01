import Link from "next/link";
import Photo from "@/components/Photo";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const press = [
  { outlet: "Yankee Magazine", note: "Featured in the “New England’s Finest” edition", date: "May 2006" },
  { outlet: "Treehugger.com", note: "“Rod’s Pawz: Make Your Own Organic Dog Treats”", date: "April 2006" },
  { outlet: "New Hampshire Magazine", note: "“Pampered Pets,” Best of New Hampshire issue", date: "July 2004" },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);
  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__text">
            <p className="eyebrow">Newmarket, New Hampshire · since 2003</p>
            <h1>Homemade organic dog treats &amp; fun stuff</h1>
            <p className="lede">
              Natural treats, catnip and pet care made in memory of Rodney, the good dog who started it all.
            </p>
            <div className="actions">
              <Link href="/products" className="btn">
                Shop the treats
              </Link>
              <Link href="/about" className="btn btn--ghost">
                Our story
              </Link>
            </div>
          </div>
          <Photo file="rod-window-silhouette.gif" alt="Rod and a cat looking out a window together" className="hero__img" />
        </div>
      </section>

      <section className="wrap section">
        <h2>Shop by category</h2>
        <div className="cats">
          {(["dog-treats", "cat-products", "pet-care", "diy"] as const).map((c) => (
            <Link key={c} href={categories[c].href} className="cat">
              <h3>{categories[c].title}</h3>
              <p>{categories[c].blurb}</p>
              <span className="cat__go">Browse →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>Favorites</h2>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap section press">
          <h2>Rod&rsquo;s Pawz in the press</h2>
          <ul className="press__list">
            {press.map((x) => (
              <li key={x.outlet}>
                <p className="press__outlet">{x.outlet}</p>
                <p>{x.note}</p>
                <p className="press__date">{x.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
