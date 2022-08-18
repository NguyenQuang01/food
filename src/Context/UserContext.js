import { useState, createContext, useEffect } from "react";
import axios from "axios";

const Context = createContext();

// let listCart = [];
export function ContextProvider(props) {
  const [start, setstart] = useState();
  const [dataProduct, setdataProduct] = useState("");
  const [tkmk, settkmk] = useState();
  useEffect(() => {
    axios
      .get("https://62cfbda11cc14f8c087c4451.mockapi.io/api/product")
      .then(function (response) {
        setdataProduct(response.data);
        setstart(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [cartData, setcartData] = useState([]);
  return (
    <Context.Provider
      value={{
        cartData,
        setcartData,
        // listCart,
        dataProduct,
        tkmk,
        settkmk,
        setdataProduct,
        start,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
