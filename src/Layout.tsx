import { Outlet } from "react-router-dom";
import Header from "./components/Header";

interface LayoutProps {

}

const Layout = () => {
  return (
    <div className="p-0">
        <Header />
        <div className="container">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout;