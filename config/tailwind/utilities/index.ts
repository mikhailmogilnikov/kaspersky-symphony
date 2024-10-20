import transition from './transitions';
import custom from './custom';
import scrollbarHide from './scrollbar-hide';

export const utilities = {
  ...custom,
  ...transition,
  ...scrollbarHide,
};
