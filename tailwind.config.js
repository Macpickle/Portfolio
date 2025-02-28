/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			animation: {
				grow: 'grow 1s ease-in-out forwards',
				'fade-in-up': 'fade-in-up 1s ease-in-out forwards',
				'fade-in-right': 'fade-in-right 1s ease-in-out forwards',
				'fade-out-left': 'fade-out-left 1s ease-in-out forwards',
				shimmer: "shimmer 1.5s linear infinite",
				marquee: "marquee 50s linear infinite",
			},
			keyframes: {
				grow: {
					'0%': { transform: 'scale(0.75)' },
					'100%': { transform: 'scale(1)' },
				},
				'fade-in-up': {
					'0%': { opacity: 0, transform: 'translateY(50px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: 0, transform: 'translateX(-50px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				'fade-out-left': {
					'0%': { opacity: 1, transform: 'translateX(0px)' },
					'100%': { opacity: 0, transform: 'translateX(-50px)' },
				},
				shimmer: {
					"0%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},

			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				mono: ['Fira Code', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

