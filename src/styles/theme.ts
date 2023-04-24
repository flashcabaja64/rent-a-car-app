import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#2856FF',
  secondary: "#9fa7ff",
  gray: '#8b8989',
  semiGray: '#5b5b5b',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
  bold: "600"
};

export const carColors: { [key:string]: string } = {
  Yellow: "#ffff00",
  Maroon: "#800000",
  Red: "#ff0000",
  Violet: "#ee82ee",
  Purple: "#800080",
  Indigo: "#4b0082",
  Teal: "#008080",
  Pink: "#ffc0cb",
  Aquamarine: "#7fffd4",
  Green: "#008000",
  Mauv: "#E0B0FF",
  Turquoise: "#40e0d0",
  Blue: "#0000ff",
  Puce: "#CC8899",
  Orange: "#ffa500",
  Khaki: "#f0e68c",
  Fuscia: "#FF00FF",
  Goldenrod: "#daa520",
  Crimson: "#dc143c"
}

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};