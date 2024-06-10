// import React, { useEffect, useState } from "react";
// import Input from "../input/Input";
// import Button from "../button/Button";
// import "./formComponent.scss";

// const FormComponent = ({ cardId }) => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "-",
//     mobile: "",
//     email: "",
//     company: "",
//     description: cardId,
//     leadsource: "Через поиск - m2m.kg",
//     urlPage: window.location,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     console.log(formData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requiredFields = [
//       "firstname",
//       "mobile",
//       "email",
//       "company",
//       "description",
//       "urlPage",
//     ];
//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         alert(`Поле ${field} обязательно для заполнения`);
//         return;
//       }
//     }
//     document.getElementById("__vtigerWebForm").submit();
//   };

//   return (
//     <div className="formComp">
//       <h3>
//         Отправьте заявку и наши менеджеры свяжутся с вами, чтобы обсудить все
//         детали.
//       </h3>
//       <form
//         id="__vtigerWebForm"
//         name="m2m.kg"
//         action="https://vtiger.crm.kg/modules/Webforms/capture.php"
//         method="post"
//         acceptCharset="utf-8"
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <Input
//           type="hidden"
//           name="__vtrftk"
//           value="sid:849451ba6957cca3e1e69a526859b8d4d26babe8,1717221827"
//         />
//         <Input
//           type="hidden"
//           name="publicid"
//           value="fe5bd7134852ad488f2ff3c9196a8ea7"
//         />
//         <Input type="hidden" name="urlencodeenable" value="1" />

//         <Input type="hidden" name="name" value="m2m.kg" />
//         <Input type="hidden" name="lastname" value="-" required />
//         <Input type="hidden" name="cf_1326" value={formData.urlPage} />
//         <Input type="hidden" name="leadsource" value={formData.leadsource} />

//         <div>
//           <label htmlFor="firstname">Имя*</label>
//           <Input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="mobile">Моб.*</label>
//           <Input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email*</label>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="company">Организация*</label>
//           <Input
//             type="text"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="description">Описание*</label>
//           <Input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <Button type="submit">отправить заявку</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormComponent;

import React, { useState } from "react";
import axios from "axios"; // Импортируйте axios
import Input from "../input/Input";
import Button from "../button/Button";
import "./formComponent.scss";

const FormComponent = ({ cardId }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "-",
    mobile: "",
    email: "",
    company: "",
    description: cardId,
    leadsource: "Через поиск - m2m.kg",
    urlPage: window.location.href,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstname",
      "mobile",
      "email",
      "company",
      "description",
      "urlPage",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Поле ${field} обязательно для заполнения`);
        return;
      }
    }

    try {
      const response = await axios.post(
        "https://vtiger.crm.kg/modules/Webforms/capture.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Форма успешно отправлена!");
      } else {
        alert("Ошибка при отправке формы.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова."
      );
    }
  };

  return (
    <div className="formComp">
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
        <Input
          type="hidden"
          name="__vtrftk"
          value="sid:849451ba6957cca3e1e69a526859b8d4d26babe8,1717221827"
        />
        <Input
          type="hidden"
          name="publicid"
          value="fe5bd7134852ad488f2ff3c9196a8ea7"
        />
        <Input type="hidden" name="urlencodeenable" value="1" />

        <Input type="hidden" name="name" value="m2m.kg" />
        <Input type="hidden" name="lastname" value="-" required />
        <Input type="hidden" name="cf_1326" value={formData.urlPage} />
        <Input type="hidden" name="leadsource" value={formData.leadsource} />

        <div>
          <label htmlFor="firstname">Имя*</label>
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobile">Моб.*</label>
          <Input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="company">Организация*</label>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Описание*</label>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Button type="submit">отправить заявку</Button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
