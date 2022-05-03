import React from "react";
import { Link } from "react-router-dom";
import { Products } from "./Products";
import MobileOperator from "./MobileOpertor";
// import ProductDetails from "./ProductDetails";
function Home() {
  // let ProductNo = Products.map((Data) => (
  //   <ul key={Data.productno}>
  //     <Link to="/displayproduct">
  //       <li>{Data.productno}</li>
  //     </Link>
  //   </ul>
  // ));

  // let person = [
  //   { name: "steve", age: 10 },
  //   { name: "Acchu", age: 20 },
  // ];
  // for (let i = 0; i < person.length; i++) {
  //   console.log(person[i].name);
  // }
  return (
    <>
      <div>
        {/* <h1>Product Component</h1>
        <h1>ProductNo</h1>
        {ProductNo} */}
      </div>
      <h1>Welcome To Home page</h1>
      {/* <MobileOperator /> */}
    </>
  );
}

export default Home;
