// ✅ example GET request

function main() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.error("Error", xhr.status, xhr.statusText);
    }
  };
}
main();
