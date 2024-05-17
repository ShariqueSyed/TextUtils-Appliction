import React, { useState } from "react";
import "./App.css";
// import About from "./components/about.js";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* <Routes> */}
        {/* <Route
              exact
              path="/" */}
        {/* // element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Your text to analyze"
          mode={mode}
        />
        {/* } */}
        {/* > */}

        {/* </Route> */}
        {/* <Route exact path="/about" element={<About />}></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
