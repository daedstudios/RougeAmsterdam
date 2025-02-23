import React from "react";

const NavCard = ({ Text }) => {
  return (
    <div className="row-span-1 col-span-1 w-full h-full border-t-4 border-[#fff] p-2 text-[2rem]">
      {Text}
    </div>
  );
};

export default NavCard;
