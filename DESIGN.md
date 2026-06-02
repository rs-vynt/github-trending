# Design System

## Theme
Dark mode native. The overall theme is "Glassmorphism & Premium Tech".
We use deep dark backgrounds with subtle mesh gradients (e.g., violet/cyan glows) to add depth, and glassmorphism (translucency + blur) for surface elements.

## Color Palette (Tailwind)
- **Background**: `bg-gray-950` with mesh gradients (`bg-purple-900/20`, `bg-blue-900/20`).
- **Surface/Cards**: `bg-white/5` or `bg-gray-900/50` with `backdrop-blur-xl`, `border-white/10`.
- **Primary Text**: `text-gray-100` for headings, `text-gray-300` for body copy, `text-gray-400` for muted/secondary text.
- **Accents**: Subtle glows in `violet-500/20` or `indigo-500/20`. `cyan-400` or `indigo-400` for active states/links.

## Typography
- **Font**: Inter (default sans), but applied with care.
- **Headings**: `tracking-tight`, `font-bold` to `font-extrabold`. Use `text-transparent bg-clip-text bg-gradient-to-r` for main hero titles.
- **Body**: Max width `max-w-2xl` for readability, `text-base` to `text-sm`.
- **Monospace**: `font-mono` for code snippets, tags, or developer-centric metadata.

## Layout & Components
- **Grid**: Responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) for repo cards.
- **Cards**: `rounded-xl`, `border border-white/10`, `backdrop-blur-xl`, `hover:bg-white/10`, `transition-all duration-300`.
- **Sheet/Modal**: Slide-over panel from the right for displaying detailed AI summaries.
- **Navigation**: Sticky top glass navbar with subtle bottom border.

## Motion (Framer Motion)
- **Transitions**: Ease-out exponential, duration ~0.3s-0.5s.
- **List items**: Staggered fade-in and slide-up.
- **Hover**: Subtle scale up (`scale-105` or `scale-[1.02]`) on cards, glowing border effect.
- **Reduced motion**: Respected via Tailwind/Framer defaults.
