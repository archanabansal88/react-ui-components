import { Link, Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="nav-links">
        <Link to={"accordion"}>Accordion</Link>
        <Link to={"collapsiblePanel"}>CollapsiblePanel</Link>
        <Link to={"tab"}>Tab</Link>
        <Link to={"carousel"}>Carousel</Link>
        <Link to={"dropdown"}>Dropdown</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
