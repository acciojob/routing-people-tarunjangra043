import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = [
    { id: 1, name: "Tarun Jangra" },
    { id: 2, name: "Sumit Jangra" },
    { id: 3, name: "Leanne Graham" },
    { id: 4, name: "Ritik Jangra" },
    { id: 5, name: "Jonika Jangra" },
    { id: 6, name: "Deepak Jangra" },
    { id: 7, name: "Pankaj Jangra" },
  ];

  useEffect(() => {
    const fetchUser = () => {
      setTimeout(() => {
        const foundUser = data.find((data) => data.id === Number(id));
        setUser(foundUser);
        setLoading(false);
      }, 1000);
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <>
          <h1>User Details</h1>
          <p>Name: {user.name}</p>
          {/* <p>ID: {user.id}</p> */}
        </>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default User;
