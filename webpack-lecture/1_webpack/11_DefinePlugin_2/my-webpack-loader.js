module.exports = function myWebpackLoader(content) {
  console.log("mywebpackloader 동작");
  //   return content;
  return content.replace("console.log(", "alert(");
};
