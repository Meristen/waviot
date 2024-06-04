import React from "react";
import { useParams } from "react-router-dom";
import "./cardView.scss";
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
import FormComponent from "../../components/formComponent/FormComponent";
const cardDetails = {
  "AKBA-C": {
    img: img1,
    description: "Счётчик воды со встроенным радиомодулем",
  },
  "AKBA-B": {
    img: img2,
    description: "Электронный счётчик воды со встроенным радиомодулем",
  },
  "FOBOS-1 light": {
    img: img3,
    description: "Однофазный счётчик электричества с радиомодулем",
  },
  "FOBOS-1": {
    img: img4,
    description: "Однофазный счётчик электричества с радиомодулем",
  },
  "FOBOS-3": {
    img: img5,
    description: "Трёхфазный счётчик электричества с радиомодулем",
  },
  "FOBOS-3T": {
    img: img6,
    description:
      "Трёхфазный трансформаторный счётчик электричества с радиомодулем",
  },
  "FOBOS-1S": {
    img: img7,
    description: "Однофазный сплит-счётчик электричества с радиомодулем",
  },
  "FOBOS-3s": {
    img: img8,
    description: "Трёхфазный сплит-счётчик электричества с радиомодулем",
  },
  "SGBU-G6": {
    img: img9,
    description: "Счетчик газа со встроенным LPWAN-радиомодулем",
  },
  "MANHOLE-M": {
    img: img10,
    description: "Датчик открытия крышки канализационного люка",
  },
  "BT-100": { img: img11, description: "Импульсный радиомодем" },
};

const CardViewPage = () => {
  const { cardId } = useParams();
  const card = cardDetails[cardId];

  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-view">
          <h1>{cardId}</h1>
          <img src={card.img} alt={cardId} />
          <p>{card.description}</p>
        </div>
        {/* <Form /> */}
        <FormComponent cardId={cardId} />
      </div>
    </div>
  );
};

export default CardViewPage;
