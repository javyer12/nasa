/* eslint-env node */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint', 'react' ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    root: true,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "indent": [ "error", 2 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ]
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};