import React, { useEffect } from "react";

const JobData = () => {
  const fetchposts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchposts();
  }, []);

  return <div>JobData </div>;
};

export default JobData;
