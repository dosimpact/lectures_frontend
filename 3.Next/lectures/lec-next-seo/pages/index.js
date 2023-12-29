import React from "react";
import Image from "next/image";
import HeadInfo from "../components/HeadInfo";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log("posts", posts);
  return (
    <div>
      <HeadInfo title={"my blogs"} />
      <h2>Welcome</h2>
      {posts &&
        Array.from(posts).map((post, key) => (
          <div key={key}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
        ))}
    </div>
  );
}

// getServerSideProps 을 export하게 되면 이 페이지는 SSR로 변경된다.
// SSR시 필요한 props을 마련하는 함수
export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// getStaticProps 을 export하면, 이 페이지는 SSG 대상이 된다.
// SSR과 같이 사용할 수 없다(애초에 다른 목적이므로)
// increment static regeneration
// -  SSG로 빌드하고, 언제 다시 최신데이터로 리빌딩 할건가 ?

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 20, // 20sec 마다 SSG 생성
//   };
// };
