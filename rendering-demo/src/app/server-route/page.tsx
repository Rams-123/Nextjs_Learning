import { serverSidefunction } from "@/utils/server-utils";
import React from "react";

export default function ServerRoutePage() {
  const result = serverSidefunction();

  //   console.log(serverSidefunction());

  return <div>Server Page from: {result}</div>;
}

ServerRoutePage;
