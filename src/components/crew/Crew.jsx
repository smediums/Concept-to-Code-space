import { useState } from "react";
import "./crew.scss";

const Crew = ({ data }) => {
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <section className="crew">
      <div className="content">
        <h2 className="navigation">
          <span>02</span> Meet your crew
        </h2>
        {/* Img and slide indicators */}
        <div className="slider">
          <div className="visualContent">
            {/* slide img */}
            <img src={data[dataIndex].images.png} alt={data[dataIndex].name} />
            {/* Slide indicators */}
            <ul className="indicators">
              {data.map((member) => (
                <span
                  key={member.name}
                  className={`indicate ${
                    data[dataIndex] === member ? "clicked" : ""
                  }`}
                  onClick={() => setDataIndex(data.indexOf(member))}
                ></span>
              ))}
            </ul>
          </div>
          {/* slide details */}
          <div className="details">
            <h4 className="role">{data[dataIndex].role}</h4>
            <h3 className="name">{data[dataIndex].name}</h3>
            <p className="bio">{data[dataIndex].bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
