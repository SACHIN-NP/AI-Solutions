import { Outlet } from "react-router";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MyChatBot from "./component/chatbot";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <MyChatBot />
    </>
  );
}

export default Layout;
