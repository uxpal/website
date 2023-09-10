import { DEFAULT_THEME } from '@mantine/core';

import { typography } from './typography';
import colors from './colors';
import { globalStyles } from './globalStyles';

export type Theme = {};

const theme = {
  ...DEFAULT_THEME,
  globalStyles,
  ...colors,
  ...typography,
};

export default theme;
