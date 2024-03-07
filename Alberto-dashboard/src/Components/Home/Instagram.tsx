import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

const Instagram = () => {
  return (
    <div className="bg-black w-80 h-80 rounded-2xl glass pattern align-middle flex justify-center shadow-lg">
      <div className="text-black bg-white w-72 h-72 mx-auto align-middle flex justify-center mt-3 rounded-2xl shadow-md">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 h-fit text-white p-2 rounded-md mt-4">
          <span className="flex justify-center">
            <Avatar
              isBordered
              color="primary"
              src="https://i.imgur.com/K2xhZSZ.jpg"
            />
            <span className="ml-2 align-middle">@sierra_alberto_</span>
          </span>
          Instagram
        </span>
      </div>
    </div>
  );
};

export default Instagram;
