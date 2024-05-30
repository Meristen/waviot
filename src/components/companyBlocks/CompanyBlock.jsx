import React from "react";

import "./companyBlocks.scss";

const CompanyBlock = ({ title, image, colorClass, titleColor }) => {
  return (
    <div className="company">
      <div className="company__card">
        <div className="company__card-img">
          <img src={image} alt="company" />
        </div>
        <div className={`company__card-color ${colorClass}`}></div>
        <h1 style={{ color: titleColor }} className="company__card-title">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CompanyBlock;
