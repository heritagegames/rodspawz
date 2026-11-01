import Link from "next/link";
import Photo from "@/components/Photo";
import { getProduct, money } from "@/lib/products";

export const metadata = { title: "DIY Dog Treat Kit" };

const steps = [
  "Preheat the oven to 350°F (175°C).",
  "Mix the dry ingredients, then add the wet ingredients to form a dough.",
  "Roll the dough to about ¼ inch thick and cut shapes with the bone cookie cutter.",
  "Bake on a sheet for about 20 minutes, then let the treats cool completely.",
  "Store them in the burlap bag or an airtight container.",
];

export default function TreatMix() {
  const kit = getProduct("diy-treat-kit")!;
  return (
    <section className="wrap section product">
      <Photo file={kit.image} alt={kit.name} className="product__img" />
      <div className="product__info">
        <p className="eyebrow">DIY Treats</p>
        <h1>Make your own organic dog treats</h1>
        <p>
          Our kit puts you in charge of what goes into your dog&rsquo;s treats: no preservatives, no artificial
          colors, no fillers. It&rsquo;s a fun afternoon project with kids, too.
        </p>
        <h2 className="h3">How it works</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="product__price">{money(kit.price)}</p>
        <Link href={`/products/${kit.slug}`} className="btn">
          See the kit
        </Link>
      </div>
    </section>
  );
}
