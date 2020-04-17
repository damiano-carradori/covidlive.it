export default {
  breakpoints: [
    // sm : Small devices (landscape phones, 576px and up)
    "576px",
    // md : Medium devices (tablets, 768px and up)
    "768px",
    // lg : Large devices (desktops, 992px and up)
    "992px",
    // xl : Extra large devices (large desktops, 1200px and up)
    "1200px",
    // xxl : Extra extra large devices (large desktops, 1400px and up)
    "1400px",
  ],
  shadows: {
    small: "0 1px 2px 0 #e9edf1",
    large: "0 11px 16px 0 #b9bfca87",
    header: "0 19px 24px 0 rgba(62, 115, 221, 0.16)",
    largePrimary: "0 12px 34px #3e73dd75",
  },

  fontSizes: [11, 14, 16, 20, 24, 32, 48, 72],
  colors: {
    background: "#ffffff",
    neutral50: "#f3f5f8",
    neutral100: "#e9edf1",
    neutral200: "#b9bfca",
    neutral300: "#647087",
    neutral400: "#000b33",
    primary50: "#ebf1fb",
    primary100: "#3e73dd",
    primary200: "#265bbe",
    primary100lighten4: "#4f80e0",

    error: "#ff5c5c",
    warning: " #fcdca3",
    success: "#1bc477",
  },

  space: {
    small: "0.5rem", // 8px
    base: "1rem", // 16px
    mid: "1.5rem", // 24px
    large: "2rem", // 32px
    mlarge: "2.5rem", // 40px
    xlarge: "3rem", // 48px
    xxlarge: "4rem", // 64px
    huge: "5rem", // 80px
    mhuge: "6rem", // 80px
    xhuge: "8rem", // 120px
  },
};
