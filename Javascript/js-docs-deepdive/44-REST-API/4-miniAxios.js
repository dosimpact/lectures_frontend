// ✅ example miniAxios

class miniAxios {
  async get(url) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status === 200) {
          res({ xhr, data: JSON.parse(xhr.response) });
        } else {
          console.error("Error", xhr.status, xhr.statusText);
          rej(xhr);
        }
      };
    });
  }

  async post(url, body) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      xhr.send(JSON.stringify(body));
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          res({ xhr, data: JSON.parse(xhr.response) });
        } else {
          console.error("Error", xhr.status, xhr.statusText);
          rej(xhr);
        }
      };
    });
  }
}

function main() {
  const fetchData = async () => {
    const res = await new miniAxios().get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(res);
    const postRes = await new miniAxios().post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
    console.log(postRes);
  };
  fetchData();
}
main();
