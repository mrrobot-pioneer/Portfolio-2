import "../../assets/styles/sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prev) => !prev);
  }

  return (
    <aside>
      <div className="sidebar">
        <div className="details">
          <div className="profile">
            <img src="p1.png" alt="" />
          </div>
          <div className="info">
            <h1 className="name">John Doe</h1>
            <h4 className="role">Full Stack Developer</h4>
          </div>
        </div>

        <div className={isShown ? "more-details active" : "more-details"}>
          <div className="item">
            <div className="icon">
              <i className="bx bx-envelope"></i>
            </div>
            <div className="text">
              <h2>Email</h2>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-phone-call"></i>
            </div>
            <div className="text">
              <h2>Phone</h2>
              <p>+1-555-679-345</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-calendar"></i>
            </div>
            <div className="text">
              <h2>Birthday</h2>
              <p>13th Oct.,2000</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-location-plus"></i>
            </div>
            <div className="text">
              <h2>Location</h2>
              <p>Miami,Florida,USA</p>
            </div>
          </div>
        </div>

        {/* button to reveal contacts on mobile devices */}
        <div className="show-contacts" onClick={handleClick}>
          <span>Show Contacts</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </div>
    </aside>
  );
}
