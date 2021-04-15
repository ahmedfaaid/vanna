module.exports = {
  root: true,
  extends: ['prettier']
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2019,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
