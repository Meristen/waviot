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
import Form from "../../components/form/Form";
const EquipmentPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
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
          <div className="card">
            <h3>аква-с</h3>
            <img src={img1} alt="pribor-1" />
            <p>Счётчик воды со встроенным радиомодулем</p>
          </div>
          <div className="card">
            <h3>аква-в</h3>
            <img src={img2} alt="pribor-2" />
            <p>Электронный счётчик воды со встроенным радиомодулем</p>
          </div>
          <div className="card">
            <h3>фобос-1 лайт</h3>
            <img src={img3} alt="pribor-3" />
            <p>Однофазный счётчик электричества с радиомодулем</p>
          </div>
          <div className="card">
            <h3>фобос-1</h3>
            <img src={img4} alt="pribor-4" />
            <p>Однофазный счётчик электричества с радиомодулем</p>
          </div>
          <div className="card">
            <h3>фобос-3</h3>
            <img src={img5} alt="pribor-5" />
            <p>Трёхфазный счётчик электричества с радиомодулем</p>
          </div>
          <div className="card">
            <h3>фобос-3т</h3>
            <img src={img6} alt="pribor-6" />
            <p>
              Трёхфазный трансформаторный счётчик электричества с радиомодулем
            </p>
          </div>
          <div className="card">
            <h3>фобос-1s</h3>
            <img src={img7} alt="pribor-7" />
            <p>Однофазный сплит-счётчик электричества с радиомодулем</p>
          </div>
          <div className="card">
            <h3>фобос-3s</h3>
            <img src={img8} alt="pribor-8" />
            <p>Трёхфазный сплит-счётчик электричества с радиомодулем</p>
          </div>
          <div className="card">
            <h3>сгбу-g6</h3>
            <img src={img9} alt="pribor-9" />
            <p>Счетчик газа со встроенным LPWAN-радиомодулем</p>
          </div>
          <div className="card">
            <h3>manhole-m</h3>
            <img src={img10} alt="pribor-10" />
            <p>Датчик открытия крышки канализационного люка</p>
          </div>
          <div className="card">
            <h3>bt-100</h3>
            <img src={img11} alt="pribor-11" />
            <p>Импульсный радиомодем</p>
          </div>
        </div>
        <div className="equipment__form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default EquipmentPage;
