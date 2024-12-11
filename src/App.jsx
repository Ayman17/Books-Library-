import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Books from "./components/Books";
import People from "./components/People";
import Register from "./components/Register";
import NotFound from "./components/Not Found";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      saveDataUser();
    }
  }, []);

  function saveDataUser() {
    let encodedToken = localStorage.getItem("Token");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem("Token");
    setUserData(null);
    navigate("/home");
  }

  function ProtectedRoute(props) {
    if (localStorage.getItem("Token") == null) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  }

  return (
    <>
      <NavBar userData={userData} logout={logOut} />
      <div className="container pt-4">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route
            path="people"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login saveDataUser={saveDataUser} />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
