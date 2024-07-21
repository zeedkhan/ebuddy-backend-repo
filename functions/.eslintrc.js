module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "linebreak-style": 0,
    "import/no-named-as-default": "off",
    "eol-last": "off",
    'object-curly-spacing': ['error', 'always'],
    "quotes": "off",
    "indent": "off",
    "comma-dangle": "off",
    "semi": "off",
    "no-trailing-spaces": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "new-cap": "off",
    "max-len": "off",
  },
};
