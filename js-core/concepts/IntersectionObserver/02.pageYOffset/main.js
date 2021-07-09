const app = document.getElementById("app");
const updateOffectInfo = (e) => {
  app.innerHTML = `
    높이 : 
    window.innerHeight : ${window.innerHeight} 
    document.documentElement.clientHeight : ${document.documentElement.clientHeight}
    <br/>
    너비 :
    window.innerWidth : ${window.innerWidth}
    document.documentElement.clientWidth : ${document.documentElement.clientWidth}
    <br/>
    오프셋 : 
    window.pageYOffset : ${window.pageYOffset}

    `;
};
updateOffectInfo();
document.addEventListener("scroll", updateOffectInfo);
