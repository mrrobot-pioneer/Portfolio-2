export default function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-wrapper">
        <div className="item">
          <p>
            Web Design <span>90%</span>
          </p>
          <progress value={90} max={100}></progress>
        </div>
        <div className="item">
          <p>
            Web Development <span>75%</span>
          </p>
          <progress value={75} max={100}></progress>
        </div>
        <div className="item">
          <p>
            Robotics <span>95%</span>
          </p>
          <progress value={95} max={100}></progress>
        </div>
        <div className="item">
          <p>
            Graphics Design <span>60%</span>
          </p>
          <progress value={60} max={100}></progress>
        </div>
      </div>
    </div>
  );
}
