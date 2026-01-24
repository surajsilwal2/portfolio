// eslint.config.mjs
import nextVitals from "eslint-config-next/core-web-vitals";
import globals from "globals";

export default [
  { languageOptions: { globals: globals.browser } },
  ...nextVitals,
  { ignores: [".next/**", "out/**"] },
];
