import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Album = ({ renderingType }) => {
  const [photo, setPhoto] = React.useState();
  const router = useRouter();
  console.log(router, "router", router.query.id);
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${router.query.id}`
      );
      const photo = await res.json();
      console.log("photo", photo);
      setPhoto(photo);
    };
    fetchData();
  }, [router.query.id]);
  if (!photo) {
    return <div>loading...</div>;
  }
  console.log("photo", photo);
  return (
    <section>
      {photo && (
        <>
          <div>renderingType : {renderingType || "ClientSideRender"}</div>
          <h3>Albums Detail {photo.id}</h3>
          <div>
            {photo.thumbnailUrl && (
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                width="500"
                height="500"
              />
            )}

            <div>{photo.title}</div>
          </div>
          <div>
            <Link href="/photos">go back</Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Album;
