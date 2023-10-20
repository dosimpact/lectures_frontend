import React from "react";
import Seo from "../components/Seo";

const about = () => {
  return (
    <div>
      <Seo title="about" />
      <div className="title">about</div>
      <style jsx>{`
        .title {
          color: green;
        }
      `}</style>
    </div>
  );
};

export default about;
