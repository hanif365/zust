"use client";

import useStore from "@/store/store";
import React from "react";

const page = () => {
  // const count = useStore((state) => console.log("Hello count", state))
  const count = useStore((state) => state.count);
  const addCount = useStore((state) => state.addCount);

  console.log("Count page");
  return (
    <div>
      <h1>Count Page</h1>
      <p>{count}</p>
      <button className="p-2 m-5 bg-green-400 text-white" onClick={addCount}>Add Count</button>
    </div>
  );
};

export default page;
