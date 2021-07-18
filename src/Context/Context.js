import React, { useState, useEffect } from "react";
import fakeData from "../fakeData/fakeData";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [basketItem, setBasketItem] = useState([]);
  const [basketItemCount, setBasketItemCount] = useState(1);

  useEffect(() => {
    setItems(fakeData);
  }, []);

  return (
    <Context.Provider
      value={{
        fakeData,
        items,
        setItems,
        basketItem,
        basketItemCount,
        setBasketItemCount,
        setBasketItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
