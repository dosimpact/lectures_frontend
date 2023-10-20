import Head from "next/head";
import React from "react";

interface ISeo {
  title: string;
}

const Seo: React.FC<ISeo> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Pratices</title>
    </Head>
  );
};

export default Seo;
