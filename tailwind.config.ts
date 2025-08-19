import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'manrope': ['Manrope', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif'],
				'heading': ['Poppins', 'Manrope', 'sans-serif'],
				'body': ['Inter', 'DM Sans', 'sans-serif'],
			},
			colors: {
				'skoolife': {
					'yellow': 'hsl(var(--skoolife-yellow))',
					'white': 'hsl(var(--skoolife-white))',
					'anthracite': 'hsl(var(--skoolife-anthracite))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)', 
				sm: 'calc(var(--radius) - 4px)',
				'xl': 'var(--skoolife-radius-lg)', /* 24px */
			},
			boxShadow: {
				'skoolife': 'var(--skoolife-shadow)',
				'header': 'var(--shadow-header)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'33%': { transform: 'translateY(-8px) scale(1.1)' },
					'66%': { transform: 'translateY(-4px) scale(0.95)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'bounce-slower': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-8px) scale(1.2)' }
				},
				'icon-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)', 
						filter: 'drop-shadow(0 0 0 hsl(var(--primary) / 0))' 
					},
					'50%': { 
						transform: 'scale(1.1)', 
						filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))' 
					}
				},
				'icon-wiggle': {
					'0%, 100%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(-3deg) scale(1.05)' },
					'75%': { transform: 'rotate(3deg) scale(1.05)' }
				},
				'icon-bounce': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-4px) scale(1.1)' }
				},
				'icon-glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 0 hsl(var(--primary) / 0))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.6))' 
					}
				},
				'calendar-flip': {
					'0%': { transform: 'scale(1) rotateY(0deg)' },
					'25%': { transform: 'scale(1.05) rotateY(-15deg)' },
					'75%': { transform: 'scale(1.05) rotateY(15deg)' },
					'100%': { transform: 'scale(1) rotateY(0deg)' }
				},
				'task-check': {
					'0%': { transform: 'scale(1)' },
					'20%': { transform: 'scale(0.9) rotate(-5deg)' },
					'40%': { transform: 'scale(1.1) rotate(5deg)' },
					'60%': { transform: 'scale(0.95)' },
					'80%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'payment-swipe': {
					'0%': { transform: 'translateX(0) scale(1)' },
					'25%': { transform: 'translateX(-3px) scale(1.05)' },
					'50%': { transform: 'translateX(3px) scale(1.1)' },
					'75%': { transform: 'translateX(-1px) scale(1.05)' },
					'100%': { transform: 'translateX(0) scale(1)' }
				},
				'document-organize': {
					'0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateY(-2px) rotate(-2deg) scale(1.02)' },
					'50%': { transform: 'translateY(-4px) rotate(1deg) scale(1.05)' },
					'75%': { transform: 'translateY(-2px) rotate(-1deg) scale(1.02)' },
					'100%': { transform: 'translateY(0) rotate(0deg) scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.25s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 8s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'bounce-slower': 'bounce-slower 4s ease-in-out infinite',
				'icon-pulse': 'icon-pulse 2s ease-in-out infinite',
				'icon-wiggle': 'icon-wiggle 0.6s ease-in-out',
				'icon-bounce': 'icon-bounce 1s ease-in-out infinite',
				'icon-glow': 'icon-glow 2.5s ease-in-out infinite',
				'calendar-flip': 'calendar-flip 2.5s ease-in-out infinite',
				'task-check': 'task-check 2s ease-in-out infinite',
				'payment-swipe': 'payment-swipe 3s ease-in-out infinite',
				'document-organize': 'document-organize 2.8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
