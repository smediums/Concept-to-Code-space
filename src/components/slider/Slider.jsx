import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ data, descClass }) => {
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <div className="slider">
      <div className="visualContent">
        {/* slide img */}
        <img src={data[dataIndex].image} alt={data[dataIndex].name} />
        {/* Slide indicators */}
        <ul className="indicators">
          {data.map((obj) => (
            <div
              key={obj.name}
              className={`indicate ${data[dataIndex] === obj ? "clicked" : ""}`}
              id="indicate"
              onClick={() => setDataIndex(data.indexOf(obj))}
            >
              <p>{obj.indicator}</p>
            </div>
          ))}
        </ul>
      </div>
      {/* slide details */}
      <div className="details">
        <h4 className="role">{data[dataIndex].role}</h4>
        <h3 className="name">{data[dataIndex].name}</h3>
        <p className={descClass}>{data[dataIndex].description}</p>
      </div>
    </div>
  );
};

export default Slider;
