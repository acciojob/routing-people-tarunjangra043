import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const data = [
    { id: 1, username: "Tarun Jangra" },
    { id: 2, username: "Sumit Jangra" },
    { id: 3, username: "Tannu Jangra" },
    { id: 4, username: "Ritik Jangra" },
    { id: 5, username: "Jonika Jangra" },
    { id: 6, username: "Deepak Jangra" },
    { id: 7, username: "Pankaj Jangra" },
  ];

  const user = data.find((data) => data.id === Number(id));

  return (
    <div>
      {user ? (
        <>
          <h1>User Details</h1>
          <p>Username: {user.username}</p>
          <p>ID: {user.id}</p>
        </>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default User;
