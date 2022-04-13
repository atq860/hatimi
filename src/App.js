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
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

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
          <Route path="/register" element={<RegisterScreen />} exact/>
          <Route path="/login" element={<LoginScreen />} exact/>
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
