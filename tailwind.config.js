module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        purple_200: "#d0aada",
        bluegray_50: "#eaecf0",
        red_700: "#d03329",
        light_green_A700: "#45eb46",
        gray_600_19: "#7c7c7c19",
        indigo_A200: "#4963f1",
        blue_A200: "#4880ff",
        gray_50: "#f8f8fa",
        green_400: "#53d35a",
        white_A700_33: "#ffffff33",
        purple_A400: "#d100ff",
        gray_700_11: "#55555511",
        gray_501: "#9e9e9e",
        gray_600: "#7e7878",
        gray_402: "#cacaca",
        gray_601: "#7f7f7f",
        gray_700: "#565656",
        gray_403: "#b7b5b5",
        gray_502: "#999999",
        gray_301: "#dddddd",
        gray_400: "#bdbdbd",
        gray_202: "#eeeeee",
        gray_103: "#f2f2f2",
        gray_500: "#aaaaaa",
        gray_401: "#b8b6b6",
        gray_800: "#424242",
        indigo_50: "#e7eafd",
        gray_602: "#727272",
        bluegray_100: "#d6dae2",
        gray_200: "#ededed",
        gray_101: "#f0f3fd",
        gray_300: "#e6e6e6",
        gray_201: "#efefef",
        gray_102: "#f5f5f5",
        gray_100: "#f1f3fe",
        bluegray_900: "#262b35",
        bluegray_700: "#424c5d",
        indigo_100: "#b4bff8",
        bluegray_600: "#5f6c86",
        bluegray_402: "#888888",
        bluegray_401: "#8a8a8a",
        bluegray_400: "#74839d",
        bluegray_301: "#999caa",
        bluegray_300: "#9ea8ba",
        bluegray_200: "#bac1ce",
        bluegray_101: "#d9d9d9",
        white_A700: "#ffffff",
        indigo_500: "#3750d3",
      },
      borderRadius: {
        radius1: "1px",
        radius2: "2px",
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius16: "16px",
        radius20: "20px",
        radius50: "50%",
      },
      fontFamily: { inter: "Inter", gilroy: "Gilroy" },
      boxShadow: {
        bs1: "0px 12px  31px 0px #7c7c7c19",
        bs: "0px 0px  10px 4px #55555511",
      },
      borderWidth: { bw086: "0.86px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
