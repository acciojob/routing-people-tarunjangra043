import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "regenerator-runtime/runtime";
const Navbar = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responce.json();
        setUsersData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
