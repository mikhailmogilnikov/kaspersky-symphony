import { readableColor, toHsla } from 'color2k';

import { ColorScale, ThemeColors } from './types/colors';
import { CorePluginConfig } from './types/config';

export const generateColorVariables = (options: CorePluginConfig) => {
  const colorVars: Record<string, Record<string, string>> = {};

  for (const [themeName, { colors }] of Object.entries(options.themes)) {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    let colorVariables: Record<string, string> = {};

    Object.keys(colors).forEach((colorKey: keyof ThemeColors) => {
      try {
        const colorPalette = generateColorPalette(colors[colorKey], colorKey);

        colorVariables = { ...colorVariables, ...colorPalette };
      } catch {
        return;
      }
    });

    colorVars[cssSelector] = colorVariables;
  }

  return colorVars;
};

const parseColorToHSL = (color: string) => {
  const hslaColor = toHsla(color);
  const [h, s, l] = hslaColor.slice(5).split(', ').slice(0, 3);

  return [h, s, l];
};

const createHslString = (color: string) => {
  const [h, s, l] = parseColorToHSL(color);

  return `${h}, ${s}, ${l}`;
};

const generateColorPalette = (color: ColorScale, colorKey: string) => {
  if (typeof color === 'string') {
    const [h, s, l] = parseColorToHSL(color);
    const [fgH, fgS, fgL] = parseColorToHSL(readableColor(color));

    return {
      [`--color-${colorKey}`]: `${h}, ${s}, ${l}`,
      [`--color-${colorKey}-foreground`]: `${fgH}, ${fgS}, ${fgL}`,
      [`--color-${colorKey}-50`]: `${h}, ${s}, 5%`,
      [`--color-${colorKey}-100`]: `${h}, ${s}, 10%`,
      [`--color-${colorKey}-200`]: `${h}, ${s}, 20%`,
      [`--color-${colorKey}-300`]: `${h}, ${s}, 30%`,
      [`--color-${colorKey}-400`]: `${h}, ${s}, 40%`,
      [`--color-${colorKey}-500`]: `${h}, ${s}, 50%`,
      [`--color-${colorKey}-600`]: `${h}, ${s}, 60%`,
      [`--color-${colorKey}-700`]: `${h}, ${s}, 70%`,
      [`--color-${colorKey}-800`]: `${h}, ${s}, 80%`,
      [`--color-${colorKey}-900`]: `${h}, ${s}, 90%`,
    };
  } else {
    const [h, s, l] = parseColorToHSL(color.DEFAULT);
    const [fgH, fgS, fgL] = parseColorToHSL(color.foreground || readableColor(color.DEFAULT));

    return {
      [`--color-${colorKey}`]: `${h}, ${s}, ${l}`,
      [`--color-${colorKey}-foreground`]: `${fgH}, ${fgS}, ${fgL}`,
      [`--color-${colorKey}-50`]: color[50] ? createHslString(color[50]) : `${h}, ${s}, 5%`,
      [`--color-${colorKey}-100`]: color[100] ? createHslString(color[100]) : `${h}, ${s}, 10%`,
      [`--color-${colorKey}-200`]: color[200] ? createHslString(color[200]) : `${h}, ${s}, 20%`,
      [`--color-${colorKey}-300`]: color[300] ? createHslString(color[300]) : `${h}, ${s}, 30%`,
      [`--color-${colorKey}-400`]: color[400] ? createHslString(color[400]) : `${h}, ${s}, 40%`,
      [`--color-${colorKey}-500`]: color[500] ? createHslString(color[500]) : `${h}, ${s}, 50%`,
      [`--color-${colorKey}-600`]: color[600] ? createHslString(color[600]) : `${h}, ${s}, 60%`,
      [`--color-${colorKey}-700`]: color[700] ? createHslString(color[700]) : `${h}, ${s}, 70%`,
      [`--color-${colorKey}-800`]: color[800] ? createHslString(color[800]) : `${h}, ${s}, 80%`,
      [`--color-${colorKey}-900`]: color[900] ? createHslString(color[900]) : `${h}, ${s}, 90%`,
    };
  }
};
