import React, { useEffect } from "react";
import "./equipment.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/pribor1.png";
import img2 from "../../assets/pribor2.png";
import img3 from "../../assets/pribor3.png";
import img4 from "../../assets/pribor4.png";
import img5 from "../../assets/pribor5.png";
import img6 from "../../assets/pribor6.png";
import img7 from "../../assets/pribor7.png";
import img8 from "../../assets/pribor8.png";
import img9 from "../../assets/pribor9.png";
import img10 from "../../assets/pribor10.png";
import img11 from "../../assets/pribor11.png";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/formComponent/FormComponent";
const cardData = [
  {
    id: "AKBA-C",
    title: "аква-с",
    img: img1,
    description: "Счётчик воды со встроенным радиомодулем",
  },
  {
    id: "AKBA-B",
    title: "аква-в",
    img: img2,
    description: "Электронный счётчик воды со встроенным радиомодулем",
  },
  {
    id: "FOBOS-1 light",
    title: "фобос-1 лайт",
    img: img3,
    description: "Однофазный счётчик электричества с радиомодулем",
  },
  {
    id: "FOBOS-1",
    title: "фобос-1",
    img: img4,
    description: "Однофазный счётчик электричества с радиомодулем",
  },
  {
    id: "FOBOS-3",
    title: "фобос-3",
    img: img5,
    description: "Трёхфазный счётчик электричества с радиомодулем",
  },
  {
    id: "FOBOS-3T",
    title: "фобос-3т",
    img: img6,
    description:
      "Трёхфазный трансформаторный счётчик электричества с радиомодулем",
  },
  {
    id: "FOBOS-1S",
    title: "фобос-1s",
    img: img7,
    description: "Однофазный сплит-счётчик электричества с радиомодулем",
  },
  {
    id: "FOBOS-3s",
    title: "фобос-3s",
    img: img8,
    description: "Трёхфазный сплит-счётчик электричества с радиомодулем",
  },
  {
    id: "SGBU-G6",
    title: "сгбу-g6",
    img: img9,
    description: "Счетчик газа со встроенным LPWAN-радиомодулем",
  },
  {
    id: "MANHOLE-M",
    title: "manhole-m",
    img: img10,
    description: "Датчик открытия крышки канализационного люка",
  },
  {
    id: "BT-100",
    title: "bt-100",
    img: img11,
    description: "Импульсный радиомодем",
  },
];
const EquipmentPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <section className="container">
      <div className="equipment">
        <div className="equipment__title" data-aos="fade-up">
          <h1>Оборудование</h1>
          <p>
            «БишкекПрибор» включает в свой каталог устройства, готовые к
            использованию в проектах по диспетчеризации различных систем и
            «дальнобойной» телеметрии для Интернета Вещей. Вы можете сейчас
            заказать любое устройство из нашего каталога для тестирования и
            лично убедиться в уникальных характеристиках дальности и
            автономноститехнологии «БишкекПрибор».
          </p>
        </div>
        <div className="equipment__cards" data-aos="fade-up">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.id)}
            >
              <h3>{card.title}</h3>
              <img src={card.img} alt={card.title} />
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="equipment__form">
          <FormComponent />
        </div>
      </div>
    </section>
  );
};

export default EquipmentPage;
