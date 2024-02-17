import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop.js";
import Header from "./components/header/header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/footer.js";
import Skills from "./pages/Skills.js";
import Contacts from "./pages/Contacts.js";
import Projects from "./pages/Projects.js";
import Project from "./pages/Project";
import { BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
