module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
};
