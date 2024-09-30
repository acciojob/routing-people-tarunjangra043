import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, username: "Tarun Jangra" },
    { id: 2, username: "Sumit Jangra" },
    { id: 3, username: "Tannu Jangra" },
    { id: 4, username: "Ritik Jangra" },
    { id: 5, username: "Jonika Jangra" },
    { id: 6, username: "Deepak Jangra" },
    { id: 7, username: "Pankaj Jangra" },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
