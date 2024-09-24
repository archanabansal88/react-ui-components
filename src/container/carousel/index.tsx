import Carousel from "../../components/common/carousel/carousel";
import useGetAnimals from "../../hooks/use-get-animals";

const CarouselContainer = () => {
  const { data } = useGetAnimals();
  return (
    <div className="carousel-wrapper">{data && <Carousel data={data} />}</div>
  );
};

export default CarouselContainer;
