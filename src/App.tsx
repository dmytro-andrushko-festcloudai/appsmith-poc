import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/login/Login";
import "./App.css";
import Layout from "./pages/components/layout/Layout";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      if (e && e.data && e.data.login) {
        const { email, password } = e.data.login as {
          password?: string;
          email?: string;
        };

        if (email && password) {
          setEmail(email)
          navigate("/home");
        }
      }
    };

    window.addEventListener("message", messageHandler);

    return () => {};
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Layout email={email}/>}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
