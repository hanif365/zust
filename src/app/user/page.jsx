"use client";

import useStore from "@/store/store";
import React, { useState } from "react";

const Page = () => {
  const { user, updateUser } = useStore();
//   const { user, updateUser } = useStore((state) => ({user: state.user, updateUser: state.updateUser}));
  const { name, address: { city } } = user;
  const [userInfo, setUserInfo] = useState({ name: '', city: '' });

  console.log("User coming from Store: ", user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info Passed: ", userInfo);
    updateUser(userInfo);
  };

  return (
    <div className="m-10 bg-green-300 p-10">
      <h1>Count Page</h1>
      <p>{name}</p>
      <p>{city}</p>

      <form onSubmit={handleSubmit} className="m-10 space-x-5 space-y-5">
        <input
          value={userInfo.name}
          onChange={handleChange}
          type="text"
          placeholder="name"
          name='name'
        />
        <input
          value={userInfo.city}
          onChange={handleChange}
          type="text"
          placeholder="city"
          name="city"
        />
        <button type="submit" className="bg-red-500 text-white px-10 py-2 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default Page;
