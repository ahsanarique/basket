import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faTimes,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const BasketList = () => {
  const { basketItem, setBasketItem } = useContext(Context);

  const getBasketItemBg = (index) => {
    if (index % 2 === 0) {
      return "bg-gray-300";
    } else return "bg-gray-100";
  };

  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} color="#F87171" />;
  const crossIcon = <FontAwesomeIcon icon={faTimes} color="#F87171" />;
  const basketIcon = <FontAwesomeIcon icon={faShoppingBasket} color="white" />;

  const handleDone = (index) => {
    basketItem[index].done = !basketItem[index].done;
    const newItems = [...basketItem];
    setBasketItem(newItems);
  };

  const handleDeleteItem = (removedItem) => {
    basketItem.filter((item) => item.id === removedItem.id)[0].count = 1;

    basketItem.filter((item) => item.id === removedItem.id)[0].done = false;

    setBasketItem(basketItem.filter((item) => item.id !== removedItem.id));
  };

  const fullReset = () => {
    basketItem.map((item) => {
      item.count = 1;
      item.done = false;
      return null;
    });
    setBasketItem([]);
  };

  return (
    <div className="col-span-6 w-5/6 min-h-lg">
      <div className="my-4 text-center bg-gray-800 rounded-lg py-4 text-2xl text-white flex justify-around">
        <p>{basketIcon} Basket</p>
        <button
          onClick={() => fullReset()}
          className="border border-transparent hover:border-red-400 rounded-lg px-2"
        >
          {deleteIcon}
        </button>
      </div>
      {basketItem.length < 1 && (
        <p className="text-lg text-center">No Item Added in Basket</p>
      )}
      <ul className="w-full min-h-full">
        {basketItem.map((item, i) => (
          <li
            key={item.id}
            className={`my-4 ${getBasketItemBg(
              i
            )} hover:shadow text-sm md:text-lg flex justify-between`}
          >
            <button
              onClick={() => {
                handleDone(i);
              }}
              className="w-full text-left hover:shadow-lg"
            >
              <span className="px-2">{crossIcon}</span>

              <span className={item.done ? "line-through" : ""}>
                {item.count}x {item.item}
              </span>
            </button>
            <button
              onClick={() => handleDeleteItem(item)}
              className="px-2 fill-current text-red-400"
            >
              {deleteIcon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketList;
