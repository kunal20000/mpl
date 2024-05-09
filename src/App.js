import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import MidContent from "./component/main/MidContent";
import Footer from "./component/footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <MidContent />
      <Footer/>
    </div>
  );
}

export default App;
