module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
