import "../../assets/styles/portfolio.css";

export default function Portfolio() {
  return (
    <section>
      <h1 className="title">Portfolio</h1>
      <div className="portfolio-grid">
        {/* you can break each item into an individual component */}
        <div className="item">
          <div className="thumbnail">
            <img src="robotics.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>Web Development</h4>
        </div>
        <div className="item">
          <div className="thumbnail">
            <img src="graphics-design.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>Graphics Design</h4>
        </div>
        <div className="item">
          <div className="thumbnail">
            <img src="web-design.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>Web Design</h4>
        </div>
        <div className="item">
          <div className="thumbnail">
            <img src="seo.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>SEO</h4>
        </div>
        <div className="item">
          <div className="thumbnail">
            <img src="robotics.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>Web Development</h4>
        </div>
        <div className="item">
          <div className="thumbnail">
            <img src="graphics-design.jpg" alt="" />
            <i className="bx bx-show"></i>
          </div>
          <h2>Finance</h2>
          <h4>Graphics Design</h4>
        </div>
      </div>
    </section>
  );
}
