import React from "react";

const CustomButton = ({ icon, title, imageAlt }) => {
  return (
    <div className="xs:w-[8rem] mx-auto flex w-[7rem] transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-white py-[2%] shadow-md transition duration-300 ease-in-out hover:scale-105">
      <div className="hover:shake">
        <img className="h-4 w-4" src={icon} alt={imageAlt} />
      </div>
      <div>
        <div className="xs:text-sm font-sans text-xs font-medium uppercase text-[#686868]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default CustomButton;
