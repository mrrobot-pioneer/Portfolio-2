import Intro from "./Intro";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Clients from "./Clients";

import "../../assets/styles/about.css";

export default function About() {
  return (
    <section>
      <h1 className="title">About Me</h1>
      <Intro />
      <Services />
      <Testimonials />
      <Clients />
    </section>
  );
}
