import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import Meassage from "./components/Meassage";
import Information from "./components/Information";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <ImageSection />
    <Meassage />
    <Information />
    <Footer />
  </React.StrictMode>
);
