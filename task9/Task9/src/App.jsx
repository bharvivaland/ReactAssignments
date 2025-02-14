// 
import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Person name="Neeti" age={22} />
      <Person name="Hani" age={20} />
      <Product name="HandBag" price="$1200" />
      <Product name="Watch" price="$199" />
    </div>
  );
};

export default App;
