module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:node/recommended-module',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'sonarjs',
    'promise',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'warn',

    'import/default': 'warn',
    'import/export': 'warn',
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/first': 'warn',
    'import/group-exports': 'off',
    'import/named': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/no-commonjs': 'warn',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-internal-modules': 'off',
    'import/no-named-default': 'warn',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',

    'node/no-missing-import': 'off',

    'prettier/prettier': 'off',

    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-redundant-jump': 'warn',

    'arrow-body-style': 'off',
    'arrow-parens': [
      'off',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    camelcase: 0,
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': 'off',
    complexity: 'off',
    'consistent-return': 'off',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'function-paren-newline': 'off',
    'guard-for-in': 'warn',
    'id-blacklist': ['error', 'number', 'string', 'boolean', 'Undefined'],
    'id-match': 'error',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': ['warn', 1],
    'max-len': 'off',
    'new-cap': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 0,
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-nested-ternary': 'off',
    'no-new-wrappers': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': 'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-syntax': [
      'warn',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-return-await': 'warn',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'warn',
    'no-underscore-dangle': 'error',
    'no-unsafe-finally': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-return': 'warn',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-destructuring': 'warn',
    'prefer-spread': 1,
    'prefer-template': 'warn',
    'quote-props': 'off',
    quotes: 'off',
    radix: 'error',
    'sort-keys': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': 'warn',
    'use-isnan': 'warn',
    'valid-typeof': 'off',
    yoda: 'warn',
  },
};