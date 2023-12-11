import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const allUsersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!allUsersResponse.ok) {
      throw new Error(`HTTP error! Status: ${allUsersResponse.status}`);
    }

    const allUsers = await allUsersResponse.json();
    console.log("Data fetched successfully:", allUsers);

    return NextResponse.json({ message: "Data found:", allUsers });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.status(500).json({ error: "Data not fetched correctly!" });
  }
};
