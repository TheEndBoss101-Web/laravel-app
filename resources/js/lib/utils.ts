import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function loadHighlightTheme() {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
        await import('highlight.js/styles/github-dark.css');
    } else {
        await import('highlight.js/styles/github.css');
    }
}
