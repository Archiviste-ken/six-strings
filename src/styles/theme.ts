export const theme = {
  fonts: {
    display: [
      "Iowan Old Style",
      "Palatino Linotype",
      "Book Antiqua",
      "Baskerville",
      "Times New Roman",
      "serif",
    ],
    body: [
      "Avenir Next",
      "Segoe UI",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  colors: {
    background: "#090909",
    surface: "#111111",
    surfaceSoft: "#151515",
    surfaceRaised: "#1a1a1a",
    border: "#242321",
    borderStrong: "#2c2927",
    text: "#f5f1e8",
    textSoft: "#cbc3b7",
    textMuted: "#918b83",
    accent: "#a0352f",
    accentSoft: "rgba(160, 53, 47, 0.16)",
  },
  layout: {
    gutter: "clamp(1.25rem, 2.2vw, 2rem)",
    containerNarrow: "44rem",
    containerStandard: "76rem",
    containerWide: "88rem",
  },
} as const;
