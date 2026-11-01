import Link from "next/link";
import Photo from "@/components/Photo";

export const metadata = { title: "Our Story" };

export default function About() {
  return (
    <article className="wrap section prose-page">
      <p className="eyebrow">Our Story</p>
      <h1>It started with Rodney</h1>
      <Photo file="rod-in-leaves.gif" alt="Rodney (Rod), the inspiration behind Rod's Pawz" className="prose-page__img" />

      <h2>Meet Rodney</h2>
      <p>
        Rodney, or Rod, was our family dog until we lost him in 2001. He had a skin condition that we came to
        link to the additives in store-bought treats, and he&rsquo;s the reason we started paying close attention
        to what our pets eat.
      </p>

      <h2>The birth of Rod&rsquo;s Pawz</h2>
      <p>
        In 2003, a family member suggested we make our own homemade organic dog treats. We named the company for
        Rod. As our founder puts it, &ldquo;This way I keep him with me on a daily basis.&rdquo;
      </p>

      <h2>Growing the business</h2>
      <p>
        From those first batches of treats in Newmarket, NH, Rod&rsquo;s Pawz has grown to include catnip,
        natural pet care, apparel, accessories and toys.
      </p>

      <h2>Giving back</h2>
      <p>
        A portion of our proceeds goes to the SPCA in Stratham, and schools&rsquo; parent-teacher organizations
        sell our products as fundraisers.
      </p>

      <p>
        <Link href="/legacy-of-rod">Read more about Rod&rsquo;s legacy →</Link>
      </p>
    </article>
  );
}
