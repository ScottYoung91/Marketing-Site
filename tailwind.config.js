module.exports = {
	purge: { enabled: true, content: ['./*.html'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				accent: '#0cfab7',
				accentLight: '#85fcdb',
				'accent-2': '#e0082d',
				accent2Light: '#ef8396',
			},
			html: {
				'scroll-behavior': 'smooth',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
