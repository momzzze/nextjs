export const frameworks=[
    'react',
    'vue',
    'svelte',
    'tailwind',
    'figma',
    'qwik',
    'safari',
    'chrome',
    'mobile',
    'desktop',
] as const;

export type Framework=(typeof frameworks)[number];