'use strict';

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'script',
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: false,
    jsx: true
  }
};

const env = {
  es6: true,
  mocha: true,
  node: true
};

const globals = {};

const plugins = [
  'extended',
  'mocha'
];

const rules = {
  'comma-dangle': [ 2, 'never' ],
  'no-cond-assign': [ 2, 'always' ],
  'no-console': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': [ 2, 'all', { nestedBinaryExpressions: false }],
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declarations': [ 2, 'both' ],
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-negated-in-lhs': 2,
  'no-obj-calls': 2,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,

  'accessor-pairs': [ 2, { getWithoutSet: false, setWithoutGet: true }],
  'array-callback-return': 2,
  'block-scoped-var': 2,
  complexity: [ 1, { max: 11 }],
  'consistent-return': 0,
  curly: [ 2, 'all' ],
  'default-case': 2,
  'dot-location': [ 2, 'object' ],
  'dot-notation': [ 2, { allowKeywords: true }],
  eqeqeq: 2,
  'guard-for-in': 2,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty-function': [ 2, { allow: []}],
  'no-eq-null': 2,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-implicit-coercion': 2,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-invalid-this': 0,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-native-reassign': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-return-assign': [ 2, 'always' ],
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-void': 2,
  'no-warning-comments': 2,
  'no-with': 2,
  radix: 2,
  'vars-on-top': 2,
  'wrap-iife': [ 2, 'inside' ],
  yoda: [ 2, 'never' ],

  strict: [ 2, 'global' ],

  'init-declarations': 0,
  'no-catch-shadow': 2,
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-restricted-globals': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 0,
  'no-unused-vars': [ 2, { vars: 'all', args: 'after-used' }],
  'no-use-before-define': 2,

  'callback-return': [ 2, [ 'callback', 'done', 'next' ]],
  'global-require': 2,
  'handle-callback-err': [ 2, 'err' ],
  'no-mixed-requires': [ 2, true ],
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 2,
  'no-process-exit': 2,
  'no-restricted-modules': 0,
  'no-sync': 2,

  'array-bracket-spacing': [ 2, 'always', {
    singleValue: true,
    objectsInArrays: false,
    arraysInArrays: false
  }],
  'block-spacing': [ 2, 'always' ],
  'brace-style': [ 2, '1tbs', { allowSingleLine: false }],
  camelcase: 2,
  'comma-spacing': [ 2, { before: false, after: true }],
  'comma-style': [ 2, 'last' ],
  'computed-property-spacing': [ 2, 'never' ],
  'consistent-this': [ 2, 'that' ],
  'eol-last': 2,
  'func-names': 0,
  'func-style': [ 2, 'expression' ],
  'id-blacklist': 0,
  'id-length': [ 2, { min: 2, max: Number.infinity, properties: 'always', exceptions: [ '_' ]}],
  'id-match': 0,
  indent: [ 2, 2, { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 }}],
  'jsx-quotes': [ 2, 'prefer-single' ],
  'key-spacing': [ 2, { beforeColon: false, afterColon: true, mode: 'strict' }],
  'keyword-spacing': [ 2, { before: true, after: true }],
  'linebreak-style': [ 2, 'unix' ],
  'lines-around-comment': [ 2, {
    beforeBlockComment: false,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: true,
    allowObjectStart: true,
    allowObjectEnd: true,
    allowArrayStart: true,
    allowArrayEnd: true
  }],
  'max-depth': [ 2, { max: 4 }],
  'max-len': [ 2, {
    code: 100,
    tabWidth: 2,
    comments: 100,
    ignoreComments: false,
    ignoreTrailingComments: false,
    ignoreUrls: true
  }],
  'max-nested-callbacks': [ 2, { max: 10 }],
  'max-params': [ 2, { max: 5 }],
  'max-statements': [ 2, { max: 25 }],
  'max-statements-per-line': [ 2, { max: 1 }],
  'new-cap': [ 2, {
    newIsCap: true,
    capIsNew: true,
    newIsCapExceptions: [],
    capIsNewExceptions: [],
    properties: true
  }],
  'new-parens': 2,
  'newline-after-var': [ 2, 'always' ],
  'newline-before-return': 2,
  'newline-per-chained-call': [ 2, { ignoreChainWithDepth: 2 }],
  'no-array-constructor': 2,
  'no-bitwise': 2,
  'no-continue': 0,
  'no-inline-comments': 2,
  'no-lonely-if': 2,
  'no-mixed-spaces-and-tabs': [ 2 ],
  'no-multiple-empty-lines': [ 2, { max: 1 }],
  'no-negated-condition': 0,
  'no-nested-ternary': 2,
  'no-new-object': 2,
  'no-plusplus': [ 2, { allowForLoopAfterthoughts: true }],
  'no-restricted-syntax': 0,
  'no-spaced-func': 2,
  'no-ternary': 0,
  'no-trailing-spaces': [ 2, { skipBlankLines: false }],
  'no-underscore-dangle': 2,
  'no-unneeded-ternary': 2,
  'no-whitespace-before-property': 2,
  'object-curly-spacing': [ 2, 'always', {
    objectsInObjects: false,
    arraysInObjects: false
  }],
  'object-property-newline': [ 2, { allowMultiplePropertiesPerLine: true }],
  'one-var': 0,
  'one-var-declaration-per-line': [ 2, 'always' ],
  'operator-assignment': [ 2, 'always' ],
  'operator-linebreak': [ 2, 'after' ],
  'padded-blocks': [ 2, 'never' ],
  'quote-props': [ 2, 'as-needed' ],
  quotes: [ 2, 'single', { avoidEscape: false, allowTemplateLiterals: true }],
  'require-jsdoc': 0,
  semi: [ 2, 'always' ],
  'semi-spacing': [ 2, { before: false, after: true }],
  'sort-vars': [ 2, { ignoreCase: true }],
  'space-before-blocks': [ 2, 'always' ],
  'space-before-function-paren': [ 2, { anonymous: 'always', named: 'always' }],
  'space-in-parens': [ 2, 'never' ],
  'space-infix-ops': [ 2, { int32Hint: false }],
  'space-unary-ops': [ 2, { words: true, nonwords: false }],
  'spaced-comment': [ 2, 'always' ],
  'wrap-regex': 0,

  'arrow-body-style': [ 2, 'as-needed' ],
  'arrow-parens': [ 2, 'as-needed' ],
  'arrow-spacing': [ 2, { before: true, after: true }],
  'constructor-super': 2,
  'generator-star-spacing': [ 2, { before: true, after: true }],
  'no-class-assign': 2,
  'no-confusing-arrow': 2,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 2,
  'no-new-symbol': 2,
  'no-restricted-imports': 0,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-var': 2,
  'object-shorthand': [ 2, 'always' ],
  'prefer-arrow-callback': [ 2, { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': [ 2, { destructuring: 'any', ignoreReadBeforeAssign: true }],
  'prefer-reflect': [ 2, { exceptions: []}],
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-yield': 2,
  'sort-imports': [ 2, {
    ignoreCase: true,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [ 'single', 'multiple', 'all', 'none' ]
  }],
  'template-curly-spacing': [ 2, 'never' ],
  'yield-star-spacing': [ 2, { before: true, after: true }],

  'extended/consistent-err-names': [ 2, 'prefix' ],

  'mocha/no-exclusive-tests': 2,
  'mocha/no-skipped-tests': 2,
  'mocha/no-pending-tests': 2,
  'mocha/handle-done-callback': 2,
  'mocha/no-synchronous-tests': 2,
  'mocha/no-global-tests': 2
};

module.exports = { parserOptions, env, globals, plugins, rules };
