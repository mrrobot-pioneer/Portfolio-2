import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
