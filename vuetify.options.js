const myCustomTheme = {
  dark: true,
  colors: {
    background: "#000000",
    surface: "#111111",
    primary: "#1e1e1e",
    secondary: "#3c3c3c",
    accent: "#FF6F00",
    text: "#f5f5f5",
    muted: "#a0a0a0",
    border: "#2a2a2a",
  },
};

export default {
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme,
    },
  },
};
