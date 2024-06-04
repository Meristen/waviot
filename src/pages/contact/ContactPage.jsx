import React, { useEffect } from "react";
import "./contact.scss";
import iconTelegram from "../../assets/icon-telegram.svg";
import Form from "../../components/form/Form";
import iconWhatsup from "../../assets/icon-whatsapp.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import FormComponent from "../../components/formComponent/FormComponent";
const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="container">
      <div className="contact" data-aos="fade-up">
        <h1>Контакты</h1>
        <p>
          Мы открыты к сотрудничеству,
          <br /> свяжитесь с нами!
        </p>
        <address>
          ОсОО “БишкекПрибор”, ИНН 02502201010175 <br /> Кыргызстан, город
          Бишкек, <br />
          11 мкр., 14\4, 3 этаж
        </address>
        <div className="contact__list">
          <a href="tel:+996550505071">+996550505071</a>

          <a href="mailto:sales@m2m.kg">sales@m2m.kg</a>
        </div>
        {/* <div className="contact__support">
          <h3>Техподдержка</h3>
          <ul>
            <li>
              <a href="tel:+996550505071">+996550505071</a>
            </li>
            <li>
              <a href="">
                <img src={iconTelegram} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={iconWhatsup} alt="telegram" />
              </a>
            </li>
          </ul>
        </div> */}
        {/* <Form /> */}
        <FormComponent />
      </div>
    </section>
  );
};

export default ContactPage;
