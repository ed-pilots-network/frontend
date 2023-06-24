const selectColor = (isDark: boolean, element: string) => {
  if (element === 'text') return isDark ? 'dark.text' : 'light.text';
  // the textLight color is used for text in the light theme on dark backgrounds (i.e. Navbar)
  if (element === 'textLight') return isDark ? 'dark.text' : 'light.textLight';
  if (element === 'box') return isDark ? 'dark.box' : 'light.box';
  return isDark ? 'dark.background' : 'light.background';
};

export default selectColor;
