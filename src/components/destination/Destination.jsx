import "./Destination.scss";
import { useState } from "react";
import NextBtn from "../nextBtn/NextBtn";

const Destination = ({ data }) => {
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <section className="destination">
      <div className="content">
        <h2 className="navigation">
          <span>01</span> Pick your destination
        </h2>
        {/* Img and text container */}
        <div className="theInfo">
          {/* Destination Img */}
          <img src={data[dataIndex].image} alt={data[dataIndex].name} />
          <div className="overview">
            {/* Destination choices */}
            <ul className="places">
              {data.map((place) => (
                <li
                  key={place.name}
                  className={data[dataIndex] === place ? "clicked" : ""}
                  onClick={() => setDataIndex(data.indexOf(place))}
                >
                  {place.name}
                </li>
              ))}
            </ul>
            {/* Summary of selected destination */}
            <div className="details">
              {/* Name */}
              <h1 className="placeName">{data[dataIndex].name}</h1>
              {/* Description */}
              <p className="description">{data[dataIndex].description}</p>
              <div className="tripSummary">
                {/* Distance */}
                <div className="distance">
                  <p>Avg. distance</p>
                  <h4>{data[dataIndex].distance}</h4>
                </div>
                {/* Travel Time */}
                <div className="travelTime">
                  <p>Est. Travel Time</p>
                  <h4>{data[dataIndex].travel}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NextBtn link={"/crew"} />
      </div>
    </section>
  );
};

export default Destination;
