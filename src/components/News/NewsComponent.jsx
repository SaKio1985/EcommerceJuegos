import React from "react";

const NewsItem = ({ title, description, image }) => (
	<div className="bg-white shadow-md rounded-lg overflow-hidden">
		<img src={image} alt={title} className="w-full h-40 object-cover" />
		<div className="p-4">
			<h2 className="font-bold text-xl mb-2">{title}</h2>
			<p className="text-gray-700 text-base">{description}</p>
		</div>
	</div>
);

export default function NewsComponent() {
	const newsItems = [
		{
			id: 1,
			title: "After Us",
			description:
				"AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve [...]",
			image: "/path/to/after-us-image.jpg",
		},
		{
			id: 2,
			title: "II HOBBITJORNADAS",
			description:
				"II HOBBIT JORNADAS El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero [...]",
			image: "/path/to/hobbit-image.jpg",
		},
		// Add more news items here
	];

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold my-8">NOTICIAS</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{newsItems.map((item) => (
					<NewsItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
