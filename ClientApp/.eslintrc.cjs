module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "react-app",
      "eslint:recommended",
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      "plugin:@typescript-eslint/recommended",
      "eslint-config-prettier",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
      "@typescript-eslint/no-empty-interface": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
  }
}
