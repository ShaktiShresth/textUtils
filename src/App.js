import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import AlertBox from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
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

  return (
    <>
      <MyNavbar title="textUtils" aboutText="About" />
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
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
