import baseConfig from "not-airbnb-eslint-config";

export default [
  // Ignore generated output and non-source config files
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  ...baseConfig,
  {
    settings: {
      // Pin React version to avoid context.getFilename() crash on detection
      react: { version: "19.0" },
      // Point the TypeScript resolver at our tsconfig
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
        node: { extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"] },
      },
    },
    rules: {
      // react-refresh plugin is not installed in this project
      "react-refresh/only-export-components": "off",
      // Allow console in the Bun server entry point
      "no-console": "off",
    },
  },
];