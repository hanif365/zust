"use client";

import useStore from "@/store/store";
import React from "react";

const page = () => {
  // const count = useStore((state) => console.log("Hello count", state))
  const {fruit, addFruit} = useStore();
//   const addFruit = useStore((state) => state.addFruit);
  const count = useStore((state) => state.count);

  console.log("Fruit page");
  return (
    <div>
      <h1>Fruit Page</h1>
      <p>Fruit: {fruit}</p>
      <p>{count}</p>
      <button className="p-2 m-5 bg-green-400 text-white" onClick={addFruit}>Add Fruit</button>
    </div>
  );
};

export default page;
