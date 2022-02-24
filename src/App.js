import React from "react";
import Dropdowns from "./components/Dropdowns";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div style={{ background: "#F5F5F5" }}>
      <Header />
      <Dropdowns />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
