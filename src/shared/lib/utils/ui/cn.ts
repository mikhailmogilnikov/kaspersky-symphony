import type { ClassValue } from 'clsx';

import clsx from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { twMergeConfig } from './tw-merge-config';

const twMerge = extendTailwindMerge(twMergeConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
