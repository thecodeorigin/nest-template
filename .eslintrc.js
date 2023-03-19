module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["@antfu", "plugin:unicorn/recommended"],
  plugins: ["unicorn"],
  rules: {
    // Default rules
    "arrow-parens": ["error", "always"],
    "comma-dangle": "off",
    "curly": "off",
    "array-callback-return": "off",
    "no-console": "warn",
    "operator-linebreak": "off",
    // Unicorn rules
    "unicorn/prefer-module": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/no-nested-ternary": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-null": "off",
    // Typescript rules
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: false,
      },
      multilineDetection: "brackets",
    }],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        enums: "always-multiline",
        generics: "never",
        tuples: "never",
        exports: "never",
        functions: "never",
      },
    ],
    // Vue rules
    "vue/html-self-closing": ["warn", {
      svg: "always",
      html: {
        void: "always",
        normal: "always",
      },
    }],
    "vue/operator-linebreak": [
      "error",
      "after",
    ],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/singleline-html-element-content-newline": "off",
      },
    },
  ],
};
