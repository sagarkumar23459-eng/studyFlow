const sharedGlobals = {
  console: "readonly",
  process: "readonly",
  Buffer: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  fetch: "readonly"
};

const baseConfig = [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/.cache/**"
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: sharedGlobals
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn"
    },
    rules: {
      "array-callback-return": "error",
      "block-scoped-var": "error",
      curly: ["error", "all"],
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-alert": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-constant-binary-expression": "error",
      "no-else-return": ["warn", { allowElseIf: false }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-implicit-coercion": "warn",
      "no-implied-eval": "error",
      "no-lone-blocks": "error",
      "no-multi-assign": "error",
      "no-new": "error",
      "no-param-reassign": "warn",
      "no-promise-executor-return": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true
        }
      ],
      "object-shorthand": ["warn", "always"],
      "prefer-const": ["error", { destructuring: "all" }],
      "prefer-template": "warn",
      radix: "error",
      "require-atomic-updates": "error"
    }
  },
  {
    files: ["**/*.{cjs,config.cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...sharedGlobals,
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly"
      }
    }
  }
];

export default baseConfig;