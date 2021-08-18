module.exports = function (content) {
  console.log("myWebpackMoudle loader excuted..");
  return content.replace("console.log(", "alert(");
};
