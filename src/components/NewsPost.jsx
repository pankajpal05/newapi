import React from "react";

import { useGetNEWSAPIQuery } from "../services/news";

const NewsPost = () => {
  const { data, error, isLoading } = useGetNEWSAPIQuery("2");
  console.log(data);
  return (
    <div>
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2>The News Post</h2>
      </div>
    </div>
  );
};

export default NewsPost;
