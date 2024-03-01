import React from "react";
import Routers from "../routes/Routers";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
