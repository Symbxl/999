import { Outlet } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
import Footer from "./Footer";
import Socials from "./Socials";

const Root = () => {
  return (<>
    <MenuNavigation />
    <Outlet />
    <Footer />
    <Socials />
  </>);
}

export default Root;