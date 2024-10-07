import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await responce.json();
        setUser(data.find((user) => user.id == id));
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <div>
      {user ? (
        <div>
          <h1>User Details</h1>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default User;
