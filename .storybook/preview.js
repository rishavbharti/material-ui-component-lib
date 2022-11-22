import { create } from '@storybook/theming';
import ThemeProvider from '../src/components/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Nexus UI',
    }),
  },
};

export const decorators = [(story) => <ThemeProvider>{story()}</ThemeProvider>];
