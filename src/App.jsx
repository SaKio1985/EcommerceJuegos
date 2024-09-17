import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavComponent from "./components/NavComponent";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import JuegosComponent from "./components/Juegos/JuegosComponent";
import NewsComponent from "./components/News/NewsComponent";
import SobrenosotrosComponent from "./components/Sobrenosotros/SobrenosotrosComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import ShopComponent from "./components/Shop/ShopComponent";
import PortuguesComponent from "./components/Portugues/PortuguesComponent";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import SingleComponent from "./components/SingleProduct/SingleComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <NavComponent />
            <Banner />
            <Routes>
              <Route exact path="/" element={<HomeComponent />} />
              <Route exact path="/juegos" element={<JuegosComponent />} />
              <Route exact path="/news" element={<NewsComponent />} />
              <Route
                exact
                path="/sobrenosotros"
                element={<SobrenosotrosComponent />}
              />
              <Route exact path="/contact" element={<ContactComponent />} />
              <Route exact path="/tienda" element={<ShopComponent />} />
              <Route exact path="/portugues" element={<PortuguesComponent />} />
              <Route
                exact
                path="/boardgame/:id"
                element={<SingleComponent />}
              />
            </Routes>

            <Footer />
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
