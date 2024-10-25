import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavComponent from "./components/NavComponent";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

	return (
		<div className={`App ${theme}`}>
			<BrowserRouter>
				<ProductProvider>
					<CartProvider>
						<NavComponent />
						<Banner />
						<main className={`main-content ${theme}`}>
							<Routes>
								<Route exact path="/" element={<HomeComponent />} />
								<Route exact path="/news" element={<NewsComponent />} />
								<Route
									exact
									path="/sobrenosotros"
									element={<SobrenosotrosComponent />}
								/>
								<Route exact path="/contact" element={<ContactComponent />} />
								<Route
									exact
									path="/boardgame/:id"
									element={<SingleComponent />}
								/>
								<Route exact path="/cart" element={<CartComponent />} />
							</Routes>
						</main>
						<Footer />
					</CartProvider>
				</ProductProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
