export default {
  colors: {
    text: '#0d153e',
    background: '#fff',
    primary: '#1e2548',
    secondary: '#db2c26',
    primaryOpacity_41: 'rgba(34, 52, 128, 0.41)',
    headerBg: 'rgba(30, 37, 72, 0.7)',
    muted: '#a3a6b6',
    heading: '#fff',
    socialLinks: '#a3a6b6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
  buttons: {
    common: {
      fontFamily: 'body',
      bg: 'primary',
      fontWeight: 'bold',
      transition: 'link',
      borderWidth: '2px',
      borderColor: 'secondary',
      borderStyle: 'solid',
      color: 'background',
    },
    primary: {
      variant: 'buttons.common',
      '&:hover': {
        background: 'transparent',
        borderColor: 'heading',
        color: 'heading',
      },
    },
    secondary: {
      variant: 'buttons.common',
      borderColor: 'primary',
      '&:hover': {
        borderColor: 'secondary',
        bg: 'secondary',
        color: 'heading',
      },
    },
  },
  fonts: {
    body: 'Gotu',
    heading: 'Playfair-Display',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 300,
    lightItalic: `300i`,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [2, 4, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  transition: {
    link: '0.3s ease',
  },
  breakpoints: ['576px', '768px', '1200px'],
};
