"use client";

import useStore from "@/store/store";
import useCounter from "@/store/useCounter";
import React from "react";

const Home = () => {
  const { user, updateUser } = useStore();

  const { count, age, increment, decrement, reset } = useCounter();

  console.log(user);

  const handleUpdateUser = () => {
    const newUserData = {
      name: "Updated Name",
      address: {
        city: "Updated City",
      },
      hobbies: ["New Hobby"],
    };

    updateUser(newUserData);
  };

  return (
    <div>
      <h1>User Info</h1>
      <p>{count}</p>
      <p>{age}</p>

      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Street: {user.address.street}</p>
      <p>Zip: {user.address.zip}</p>
      <p>City: {user.address.city}</p>
      <p>Hobbies: {user.hobbies.join(", ")}</p>
      <button className="bg-green-400 m-2 p-2" onClick={handleUpdateUser}>Update User</button>
      <button className="bg-green-400 m-2 p-2" onClick={() => increment(5)}>Increment Count</button>
      <button className="bg-green-400 m-2 p-2" onClick={() => decrement(5)}>Decrement Count</button>
      <button className="bg-green-400 m-2 p-2" onClick={() => reset()}>Reset Count</button>
    </div>
  );
};

export default Home;
