import React from "react";
import logo from "../../../../assets/img/MIN-OP1.png";
import "./heading.css";

const Heading = () => {
  return (
    <div className="heading-container">
      <img src={logo} className="logo" alt="Logo" />
      <h1 className="title-heading">Bầu cua</h1>
    </div>
  );
};

export default Heading;
