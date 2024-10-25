import React, { useState, useEffect } from "react";

const images = [
	"https://www.malditogames.com/wp-content/uploads/banner-septima-1200x396.jpg",
	"https://www.malditogames.com/wp-content/uploads/2024/08/tichu-banner-web-1200x396.jpg",
	"https://www.malditogames.com/wp-content/uploads/dulcecaos-banner-web-1200x396.jpg",
	"https://www.malditogames.com/wp-content/uploads/valle-eternindad-banner-1200x396.jpg",
	"https://www.malditogames.com/wp-content/uploads/apiario-banner-web-1200x396.jpg",
	"https://www.malditogames.com/wp-content/uploads/oscuridadasfix-banner-1200x396.jpg",
];

function Banner() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 10000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="relative w-full overflow-hidden">
			<img
				src={images[currentImageIndex]}
				alt={`banner-${currentImageIndex + 1}`}
				className="w-full h-auto object-cover"
			/>
		</section>
	);
}

export default Banner;
