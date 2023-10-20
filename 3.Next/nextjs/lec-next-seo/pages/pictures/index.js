import React from "react";
import HeadInfo from "../../components/HeadInfo";
import photosStyles from "../../styles/Photos.module.css";
import Image from "next/image";
import Link from "next/link";

const photos = ({ photos }) => {
  // console.log("pictures", photos);
  return (
    <div>
      <HeadInfo title={"pages/photos(dir)"} />
      <h2>Pictures</h2>
      <ul className={photosStyles.photos}>
        {photos &&
          Array.from(photos).map((photo) => {
            return (
              <Link key={photo.id} href={`/pictures/${photo.id}`}>
                <li>
                  <Image
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    width="150"
                    height="150"
                  />
                  <div>{photo.title}</div>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default photos;

export const getServerSideProps = async () => {
  console.log("🚀 getServerSideProps");
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};
