import { Outlet } from "react-router-dom";
import Footer from "../SharedPages/Footer/Footer";
import NavBar from "../SharedPages/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;