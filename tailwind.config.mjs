/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				night: 'hsl(300, 14%, 9%)',
				isabel: 'hsl(15, 29%, 95%)',
				gray: 'hsl(210, 9%, 43%)',
				jasper: 'hsl(9, 68%, 58%)',
				trophy: 'hsl(37, 72%, 54%)'
			},
			fontSize: {
				100: 'clamp(0.7025rem, 0.6721rem + 0.1522vw, 0.79rem)',
				200: 'clamp(0.79rem, 0.7557rem + 0.1717vw, 0.8888rem)',
				300: 'clamp(0.8888rem, 0.8501rem + 0.1935vw, 1rem)',
				400: 'clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem)',
				500: 'clamp(1.125rem, 1.0761rem + 0.2446vw, 1.2656rem)',
				600: 'clamp(1.2656rem, 1.2106rem + 0.275vw, 1.4238rem)',
				700: 'clamp(1.4238rem, 1.3618rem + 0.3098vw, 1.6019rem)',
				800: 'clamp(1.6019rem, 1.5323rem + 0.3478vw, 1.8019rem)',
				900: 'clamp(1.8019rem, 1.7234rem + 0.3924vw, 2.0275rem)',
				1000: 'clamp(2.0275rem, 1.9395rem + 0.4402vw, 2.2806rem)',
				1100: 'clamp(2.2806rem, 2.1815rem + 0.4957vw, 2.5656rem)',
				1200: 'clamp(2.5656rem, 2.4541rem + 0.5576vw, 2.8863rem)',
				1300: 'clamp(2.8863rem, 2.7606rem + 0.6283vw, 3.2475rem)',
				1400: 'clamp(3.2475rem, 3.1064rem + 0.7054vw, 3.6531rem)',
			},
			fontWeight: {
				100: 100,
				200: 200,
				300: 300,
				400: 400,
				500: 500,
				600: 600,
				700: 700,
				800: 800,
				900: 900,
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant, addBase, theme }) {
			// base
			addBase({
				h1: {
					fontSize: theme('fontSize.1400'),
					fontWeight: 700,
					lineHeight: 1,
				},
				h2: {
					fontSize: theme('fontSize.1200'),
					fontWeight: 700,
					lineHeight: 1,
				},
				h3: {
					fontSize: theme('fontSize.900'),
					fontWeight: 700,
					lineHeight: 1.125,
				},
				h4: {
					fontSize: theme('fontSize.500'),
					fontWeight: 700,
					lineHeight: 1.25,
				},
			});
			// variants
			addVariant('scroll', ':merge(.scroll) &');
			addVariant('is-checked', ':merge(:checked +) &');
			addVariant('is-active', ':merge(.active >) &');
			addVariant('toggle', '&:merge(.toggle)');
			addVariant('em', ({ container }) => {
				container.walkRules((rule) => {
					rule.selector = `.em\\:${rule.selector.slice(1)}`;
					rule.walkDecls((decl) => {
						decl.value = decl.value.replace('rem', 'em');
					});
				});
			});
		}),
	],
}
