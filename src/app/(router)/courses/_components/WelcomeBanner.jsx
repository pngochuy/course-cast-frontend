import Image from "next/image";
import React from "react";
import koala from "../../../../../public/koala.png";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src={koala} alt="koala" width={100} height={100} />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">Course Cast</span> Education
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real Life Project
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
