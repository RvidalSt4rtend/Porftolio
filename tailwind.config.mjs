/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			height: {
				'128': '32rem',  
				'144': '36rem',  
				'160': '40rem',
				'180':'45rem'  
			  }
		},
	},
}

