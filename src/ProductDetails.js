import React from "react";
import { Products } from "./Products";
function ProductDetails() {
  let DisplayProducts = Products.map((Item) => (
    <ul className="ul-main" key={Item.productno}>
      <li>{Item.name}</li>
      <li>{Item.manufacture}</li>
      <li>{Item.price}</li>
    </ul>
  ));
  // let DisplayProducts = Products.map((Item) => {
  //   if (Item.productno === 111) {
  //     return (
  //       <ul className="ul-main" key={Item.productno}>
  //         <li>{Item.name}</li>
  //         <li>{Item.manufacture}</li>
  //         <li>{Item.price}</li>
  //       </ul>
  //     );
  //   }
  //   if (Item.productno === 112) {
  //     return (
  //       <ul className="ul-main" key={Item.productno}>
  //         <li>{Item.name}</li>
  //         <li>{Item.manufacture}</li>
  //         <li>{Item.price}</li>
  //       </ul>
  //     );
  //   }
  // });

  return <div>{DisplayProducts}</div>;
}

export default ProductDetails;
