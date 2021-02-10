import * as React from "react";
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

const Layout = ({ children, ...props }) => {
  console.log(props);
  return (
    <div className="relative min-h-screen pb-40 care-conn-page-layout">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
