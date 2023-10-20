import Head from "next/head";

export default function Post({post}) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </>
  );
}