module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        requireConfigFile: false,
        project: [
            "./packages/server/tsconfig.json",
            "./packages/client/tsconfig.json",
        ],
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: 2018,
        ecmaFeatures: {jsx: true,},
    },
    plugins: [
        "@typescript-eslint/eslint-plugin",
        "prettier",
        "react-hooks",
        "react",
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    root: true,
    env: {node: true,},
    ignorePatterns: [
        ".eslintrc.js",
        "packages/server/codegen.ts",
        "packages/server/src/graphql/generated/**/*",
        "packages/client/src/graphql/generated/**/*",
    ],
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        // quotes: ["error", "single"],
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ["*.ts", "*.tsx"],
            rules: {
                // '@typescript-eslint/explicit-function-return-type': ['error'],
            },
        },
    ],
};
