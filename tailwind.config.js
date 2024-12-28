module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	  './app/**/*.{js,ts,jsx,tsx}',
	  'node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		  gradient: {
			to: { backgroundPosition: 'var(--bg-size) 0' },
		  },
		  marquee: {
			from: { transform: 'translateX(70%)' },
			to: { transform: 'translateX(-70%)' },
		  },
		  aurora: {
			from: {
			  backgroundPosition: '50% 50%, 50% 50%',
			},
			to: {
			  backgroundPosition: '350% 50%, 350% 50%',
			},
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  gradient: 'gradient 8s linear infinite',
		  marquee: 'marquee 16s linear infinite',
		  aurora: 'aurora 60s linear infinite',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  