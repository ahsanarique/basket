import React from "react";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import ItemList from "./Components/ItemList/ItemList";
import BasketList from "./Components/BasketList/BasketList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Search />
        <section className="grid grid-cols-12 gap-2 mx-4 lg:mx-16 mt-5">
          <ItemList />
          <BasketList />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
