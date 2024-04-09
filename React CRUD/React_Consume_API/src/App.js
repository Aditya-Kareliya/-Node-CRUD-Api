import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Componants/Layout";
import Home from "./Componants/Home";
import GetById from "./Componants/GetbyId";
import About from "./Componants/About";
import Contact from "./Componants/Contact";
import Profile from "./Componants/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<GetById />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
