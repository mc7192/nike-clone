import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
