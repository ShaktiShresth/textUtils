import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import AlertBox from "./components/Alert";
import { Route, Routes } from "react-router-dom";

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

  function removeBodyClasses() {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Light mode is enabled.", "success");
    }
  };

  return (
    <>
      <MyNavbar
        title="textUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <AlertBox alert={alert} />
      <div className="container my-4">
        {/* ROUTES */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter"
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
