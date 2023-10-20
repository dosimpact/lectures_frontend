module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/preset-typescript',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-a11y',
  ],
}
