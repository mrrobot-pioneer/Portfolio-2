import "../../assets/styles/contact.css";

export default function Contact() {
  return (
    <section>
      <h1 className="title">Contact</h1>
      <form action="" className="contact-form">
        <h2 className="form-title">Contact Form</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea className="message" placeholder="Your Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
