const getUser = async () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      //   res("complete");
      //   rej(new Error("fail"));
      throw new Error("getUser 에러 발생!");
    }, 400);
  });

function main() {
  const test = async () => {
    // new Promise((resolve, reject) => {
    //   throw new Error("에러 발생!");
    // }).catch(console.log); // Error: 에러 발생!

    // getUser().catch(console.log);
    try {
      const res = await getUser();
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };
  test();
}
main();
