import { FC, useEffect } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { listAllImages } from './sliderCustomAction';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';

const SliderCustom: FC = (): JSX.Element => {


  //Redux state
  const {
    slider: { sliderImages },
  }: {
    slider: { sliderImages: string[] }
  }
    = useSelector((state: RootState) => state);



  useEffect(() => {
    listAllImages()

  }, [])


  return (
    <Carousel
      fade
      controls={false}
      interval={4000}
    >
      {sliderImages.map((item, key) => (
        <Carousel.Item  className="container-slider-item" key={key}>
          <img
            className="d-block w-100"
            src={item} alt={"backgroung" + key} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderCustom;