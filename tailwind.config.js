/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "25px",
		},
		extend: {
			colors: {
				primary: "#043175",
			},
			backgroundImage: {
				hero: "url('/src/img/bg-1.jpg')",
			},
		},
	},
	plugins: [],
};
