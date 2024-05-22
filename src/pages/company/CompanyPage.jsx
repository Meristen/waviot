import CompanyBlock from "../../components/companyBlocks/CompanyBlock";
import "./company.scss";
import React from "react";
import image1 from "../../assets/image1.jpg";
import image5 from "../../assets/image-5.jpg";
import image4 from "../../assets/image4.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import Slider from "react-slick";
const CompanyPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <section className="container">
      <Slider {...settings}>
        <CompanyBlock
          titleColor="white"
          colorClass="color-one"
          image={image1}
          title="Вивиот Азия - компания комплексных цифровых решений."
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
          title="Сегодня беспроводная сеть LPWAN обеспечивает бесперебойную передачу данных по всей территории Республики Казахстан."
        />
        <CompanyBlock
          colorClass="color-four"
          image={image2}
          title="Сотни тысяч устройств WAVIOT ежедневно передаю миллионы сообщений в единый ситуационный Центр управления ЖКХ."
        />
        <CompanyBlock
          titleColor="darkRed"
          colorClass="color-five"
          image={image3}
          title=" Опираясь на собственные разработанные модели и алгоритмы, эксперты и ;аналитики WAVIOT подготавливают рекомендации для эффективного управления отдельными объектами и целыми городами.                    "
        />
      </Slider>
    </section>
  );
};

export default CompanyPage;
