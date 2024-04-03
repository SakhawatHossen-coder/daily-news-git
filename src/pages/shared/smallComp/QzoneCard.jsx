import React from "react";
import QzoneImg1 from "../../../assets/qZone1.png";
import QzoneImg2 from "../../../assets/qZone2.png";
import QzoneImg3 from "../../../assets/qZone3.png";
const QzoneCard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Q ZONE</h2>
      <img src={QzoneImg1} alt="" />
      <img src={QzoneImg2} alt="" />
      <img src={QzoneImg3} alt="" />
    </div>
  );
};

export default QzoneCard;
