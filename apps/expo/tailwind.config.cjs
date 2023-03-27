/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF835C",
        "primary-green": "#7A9861",
        "primary-background": "#FFF4ED",
      },
    },
  },
};
