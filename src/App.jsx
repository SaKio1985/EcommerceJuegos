import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavComponent from "./components/NavComponent";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import NewsComponent from "./components/News/NewsComponent";
import SobrenosotrosComponent from "./components/Sobrenosotros/SobrenosotrosComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import SingleComponent from "./components/SingleProduct/SingleComponent";
import CartComponent from "./components/CartComponent";
import { useTheme } from "./components/UseTheme";

function App() {
	const [theme, toggleTheme] = useTheme();
	const location = useLocation();

	// Rutas donde NO queremos mostrar el banner
	const routesWithoutBanner = ["/news", "/sobrenosotros", "/contact", "/cart"];

	// Verificar si es una página de producto individual (boardgame/:id)
	const isProductPage = location.pathname.startsWith("/boardgame/");

	const shouldShowBanner =
		!routesWithoutBanner.includes(location.pathname) && !isProductPage;

	return (
		<div className={`App ${theme}`}>
			<ProductProvider>
				<CartProvider>
					<NavComponent />
					{shouldShowBanner && <Banner />}
					<main className={`main-content ${theme}`}>
						<Routes>
							<Route path="/" element={<HomeComponent />} />
							<Route path="/news" element={<NewsComponent />} />
							<Route
								path="/sobrenosotros"
								element={<SobrenosotrosComponent />}
							/>
							<Route path="/contact" element={<ContactComponent />} />
							<Route path="/boardgame/:id" element={<SingleComponent />} />
							<Route path="/cart" element={<CartComponent />} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</main>
					<Footer />
				</CartProvider>
			</ProductProvider>
		</div>
	);
}

export default App;
