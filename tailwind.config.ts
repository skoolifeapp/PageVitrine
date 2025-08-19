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
					'0%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' },
					'15%': { transform: 'scale(1.02) rotateY(-8deg)', opacity: '0.9' },
					'30%': { transform: 'scale(1.05) rotateY(8deg)', opacity: '0.8' },
					'45%': { transform: 'scale(1.02) rotateY(-4deg)', opacity: '0.9' },
					'60%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' }
				},
				'task-check': {
					'0%': { transform: 'scale(1)', opacity: '0.6' },
					'20%': { transform: 'scale(0.95)', opacity: '0.7' },
					'40%': { transform: 'scale(1.1)', opacity: '0.9' },
					'50%': { transform: 'scale(1.15)', opacity: '1' },
					'65%': { transform: 'scale(1.05)', opacity: '1' },
					'80%': { transform: 'scale(1)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '0.6' }
				},
				'payment-swipe': {
					'0%': { transform: 'translateX(0) scale(1)', opacity: '0.7' },
					'25%': { transform: 'translateX(-8px) scale(1.03)', opacity: '0.8' },
					'50%': { transform: 'translateX(12px) scale(1.08)', opacity: '1' },
					'65%': { transform: 'translateX(8px) scale(1.05)', opacity: '0.9' },
					'80%': { transform: 'translateX(-2px) scale(1.02)', opacity: '0.8' },
					'100%': { transform: 'translateX(0) scale(1)', opacity: '0.7' }
				},
				'document-organize': {
					'0%': { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: '0.6' },
					'20%': { transform: 'translateY(-6px) rotate(-3deg) scale(1.02)', opacity: '0.7' },
					'40%': { transform: 'translateY(-10px) rotate(2deg) scale(1.06)', opacity: '0.9' },
					'60%': { transform: 'translateY(-8px) rotate(-1deg) scale(1.04)', opacity: '1' },
					'80%': { transform: 'translateY(-3px) rotate(1deg) scale(1.02)', opacity: '0.8' },
					'100%': { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: '0.6' }
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
				'calendar-flip': 'calendar-flip 4.5s ease-in-out infinite',
				'task-check': 'task-check 5s ease-in-out infinite',
				'payment-swipe': 'payment-swipe 4s ease-in-out infinite',
				'document-organize': 'document-organize 5.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
