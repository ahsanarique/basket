import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const Search = () => {
  const { fakeData, setItems } = useContext(Context);

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    const newList = fakeData.filter((item) =>
      item.item.toLowerCase().startsWith(input)
    );

    setItems(newList);
  };

  return (
    <section className="bg-green-400 mt-10 py-10 rounded-lg flex justify-center mx-4 lg:mx-16">
      <input
        onChange={handleChange}
        className="w-3/4 py-4 rounded-lg focus:outline-none text-center text-lg"
        type="text"
        placeholder="Search available items"
        aria-label="items"
      />
    </section>
  );
};

export default Search;
