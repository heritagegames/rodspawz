import { contact } from "@/lib/products";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <section className="wrap section prose-page">
      <p className="eyebrow">Contact</p>
      <h1>Say hello</h1>
      <p>
        Questions, orders, wholesale or a school fundraiser? We work with schools, veterinarians and local groups,
        and we&rsquo;d love to hear from you.
      </p>
      <div className="contact-cards">
        <a className="cat" href={`mailto:${contact.email}`}>
          <h3>Email</h3>
          <p>{contact.email}</p>
        </a>
        <a className="cat" href={`tel:${contact.phone.replace(/-/g, "")}`}>
          <h3>Phone</h3>
          <p>{contact.phone}</p>
        </a>
        <div className="cat">
          <h3>Where</h3>
          <p>
            {contact.company}
            <br />
            {contact.town}
          </p>
        </div>
      </div>
    </section>
  );
}
