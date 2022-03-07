import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conversations from "./components/conversations/Conversations";
import Conversation from "./components/conversations/Conversation";
import Dropdowns from "./components/Dropdowns";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import About from "./screens/About";
import MessengerScreen from "./screens/messenger/MessengerScreen";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ background: "#F5F5F5" }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Dropdowns />
                <Product />
              </>
            }
          />
          <Route path="/messenger" element={<MessengerScreen />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/conversations" element={<Conversation />} exact/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// <div style={{ background: "#F5F5F5" }}>
//   <Header />
//   <Dropdowns />
//   <Product />
//   <Footer />
// </div>
