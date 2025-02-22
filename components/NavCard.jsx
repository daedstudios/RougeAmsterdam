import React from "react";

const NavCard = ({ Text }) => {
  return (
    <div className="row-span-1 bg-black w-full h-full border-t-4 border-[#fff] p-2">
      {Text}
    </div>
  );
};

export default NavCard;
