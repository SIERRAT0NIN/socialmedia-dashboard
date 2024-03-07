import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { LinkedInPost } from "./LinkedInPost";

// liPost = linkedInPost
const LinkedIn = ({ liPost }) => {
  return (
    <div className="bg-black w-80 h-80 rounded-2xl glass pattern align-middle flex justify-center ">
      <div className="text-black bg-white w-72 h-72 mx-auto align-middle flex justify-center mt-3 rounded-2xl shadow-lg">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 h-fit text-white p-2 rounded-md mt-4">
          <span className="flex justify-center">
            <Avatar isBordered color="primary" />
          </span>
          LinkedIn
        </span>
      </div>
      <div className="absolute translate-y-48 bg-zinc-300 text-white p-3 rounded-lg shadow-lg w-max ">
        <LinkedInPost />
      </div>
    </div>
  );
};

export default LinkedIn;
