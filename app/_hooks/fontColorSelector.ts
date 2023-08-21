const selectColor = (isDark: boolean, element: string) => {
  if (element === 'text') return isDark ? 'dark.text' : 'light.text';
  // the textLight color is used for text in the light theme on dark backgrounds (i.e. Navbar)
  if (element === 'textLight') return isDark ? 'dark.text' : 'light.textLight';
  if (element === 'textSelected')
    return isDark ? 'dark.textSelected' : 'light.textSelected';
  if (element === 'box') return isDark ? 'dark.box' : 'light.box';
  if (element === 'border') return isDark ? 'dark.border' : 'light.border';
  if (element === 'border-accent')
    return isDark ? 'dark.borderAccent' : 'light.borderAccent';
  if (element === 'switch') return isDark ? 'switchDark' : 'switchLight';
  if (element === 'accent-bg')
    return isDark ? 'dark.accentBackground' : 'light.accentBackground';
  if (element === 'accent-text') return isDark ? 'blue.4' : 'orange.5';
  if (element === 'grid-accent')
    return isDark ? 'dark.gridAccent' : 'light.gridAccent';
  if (element === 'gradient')
    return isDark
      ? 'linear(to-br, blue.6, blue.7, blue.6)'
      : 'linear(to-br, blue.2, blue.9, blue.2)';
  return isDark ? 'dark.background' : 'light.background';
};

export default selectColor;
