import React from "react";
import { data } from "../data/myInfo";
const Info = ({ jsonData }) => {
  return (
    <div>
      <h1>this is about</h1>
      {jsonData.map((data) => (
        <div key={data.id}>
          <h3>{data.name}</h3>
          <ul>
            <h4>{data.email}</h4>
          </ul>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {

  if(!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      jsonData: data,
    },
  };
}
export default Info;