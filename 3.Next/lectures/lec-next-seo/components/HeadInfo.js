import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta content={contents}></meta>
    </Head>
  );
};
HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;
