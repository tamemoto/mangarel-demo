module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true
    },
    // 共有設定間でルール設定が重複してる場合、listの後ろが優先
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/standard'
    ],
    globals: {
        Atomics: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        project: './tsconfig.json',
        sourceType: "module"
    },
    //任意のプラグインを組み込む 追加ルールのプラグイン
    plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'prefer-arrow',
        'prettier',
        'react',
        'react-hooks'
    ],
    root: true,
    rules: {
        // eslint
        'linebreak-style': ['error', 'unix'],
        'newline-before-return': 'error',
        'no-console': 'warn',
        'no-continue': 'off',
        quotes: ['error', 'single', { avoidEscape: true }],
        'require-yield': 'error',
        semi: ['error', 'always'],

        // @typescript-eslint
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-interface': 'off',

        // import React from 'react'のエラー回避
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error'
        ],

        // airbnb
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: true,
                classPropertiesAllowed: false
            }
        ],

        //reactの設定
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['jsx', 'tsx']
            }
        ],
        'react/jsx-props-no-spreading': [
            'warn',
            {
                custom: 'ignore'
            }
        ],
        'react/prop-types': 'off',

        // hooksの設定
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // importの設定
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        //ここで例外を定義
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '.storybook/**',
                    'stories/**',
                    '**/*/*.story.*',
                    '**/*/*.stories.*',
                    '**/__specs__/**',
                    '**/*/*.spec.*',
                    '**/__tests__/**',
                    '**/*/*.test.*',
                    'src/setupTests.*',
                ],
            }
        ],
        'import/prefer-default-export': 'off'
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', 'jsx', '.ts', '.tsx'],
                paths: ['src']
            }
        },
        react: {
            version: 'detect'
        }
    }
}
