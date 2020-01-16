/**
 * This file defines the theme used by styled-components.
 * It is basically like defining variables in Sass.
 * See: https://www.styled-components.com/docs/advanced#theming
 */

const theme = {
  // We declare our main colors
  colors: {
    lightGrey: '#CCC',
    darkGrey: '#444444',
    movify: '#E6332A',
  },
};

// The main color for the project will be Movify's color
theme.colors.main = theme.colors.movify;

export default theme;
