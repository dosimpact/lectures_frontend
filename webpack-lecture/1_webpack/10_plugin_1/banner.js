const childProcess = require("child_process");

module.exports = function banner() {
  const date = new Date().toLocaleString();
  const hash = childProcess.execSync("git rev-parse --short HEAD");
  const name = childProcess.execSync("git config user.name");

  return `
        Build Date: ${date}
        Commit Version: ${hash}
        Author: ${name}`;
};
