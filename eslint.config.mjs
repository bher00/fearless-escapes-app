import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["unused-imports"],
    rules: {
      semi: "error",
      "no-plusplus": "off",
      "no-restricted-exports": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "no-shadow": "off",
      "no-nested-ternary": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowExpressions": true
        }
      ],

      "@typescript-eslint/no-unused-vars": "error",
      "no-param-reassign": [
        "error",
        {
          "props": true,
          "ignorePropertyModificationsFor": ["state"]
        }
      ],
      "prefer-const": "off",
      "unused-imports/no-unused-imports": "error"
    },
  })
];

export default eslintConfig;
