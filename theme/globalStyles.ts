import { MantineTheme } from '@mantine/core';

export const globalStyles: MantineTheme['globalStyles'] = (theme) => ({
  body: {
    margin: 0,
    fontFamily: theme.fontFamily,
    backgroundColor: theme.colors.indigo[0],
  },
  //@ts-ignore
  h1: {
    ...theme.headings.sizes.h1,
  },
  //@ts-ignore
  h2: {
    ...theme.headings.sizes.h2,
  },
  //@ts-ignore
  h3: {
    ...theme.headings.sizes.h3,
  },
  //@ts-ignore
  h4: {
    ...theme.headings.sizes.h4,
  },
  //@ts-ignore
  h5: {
    ...theme.headings.sizes.h5,
  },
  //@ts-ignore
  h6: {
    ...theme.headings.sizes.h6,
  },
  p: {
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.md,
    marginBottom: 0,
    padding: 0,
  },
  'p.xl': {
    fontSize: theme.fontSizes.xl,
  },
  'p.lg': {
    fontSize: theme.fontSizes.lg,
  },
  'p.md': {
    fontSize: theme.fontSizes.md,
  },
  'p.sm': {
    fontSize: theme.fontSizes.sm,
  },
  'p.xs': {
    fontSize: theme.fontSizes.xs,
  },
  'p.bold': {
    fontWeight: 600,
  },
  'p.semibold': {
    fontWeight: 500,
  },
  'p.underline': {
    textDecoration: 'underline',
  },
  'p.strikethrough': {
    textDecoration: 'line-through',
  },
});
