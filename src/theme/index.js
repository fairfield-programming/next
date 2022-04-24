module.exports = {
  links: { 
    navlink: {
      fontWeight: '300',
      color: '#0F006C',
      textDecoration: 'none',
      fontFamily: 'body',
      lineHeight: 'body'
    },
    primary: {
      fontWeight: '500',
      color: '#0F006C',
      textDecoration: 'none',
      fontFamily: 'body',
      lineHeight: 'body',
      textDecoration: 'underline'
    }
  },
  cards: {
    primary: {
      p: 4,
      m: 2,
      borderRadius: 4,
      // boxShadow: '0 0 2px #ddd',
    },
    bordered: {
      borderRadius: 5,
      borderColor: "background02",
      borderWidth: 1,
      borderStyle: 'solid',
      p: 4,
      m: 2,
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      '&:hover': {
        cursor: 'pointer',
        opacity: 0.8
      }
    },
    secondary: {
      color: 'primary',
      bg: 'background',
      borderColor: "primary",
      borderWidth: 1,
      borderStyle: 'solid',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      '&:hover': {
        bg: 'primary',
        borderColor: 'primary',
        color: 'background',
        cursor: 'pointer',
        opacity: 0.8
      }
    },
  },
  avatars: {
    large: {
      width: 128,
      height: 128,
      borderRadius: 99999,
    },
  },
  text: {
    default: {
      color: 'text',
      fontSize: 2,
      fontFamily: 'body',
      lineHeight: 'body',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  borderWidths: [
    0, 
    1
  ],
  colors: {
    text: "#333",
    text01: "#666",
    background: "#fff",
    background01: '#fafafa',
    background02: '#f5f5f5',
    primary: "#4E33FF",
    secondary: "#F14156",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}