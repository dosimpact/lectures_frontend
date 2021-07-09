interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

// Record
// page의 문자리터럴을 key로
// pageInfo의 객체를 value로 매핑해준다.
const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};
