import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import GetById from "./Components/GetById";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";

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
