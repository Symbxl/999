import { Outlet } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";

const Root = () => {
  return (<>
    <MenuNavigation />
    <Outlet />
  </>);
}

export default Root;