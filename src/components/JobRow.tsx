"use client";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function JobRow() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const hadleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-sm relative">
      <div
        className="absolute top-5 cursor-pointer right-4"
        onClick={hadleClick}
      >
        {isClicked ? (
          <FaHeart size={15} color="#C80036" />
        ) : (
          <FaRegHeart size={15} />
        )}
      </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <img
            className="size-12"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt=""
          />
        </div>
        <div className="grow sm:flex">
          <div className="grow">
            <div className="text-gray-500 text-sm">spotify</div>
            <div className="font-bold text-lg mb-1">Backend Dev</div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Remote &middot; New York, US &middot; Full-time
            </div>
          </div>
          <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
        </div>
      </div>
    </div>
  );
}
