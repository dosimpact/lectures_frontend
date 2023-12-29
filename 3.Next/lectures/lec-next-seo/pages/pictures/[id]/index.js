import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ photo, renderingType }) => {
  // console.log("pictures", photo);
  return (
    <section>
      <div>renderingType : {renderingType}</div>
      <h3>Pictures Detail {photo.id}</h3>
      <div>
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          width="500"
          height="500"
        />
        <div>{photo.title}</div>
      </div>
      <div>
        <Link href="/photos">go back</Link>
      </div>
    </section>
  );
};

export default index;

// 동적 라우팅 --> SSG 을 위해, 경로에 대한 정보를 context에서 가져온다.
export const getServerSideProps = async (context) => {
  console.log("🚀 getServerSideProps");
  // console.log("context", context);
  // context {
  //   ...
  //   query: { id: '10' },
  //   resolvedUrl: '/pictures/10',
  //   params: { id: '10' },
  //   locales: undefined,
  //   locale: undefined,
  //   defaultLocale: undefined
  // }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const photo = await res.json();
  // console.log("photo", photo);
  return {
    props: {
      photo,
      renderingType: "ServerSideRender",
    },
  };
};
