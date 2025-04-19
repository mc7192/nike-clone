import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import { Footer } from "./sections";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
};

export default App;
