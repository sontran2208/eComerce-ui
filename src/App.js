import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPrimary from "./pages/CartPrimary";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
function App() {
  return (
    <Router>
      <div className="App">
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPrimary />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </DefaultLayout>
      </div>
    </Router>
  );
}

export default App;
