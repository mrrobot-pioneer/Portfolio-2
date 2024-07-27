import "../../assets/styles/blog.css";

export default function Blog() {
  return (
    <section>
      <h1 className="title">Blog</h1>
      <div className="blog-grid">
        {/* you can break each item into an individual component */}
        <div className="item">
          <div className="thumbnail">
            <img src="robotics.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img src="web-design.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img src="seo.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img src="graphics-design.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img src="robotics.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img src="web-design.jpg" alt="" loading="lazy" />
          </div>
          <div className="details">
            <p>
              By: <span>Admin</span>
            </p>
            &#x2E;
            <p>23 January, 2024</p>
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus, exercitationem nesciunt blanditiis ab distinctio...
          </p>
          <a href="#">
            Read More <i className="bx bx-chevrons-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
