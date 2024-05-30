import React from "react";
import "./form.scss";
import Input from "../input/Input";
import Button from "../button/Button";
const Form = () => {
  return (
    <div className="form" data-aos="fade-up">
      <div className="feedback__form">
        <div className="form-buttons">
          <h2>
            Отправьте заявку и наши менеджеры свяжутся с вами, чтобы обсудить
            все детали.
          </h2>
          <Button>Отправить заявку</Button>
        </div>
        <form className="feedback-form">
          <Input type="text" placeholder="Представтесь, пожалуйста" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Телефон" />
          <Input type="text" placeholder="Комментарий" />
          <label className="checkbox">
            <input type="checkbox" />
            <span>
              Я даю согласие на обработку моих
              <a href="https://waviot.kz/policy/"> персональных данных.</a>
            </span>
          </label>
        </form>
      </div>
      {/* <div className="form-buttons">
        <Button>Отправить заявку</Button>
      </div> */}
    </div>
  );
};

export default Form;
