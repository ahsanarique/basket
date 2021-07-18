import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../Context/Context";

const Header = () => {
  const { basketItem } = useContext(Context);

  const basketIcon = (
    <FontAwesomeIcon icon={faShoppingBasket} size="7x" color="white" />
  );

  return (
    <header className="flex items-center justify-center text-center bg-gray-800 py-10">
      <div className="relative">
        {basketIcon}
        <div className="absolute bg-green-400 top-6 right-11 text-white w-10 h-10 rounded-lg text-3xl">
          {basketItem.length}
        </div>
      </div>
    </header>
  );
};

export default Header;
