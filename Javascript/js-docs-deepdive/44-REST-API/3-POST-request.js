// ✅ example POST request

function main() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  );
  xhr.onload = () => {
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.response);
    } else {
      console.error("Error", xhr.status, xhr.statusText);
    }
  };
}
main();
