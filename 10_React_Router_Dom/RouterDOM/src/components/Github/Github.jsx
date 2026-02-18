import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
*/
  return (
    <div className="text-2xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="gitpic " width={200} />
    </div>
  );
}
export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
