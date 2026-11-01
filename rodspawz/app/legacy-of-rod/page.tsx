import Photo from "@/components/Photo";

export const metadata = { title: "The Legacy of Rod" };

export default function Legacy() {
  return (
    <article className="wrap section prose-page">
      <p className="eyebrow">Legacy of RP</p>
      <h1>The legacy of Rod</h1>
      <p className="muted">Rodney · 1988–2001 · Black Lab &amp; Rottweiler</p>
      <Photo file="rod-in-leaves-color.jpg" alt="Rodney enjoying the autumn leaves" className="prose-page__img" />
      <p>
        Rod wasn&rsquo;t just a pet. He was family, known for his gentle spirit, his loyalty and his joy. He
        volunteered as a bocce ball coach, was always a good listener, and never got over the thrill of opening
        presents.
      </p>
      <p>
        His trouble with commercial treats full of artificial ingredients and additives is what set us on the path
        to wholesome, organic ones. Everything we make honors his memory and the bond between pets and the people
        who love them.
      </p>
      <blockquote>Don&rsquo;t forget to treat your best friend with the love they deserve.</blockquote>
    </article>
  );
}
