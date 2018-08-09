/*eslint-disable object-shorthand*/

import { colors } from 'ooni-components'

export const brand = {
  // black and its tints:
  black: colors.palette.black, // black
  darkerGray: colors.palette.gray7,
  darkGray: colors.palette.gray6,
  gray: colors.palette.gray5,
  lightGray: colors.palette.gray3,
  white: colors.palette.gray0, // lightest gray
  // blue and its tints:
  blue: colors.palette.blue5, // brand blue
  lightBlue: colors.LIGHT_BLUE,
  lighterBlue: colors.palette.blue2,
  lightestBlue: colors.palette.blue1,

  darkestBlue: colors.palette.blue8,
  darkerBlue: colors.palette.blue7,
  darkBlue: colors.palette.blue6
}

const presentationColors = {
  primary: brand.black,
  secondary: brand.blue,
  tertiary: brand.lightGray,
  quarternary: brand.white
}

const fonts = {
  heading: "'Fira Sans', 'Helvetica Neue', Helvetica, sans-serif",
  body: "'Fira Sans', 'Helvetica Neue', Helvetica, sans-serif",
  monospace: "'Source Code Pro', 'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace"
};

export const theme = {
  colors: presentationColors,
  fonts: fonts,
  global: {
    body: {
      background: colors.secondary,
      fontFamily: fonts.body,
      fontWeight: "normal",
      fontSize: "2em",
      color: colors.primary,
      overflow: "hidden"
    },
    "html, body": {
      height: "100%"
    },
    "*": {
      boxSizing: "border-box"
    }
  },
  fullscreen: {
    fill: colors.primary
  },
  controls: {
    prev: {
      position: "absolute",
      top: "50%",
      left: 20,
      transform: "translateY(-50%)",
      zIndex: 9999,
      background: "none",
      border: "none",
      outline: 0
    },
    prevIcon: {
      fill: colors.primary
    },
    next: {
      position: "absolute",
      top: "50%",
      right: 20,
      transform: "translateY(-50%)",
      zIndex: 9999,
      background: "none",
      border: "none",
      outline: 0
    },
    nextIcon: {
      fill: colors.primary
    }
  },
  progress: {
    pacman: {
      container: {
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000,
      },
      pacman: {
        position: 'absolute',
        transition: 'left 0.3s ease-in-out 0.2s',
        width: '20px',
        height: '20px',
        transform: 'translate(-5px, -5px)',
      },
      pacmanTop: {
        position: 'absolute',
        content: '',
        width: '20px',
        height: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        transition: 'all 0.3s ease-out',
        background: colors.quarternary,
      },
      pacmanBottom: {
        position: 'absolute',
        content: '',
        width: '20px',
        height: '10px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        background: colors.quarternary,
        transition: 'all 0.3s ease-out',
        top: '10px',
      },
      point: {
        position: 'absolute',
        float: 'left',
        background: 'transparent',
        width: '10px',
        height: '10px',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.quarternary,
        borderRadius: '50%',
        transition: 'all 0.3s ease-out',
      },
    },
    bar: {
      container: {
        position: 'absolute',
        height: '10px',
        width: '100%',
        bottom: 0,
        left: 0,
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000,
      },
      bar: {
        height: '100%',
        background: colors.quarternary,
        transition: 'all 0.3s ease-out',
      },
    },
    number: {
      container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.quarternary,
        transition: 'all 0.3s ease-out',
      },
    },
  },
  components: {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block",
      margin: 20
    },
    quote: {
      borderLeft: `1px solid ${colors.primary}`,
      paddingLeft: 40,
      display: "block",
      color: colors.primary,
      fontSize: "4.9rem",
      lineHeight: 1,
      fontWeight: "bold"
    },
    cite: {
      color: colors.tertiary,
      display: "block",
      clear: "left",
      fontSize: "2rem",
      marginTop: "1rem"
    },
    content: {
      margin: "0 auto",
      textAlign: "center"
    },
    codePane: {
      pre: {
        margin: "auto",
        fontSize: "0.8rem",
        fontWeight: "normal",
        fontFamily: fonts.monospace,
        height: "100%",
        minWidth: "100%",
        maxWidth: 800
      },
      code: {
        color: brand.darkerGray,
        textAlign: "left",
        fontFamily: fonts.monospace,
        fontWeight: "normal"
      }
    },
    code: {
      color: "black",
      fontSize: "2.66rem",
      fontFamily: fonts.monospace,
      margin: "0.25rem auto",
      backgroundColor: "rgba(0,0,0,0.15)",
      padding: "0 10px",
      borderRadius: 3
    },
    heading: {
      h1: {
        color: colors.primary,
        fontSize: "7.05rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        letterSpacing: "0.175em",
        lineHeight: 1,
        textTransform: "uppercase",
        margin: "0",
        zoom: 1
      },
      h2: {
        color: colors.primary,
        fontSize: "5.88rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        lineHeight: 1.2,
        margin: 0
      },
      h3: {
        color: brand.darkerGray,
        fontSize: "4.9rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        lineHeight: 1.2,
        margin: "0.25rem auto"
      },
      h4: {
        color: brand.darkerGray,
        fontSize: "3.82rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        lineHeight: 1.2,
        margin: "0.25rem auto"
      },
      h5: {
        color: brand.darkerGray,
        fontSize: "3.19rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        lineHeight: 1.3,
        margin: "0.25rem auto"
      },
      h6: {
        color: brand.darkerGray,
        fontSize: "2.66rem",
        fontFamily: fonts.heading,
        fontWeight: 600,
        lineHeight: 1.3,
        margin: "0.25rem auto"
      }
    },
    image: {
      display: "block",
      margin: "0.5rem auto"
    },
    link: {
      textDecoration: "none",
      color: brand.blue
    },
    listItem: {
      fontSize: "2.66rem"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    tableHeaderItem: {
      fontSize: "2.66rem",
      fontWeight: "bold"
    },
    tableItem: {
      fontSize: "2.66rem"
    },
    table: {
      width: "100%"
    },
    text: {
      color: colors.primary,
      fontSize: "2rem",
      fontFamily: fonts.body,
      lineHeight: 1.3,
      margin: "1.25rem auto"
    }
  }
}

export default theme
