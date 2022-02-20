module.exports = {
  parser: "@babel/eslint-parser",
  rules: {
    'no-unused-vars': "warn",
  },
  extends: "eslint:recommended",
  // root: true,
  env: {
    browser: true,
    node: true
  },
  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  // },
  // parserOptions: {
    // parser: "@babel/eslint-parser",
  // }
}