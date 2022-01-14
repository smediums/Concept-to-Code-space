import NextBtn from "../nextBtn/NextBtn";
import Slider from "../slider/Slider";
import "./technology.scss";

const Technology = ({ data }) => {
  console.log(data);

  return (
    <section className="technology">
      <div className="content">
        <h2 className="navigation">
          <span>03</span> Space launch 101
        </h2>
        <Slider data={data} descClass="desc" />
        <NextBtn link={"/"} />
      </div>
    </section>
  );
};

export default Technology;
