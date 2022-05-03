import "./App.css";
import Welcome from "./Welcome";
import Greet from "./Greet";
import TryConditionalRendering from "./ConditionalRendering";
import ArrayListRender from "./ArrayListRender";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Nav from "./Nav";
import DisplayProduct from "./DisplayProduct";
import MobileOpertor from "./MobileOpertor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import LabelCount from "./LabelCount";
import FormControl from "./FormControl";
import UserForm from "./UserForm";
import Online from "./Online";
function App() {
  return (
    <>
      <h1>🚀Welcome to react world🚀</h1>
      <Online />
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/DisplayProduct" element={<DisplayProduct />}></Route>
          </Routes>
        </Router>
      </div>
      {/* <ButtonComponent /> */}
      {/* <LabelCount /> */}
      {/* <FormControl /> */}
      {/* <UserForm /> */}
    </>
  );
}

export default App;
