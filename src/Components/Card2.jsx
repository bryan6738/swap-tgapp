import React from "react";

const Card2 = (props) => {
  const { id, title, img, text1, text2 } = props;
  return (
    <div
      className="mx-1 mt-4 bg-[#7ECEE8] py-4 px-2 rounded-2xl"
      style={{ height: "auto" }}
    >
      <div className="flex">
        <div className="w-1/4 flex items-center justify-start">
          <img src={img} alt={title} className="w-32 h-32" />
        </div>
        <div className="w-3/4 flex flex-col">
          <h3
            className="text-[#082F77] text-2xl font-extrabold mb-4 montserrat-font"
            style={{
              paddingLeft: "13px",
              letterSpacing: "0.05em",
              overflowWrap: "break-word",
            }}
          >
            {title}
          </h3>
          <div style={{ paddingLeft: "13px" }}>
            <p className="text-white text-xl font-bold mb-2">{text1}</p>
            <p className="text-[#082F77] text-sm">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
