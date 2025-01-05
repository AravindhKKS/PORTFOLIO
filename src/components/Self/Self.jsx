import "./Self.css";
import { Link } from "react-router-dom";

const Self = () => {
  return (
    <div className="features">
      <img
        className="img"
        src="https://img.freepik.com/free-photo/dark-blue-product-background_53876-92801.jpg?size=626&ext=jpg&ga=GA1.2.778411145.1691751223&semt=ais"
        alt=""
      />
      <div className="info">
        <h6>HI, I'M A SELF-LEARNER</h6>
        <div className="animate-charcter">React Developer.</div>
        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="/project">
            <button className="selfPro">PROJECT</button>
          </Link>
          <a href="https://drive.google.com/file/d/1utsgOnwS7WdDyO2Nclgy2MngZlN8KWLO/view?usp=sharing">
            <button className="selfRes">RESUME aravinth</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Self;
