import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState(0);
  //   let count = 0;

  //   useEffect(() => {
  //     count++;
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data, count);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-500 text-white text-3xl p-4 m-4 text-center ">
      Github follower: {data.followers}
      <img src={data.avatar_url} width={200} height={200} alt="image" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return response.json();
};
