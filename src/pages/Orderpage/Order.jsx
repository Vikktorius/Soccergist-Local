import React from "react";
import "./Order.css";

import Header from "../../components/homepage/header/Header";
import Mycartnavbar from "../../components/mycartpage/mycartnavbar/Mycartnavbar";
import Itemcard from "../../components/orderpage/itemcard/Itemcard";
import Orderfooter from "../../components/orderpage/orderfooter/Orderfooter";
const Order = () => {
  return (
    <div className="order-page">
      <Header />
      <Mycartnavbar />
      <Itemcard />
      <Orderfooter />
    </div>
  );
};

export default Order;
