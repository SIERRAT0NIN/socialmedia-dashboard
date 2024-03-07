import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            This website is used to display all of my social medias using
            various API's and oAuth 2.0 Authorization.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white rounded-md hover:scale-125 ease-in-out duration-300">
            Checkout my latests posts
          </button>
        </div>
      </div>
    </div>
  );
};
