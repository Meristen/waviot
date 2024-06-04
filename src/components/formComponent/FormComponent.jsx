import React, { useState } from "react";
import "./formComponent.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
const FormComponent = ({ cardId }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "-",
    mobile: "",
    email: "",
    company: "",
    description: "",
    leadsource: "Через поиск - m2m.kg",
    cardId: cardId,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Updated formData:", formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "firstname",
      "mobile",
      "email",
      "company",
      "description",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Поле ${field} обязательно для заполнения`);
        return;
      }
    }
    console.log("Form data to be submitted:", formData);
    const formElement = document.getElementById("__vtigerWebForm");
    formElement.submit();
    navigate("/equipment");
  };

  return (
    <div className="formComponent">
      <h3>
        Отправьте заявку и наши менеджеры свяжутся с вами, чтобы обсудить все
        детали.
      </h3>
      <form
        id="__vtigerWebForm"
        name="m2m.kg"
        action="https://vtiger.crm.kg/modules/Webforms/capture.php"
        method="post"
        acceptCharset="utf-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="__vtrftk"
          value="sid:849451ba6957cca3e1e69a526859b8d4d26babe8,1717221827"
        />
        <input
          type="hidden"
          name="publicid"
          value="fe5bd7134852ad488f2ff3c9196a8ea7"
        />
        <input type="hidden" name="urlencodeenable" value="1" />
        <input type="hidden" name="name" value="m2m.kg" />
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstname">Имя*</label>
              </td>
              <td>
                <input
                  placeholder="Имя"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="hidden" name="lastname" value="-" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobile">Моб.*</label>
              </td>
              <td>
                <input
                  placeholder="Мобильный телефон"
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email*</label>
              </td>
              <td>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="company">Организация*</label>
              </td>
              <td>
                <input
                  placeholder="Организация"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Описание*</label>
              </td>
              <td>
                <input
                  placeholder="Описание"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="hidden" name="cf_1326" />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  name="leadsource"
                  value={formData.leadsource}
                  onChange={handleChange}
                  hidden
                >
                  <option value="Через поиск - m2m.kg" selected>
                    Через поиск - m2m.kg
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
          {/* <Button type="submit" value="Submit">
            Отправить заявку
          </Button> */}
        </table>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormComponent;
