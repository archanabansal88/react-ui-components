import { useState, useEffect } from "react";
import "./carousel.css";

type CarouselDataT = {
  data: Array<{
    title: string;
    description: string;
    image: string;
    id: number;
  }>;
  infiniteScroll?: Boolean | undefined;
};

const Carousel = ({ data, infiniteScroll }: CarouselDataT) => {
  const [currIndex, setCurIndex] = useState<number>(0);

  const carouselInfiniteScroll = () => {
    if (infiniteScroll) {
      if (currIndex === data.length - 1) {
        return setCurIndex(0);
      }
      return setCurIndex(currIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={
        infiniteScroll ? "carouselInfinite-container" : "carousel-container"
      }
    >
      {infiniteScroll ? (
        data.map(({ id, title, image, description }) => {
          return (
            <div
              key={id}
              className="carousel-item"
              style={{ transform: `translate(-${currIndex * 100}%)` }}
            >
              <img src={image} title={title} />
              <div className="carousel-content">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          className="carousel-inner"
          style={{ backgroundImage: `url(${data[currIndex].image})` }}
        >
          <button
            className="left"
            data-testid="previous"
            onClick={() => {
              currIndex > 0
                ? setCurIndex(currIndex - 1)
                : setCurIndex(data.length - 1);
            }}
          >
            ⬅️
          </button>
          <div className="center">
            <h2>{data[currIndex].title}</h2>
            <p>{data[currIndex].description}</p>
          </div>
          <button
            className="right"
            data-testid="next"
            onClick={() => {
              currIndex === data.length - 1
                ? setCurIndex(0)
                : setCurIndex(currIndex + 1);
            }}
          >
            ➡️
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
