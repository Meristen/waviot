import React, { useRef } from "react";
import Slider from "react-slick";
import CompanyBlock from "../../components/companyBlocks/CompanyBlock";
import "./company.scss";
import image1 from "../../assets/image1.jpg";
import image5 from "../../assets/image-5.jpg";
import image4 from "../../assets/image4.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const CompanyPage = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="container" onWheel={handleWheel}>
      <Slider ref={sliderRef} {...settings}>
        <CompanyBlock
          titleColor="white"
          colorClass="color-one"
          image={image1}
          title="БишкекПРИБОР - компания комплексных цифровых решений."
        />
        <CompanyBlock
          titleColor="darkRed"
          colorClass="color-two"
          image={image5}
          title="С 2017 года мы разрабатываем и внедряем новые технологии «интернета вещей» в различных сферах экономики."
        />
        <CompanyBlock
          colorClass="color-three"
          image={image4}
          title="Сегодня беспроводная сеть LPWAN обеспечивает бесперебойную передачу данных по всей территории Кыргызской Республики."
        />
        <CompanyBlock
          colorClass="color-four"
          image={image2}
          title="Сотни тысяч устройств WAVIOT ежедневно передают миллионы сообщений в единый ситуационный Центр управления ЖКХ."
        />
        <CompanyBlock
          titleColor="darkRed"
          colorClass="color-five"
          image={image3}
          title="Опираясь на собственные разработанные модели и алгоритмы, эксперты и аналитики БишкекПрибор подготавливают рекомендации для эффективного управления отдельными объектами и целыми городами."
        />
      </Slider>
    </section>
  );
};

export default CompanyPage;
