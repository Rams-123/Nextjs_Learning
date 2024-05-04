import { delay } from "@/lib/utils";
import React from "react";

const Header = async () => {
  await delay(1000);
  return (
    <div className="h-60 my-5 rounded-xl p-10 bg-gray-500 text-white">
      <h1 className="text-3xl font-bold"> Parallel Route</h1>
    </div>
  );
};

export default Header;
