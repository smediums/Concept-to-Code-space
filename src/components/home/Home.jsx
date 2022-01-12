import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="homeContent">
        <article className="greeting">
          <h4>So, you want to travel to</h4>
          <h2>Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className="exploreBtn">
          <button>
            <Link to="/destination">Explore</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
