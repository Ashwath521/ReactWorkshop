import React, { Component } from "react";
import { Link } from "react-router-dom";

// class Nav extends Component {
//   render() {
//     return (
//       <nav className="navStyle">
//         <ul className="nav-link ">
//           <Link to="home">
//             <li>Product</li>
//           </Link>
//           <Link to="contact">
//             <li>Contact</li>
//           </Link>
//           <Link to="shop">
//             <li>About</li>
//           </Link>
//           <Link to="shop1">
//             <li>Shop</li>
//           </Link>
//         </ul>
//       </nav>
//     );
//   }
// }
class Nav extends Component {
  render() {
    return (
      <nav className="navStyle">
        <ul className="nav-link ">
          <Link to="home">
            <li>Home</li>
          </Link>
          <Link to="contact">
            <li>Product</li>
          </Link>
          <Link to="shop">
            <li>Create Account</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Nav;
