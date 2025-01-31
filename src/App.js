import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPrimary from "./pages/CartPrimary";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import ToastNoti from "./components/ToastNoti";
function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const showToastMessage = (message, variant = "success") => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  return (
    <Router>
      <div className="App">
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPrimary />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/auth"
              element={<Auth showToast={showToastMessage} />}
            />
          </Routes>
        </DefaultLayout>
        <ToastNoti
          show={showToast}
          message={toastMessage}
          onClose={() => setShowToast(false)}
          variant={toastVariant}
        />
      </div>
    </Router>
  );
}

export default App;
