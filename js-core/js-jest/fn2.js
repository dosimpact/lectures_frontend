const someCallback = (callback) => {
  const name = "dodo";
  setTimeout(() => callback(name), 1500);
};

module.exports = { someCallback };
