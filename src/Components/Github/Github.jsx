import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);

  //   const fetchGithub = async () => {
  //     const response = await axios.get("https://api.github.com/users/KaranMeghe");
  //     setData(response.data);
  //     console.log(data);
  //     return data;
  //   };

  //   useEffect(() => {
  //     fetchGithub();
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
    </div>
  );
};

export default Github;

export const githubLoader = async () => {
  const response = await axios.get("https://api.github.com/users/KaranMeghe");
  console.log(response.data);
  return response.data;
};
