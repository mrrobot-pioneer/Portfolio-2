import "../../assets/styles/resume.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function Resume() {
  return (
    <section>
      <h1 className="title"> Resume</h1>
      <Education />
      <Experience />
      <Skills />
    </section>
  );
}
