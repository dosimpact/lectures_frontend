import React from "react";
import HeadInfo from "../../components/HeadInfo";
import photosStyles from "../../styles/Photos.module.css";
import Image from "next/image";
import Link from "next/link";

const Albums = ({ ...props }) => {
  // console.log("albumns", photos);
  const [photos, setPhotos] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
      );
      const photos = await res.json();
      setPhotos(photos);
    };
    fetchData();
  }, []);
  return (
    <div>
      <HeadInfo title={"pages/photos(dir)"} />
      <h2>Albums</h2>
      <ul className={photosStyles.photos}>
        {photos &&
          Array.from(photos).map((photo) => {
            return (
              <Link key={photo.id} href={`/albums/${photo.id}`}>
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

export default Albums;
