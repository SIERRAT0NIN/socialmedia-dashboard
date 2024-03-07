import React from "react";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Instagram from "./Instagram";

import { useSocial } from "../Context/Context";

const Home = () => {
  const {
    linkedInPost,
    setLinkedInPost,
    twitterPost,
    setTwitterPost,
    instagramPost,
    setInstagramPost,
    mediumPost,
    setMediumPost,
  } = useSocial();

  return (
    <>
      <h1 className="justify-center flex m-3 text-black font-bold bg-white"></h1>
      <div className="flex justify-between m-10 p-10 rounded-lg bg-white">
        <div>
          <LinkedIn liPost={linkedInPost} />
        </div>
        <div>
          <Twitter twitterPost={twitterPost} />
        </div>
        <div>
          <Instagram instagramPost={instagramPost} />
        </div>
      </div>
    </>
  );
};

export default Home;
