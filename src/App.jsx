import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Books from "./components/Books";
import People from "./components/People";
import Register from "./components/Register";
import NotFound from "./components/Not Found";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="people" element={<People />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
