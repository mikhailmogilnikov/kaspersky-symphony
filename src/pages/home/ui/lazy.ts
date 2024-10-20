import { lazy } from 'react';

export const LazyHomePage = lazy(() =>
  import('./index').then((mod) => ({ default: mod.HomePage })),
);
