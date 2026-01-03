export const projects = [
    {
        title: 'Dashboard',
        description:
            'A portfolio dashboard application built with React and TypeScript that demonstrates common production patterns including authenticated data access, CRUD operations, form validation, analytics visualizations, accessibility best practices, and testing, backed by Supabase.',
        features: [
            'Authentication flow powered by Supabase',
            'Analytics dashboard with interactive charts',
            'Documents table with full CRUD',
            'Form validation and error handling',
            'Automated tests covering hooks, form and accessibility',
        ],
        stack: ['React', 'TypeScript', 'TanStack Query & Table', 'React Hook Form', 'Tailwind CSS', 'shadcn/ui', 'Recharts', 'Supabase', 'Vitest'],
        image: 'dashboard.png',
        demoLink: 'https://voice-o-sea.github.io/dashboard/',
        gitLink: 'https://github.com/voice-o-sea/dashboard',
    },
    {
        title: 'Color Palette Builder',
        description:
            'A visual tool to create, customize, and export color palettes — including 11-step scales inspired by Tailwind and ready-to-use CSS tokens.',
        features: [
            'Create, update, and delete color palettes',
            'Add, remove, and edit individual colors using a color picker or hex input',
            'Generate harmony-based palettes (complementary, analogous, triadic, etc.)',
            'Optionally expand each base color into a full 11-step scale (OKLCH)',
            'Export palette values as @theme CSS variables',
        ],
        stack: ['React', 'Tailwind CSS'],
        image: 'theme-lab.png',
        demoLink: 'https://voice-o-sea.github.io/theme-lab/',
        gitLink: 'https://github.com/voice-o-sea/theme-lab',
    },
    {
        title: 'Emoji Habit Tracker',
        description:
            'A lightweight calendar-based habit tracker where each day can be marked with emojis. Designed for people who want emotional, visual feedback without heavy data entry.',
        features: [
            'Full month calendar view',
            'Add emoji markers per day',
            'Month-to-month navigation',
            'Data stored in localStorage',
            'Fully responsive',
        ],
        stack: ['React', 'Tailwind CSS'],
        image: 'habit-tracker.png',
        demoLink: 'https://voice-o-sea.github.io/habit-tracker/',
        gitLink: 'https://github.com/voice-o-sea/habit-tracker',
    },
];