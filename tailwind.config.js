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
		// ... existing configurations ...
  
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' }
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' }
		  },
		  gradient: {
			to: { backgroundPosition: 'var(--bg-size) 0' }
		  },
		  // Add the new marquee keyframe
		  marquee: {
			'from': { transform: 'translateX(70%)' },
			'to': { transform: 'translateX(-70%)' }
		  }
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  gradient: 'gradient 8s linear infinite',
		  // Add the new marquee animation
		  'marquee': 'marquee 16s linear infinite'
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };