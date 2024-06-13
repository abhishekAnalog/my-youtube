import React, { useEffect, useState } from "react";
import { videoApi } from "./constant/api";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await fetch(videoApi);
    const json = await data.json();
    setData(json?.items);
  };
  console.log(data);
  return (
    <div className="flex flex-wrap">
      {data?.length > 0 &&
        data.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
