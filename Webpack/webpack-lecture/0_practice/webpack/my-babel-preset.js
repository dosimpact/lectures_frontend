module.exports = function mypreset() {
  return {
    plugins: [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-block-scoping',
      '@babel/plugin-transform-strict-mode',
    ],
  };
};
