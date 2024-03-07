import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
} from "@nextui-org/react";
import { LinkedInPost } from "./LinkedInPost";

// liPost = linkedInPost
const LinkedIn = ({ liPost }) => {
  return (
    <div className="bg-black w-80 h-80 rounded-2xl glass pattern align-middle flex justify-center ">
      <div className="text-black bg-white w-72 h-72 mx-auto align-middle flex justify-center mt-3 rounded-2xl shadow-lg">
        <span className="bg-gradient-to-r from-yellow-200 to-blue-500 h-fit text-white p-4 rounded-md mt-4">
          <span className="text-gray-600 p-1 rounded-lg justify-center flex w-fit  glass mx-auto">
            LinkedIn
          </span>
          <span className="flex justify-center">
            <Popover showArrow placement="bottom" className="w-60">
              <PopoverTrigger>
                <User
                  as="button"
                  name="Alberto Sierra"
                  className="transition-transform"
                  avatarProps={{
                    src: "https://media.licdn.com/dms/image/D5603AQFNh19qyrhCSw/profile-displayphoto-shrink_800_800/0/1686699501255?e=1715212800&v=beta&t=QD8zl5U0QAkPyzjdQZwGKRDous8GdKjByLPjZiKZLEA",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent className="p-2 pretty">
                <Avatar
                  className="mt-2 z-10"
                  isBordered
                  color="primary"
                  src="https://media.licdn.com/dms/image/D5603AQFNh19qyrhCSw/profile-displayphoto-shrink_800_800/0/1686699501255?e=1715212800&v=beta&t=QD8zl5U0QAkPyzjdQZwGKRDous8GdKjByLPjZiKZLEA"
                />
                <span className="ml-2 align-middle text-black bg-white p-1 rounded-xl opacity-80">
                  <i class="fa-brands fa-linkedin-in"></i> @sierra_alberto_
                </span>
              </PopoverContent>
            </Popover>
          </span>
        </span>
      </div>
      <div className="absolute translate-y-48 bg-zinc-300 text-white p-3 rounded-lg shadow-lg w-60 h-max">
        <LinkedInPost />
      </div>
    </div>
  );
};

export default LinkedIn;
