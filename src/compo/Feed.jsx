import React, { useState } from "react";
import Card from "./Card";
import "./Feed.css";
import arrowLeft from "../asserts/arrowLeft.svg";
import arrowRight from "../asserts/arrowRight.svg";

function Feed({ data }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardWidth = 200; // width of a single card in pixels
  const maxOffset = (data.length - 1) * cardWidth; // maximum offset for the carousel

  const handlePrevClick = () => {
    setCurrentCardIndex(currentCardIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  return (
    <div className="feed-container">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentCardIndex * cardWidth}px)`,
          }}
        >
          {data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
        <button
          className={`carousel-btnP ${
            currentCardIndex === 0 ? "disabled" : ""
          }`}
          onClick={handlePrevClick}
          disabled={currentCardIndex === 0}
        >
          <img src={arrowLeft} alt="previous" />
        </button>
        <button
          className={`carousel-btnN ${
            currentCardIndex === data.length - 1 ? "disabled" : ""
          }`}
          onClick={handleNextClick}
          disabled={currentCardIndex === data.length - 1}
        >
          <img src={arrowRight} alt="next" />
        </button>
      </div>
    </div>
  );
}

export default Feed;
