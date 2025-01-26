import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPrimary from "./pages/CartPrimary";
import DefaultLayout from "./components/layouts/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPrimary />} />
          </Routes>
        </DefaultLayout>
      </div>
    </Router>
  );
}

export default App;
