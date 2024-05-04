"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  return (
    <div className=" w-full flex px-5 flex-col gap-10 mt-10 border-2 rounded-md">
      <input
        value={name}
        className=" w-full border-2 bg-slate-400 text-center items-center justify-center"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name..."
      />
      <p className=" w-fit max-w-7xl mx-auto bg-blue-300">My Name is {name}</p>
    </div>
  );
};

export default Dashboard;
