import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap section prose-page">
      <h1>This page ran off after a squirrel</h1>
      <p>
        <Link href="/" className="btn">
          Back home
        </Link>
      </p>
    </section>
  );
}
