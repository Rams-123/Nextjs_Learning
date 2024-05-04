import Link from "next/link";
import React from "react";

const NotfoundPage = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <p> Page is not Found</p>
      <Link href={"/"} className="border-b-[2px] border-b-gray-900 mt-2">
        Back to Home
      </Link>
    </div>
  );
};

export default NotfoundPage;
