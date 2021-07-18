import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faLeaf } from "@fortawesome/free-solid-svg-icons";

const ItemList = () => {
  const { items, basketItem, setBasketItem } = useContext(Context);

  const getItemBg = (id) => {
    if (id % 2 === 0) {
      return "bg-gray-300";
    } else return "bg-gray-100";
  };

  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const groceryIcon = <FontAwesomeIcon icon={faLeaf} color="white" />;

  const handleAdd = (newItem) => {
    if (!basketItem.find((item) => item.id === newItem.id)) {
      setBasketItem((prev) => [...prev, newItem]);
    } else {
      basketItem.filter((item) => item.id === newItem.id)[0].count += 1;

      const newItems = [...basketItem];
      setBasketItem(newItems);
    }
  };

  const handleRemove = (removedItem) => {
    let currentCount = basketItem.filter(
      (item) => item.id === removedItem.id
    )[0].count;

    if (currentCount > 1) {
      basketItem.filter((item) => item.id === removedItem.id)[0].count -= 1;
      const newItems = [...basketItem];
      setBasketItem(newItems);
    }
  };

  return (
    <div className="col-span-6 w-5/6 min-h-lg">
      <div className="my-4 text-center bg-gray-800 rounded-lg py-4 text-2xl text-white">
        <p>{groceryIcon} Groceries</p>
      </div>

      {items.length < 1 && (
        <p className="text-lg text-center">
          No item matches your search. Either the item you are looking for does
          not available or you have given an inaccurate spelling.
        </p>
      )}
      <ul className="w-full min-h-full ">
        {items.map((item) => (
          <li
            key={item.id}
            className={`my-4 ${getItemBg(
              item.id
            )} text-sm md:text-lg flex justify-between`}
          >
            <button
              className="w-full text-left hover:shadow-lg"
              onClick={() => {
                handleAdd(item);
              }}
            >
              <span className="px-2 bg-green-400">{plusIcon}</span> {item.item}
            </button>
            <button
              onClick={() => handleRemove(item)}
              className="px-2 bg-red-400"
            >
              {minusIcon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
