module.exports = {
  plugins: ["jest", "testing-library", "jest-dom"],
  extends: [
    "eslint:recommanded",
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
};
