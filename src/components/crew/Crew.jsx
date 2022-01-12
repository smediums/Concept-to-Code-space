
import Slider from "../slider/Slider";
import "./crew.scss";

const Crew = ({ data }) => {
  

  return (
    <section className="crew">
      <div className="content">
        <h2 className="navigation">
          <span>02</span> Meet your crew
        </h2>
        {/* Img and slide indicators */}
          <Slider data={data} descClass={'bio'}/>
      </div>
    </section>
  );
};

export default Crew;
