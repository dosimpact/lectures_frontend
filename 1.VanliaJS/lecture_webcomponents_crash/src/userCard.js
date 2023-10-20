// HTML template 생성
const template = document.createElement("template");
// 스타일 정의
// HTML 마크업 정의
// - HTML안의 변수는 this.shadowRoot.querySelector 을 이용해서 삽입
// - slot children 추가 (slot이라는 특별한이름의 태그를 사용한다.)
// - button event 추가
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px; 
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
  </style>

  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>

`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    // 컴포넌트의 state이다.
    this.showInfo = true;

    // 컴포넌트의 props을 template에 전달
    this.attachShadow({ mode: "open" }); // 쉐도우 돔 연결
    // html template 연결 (깊은:true-자손까지 전부 추가)
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // tag의 props을 template으로 삽입
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector(".info");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

    if (this.showInfo) {
      info.style.display = "block";
      toggleBtn.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      toggleBtn.innerText = "Show Info";
    }
  }

  // DOM 이 연결될때
  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => this.toggleInfo());
  }
  // DOM 이 해체될때
  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("user-card", UserCard);
