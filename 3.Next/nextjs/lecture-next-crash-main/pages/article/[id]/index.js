import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  //   const router = useRouter();
  // article/['id']
  //   const { id } = router.query;

  return (
    <div>
      <div>This is an article {article.id}</div>
      <h2>{article.title}</h2>
      <Link href="/">Go back</Link>
    </div>
  );
};

// SSR - dynamic route generate
// export const getServerSideProps = async (context) => {
//   //   console.log(context);
//   // context -> params -> id
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// SSG - dynamic route generate
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const article = await res.json();

  const ids = article.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
