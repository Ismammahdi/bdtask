import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Development from "./components/Development";
import Victor from "./components/Victor";
import Map from "./components/Map";

import "./App.css";

function App() {
  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Allproducts></Allproducts>} />
        <Route path="/mobile-apps" element={<Banner></Banner>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Development></Development>
      <Victor></Victor>
      <Map></Map>
      <Footer></Footer>
    </>
  );
}

export default App;
