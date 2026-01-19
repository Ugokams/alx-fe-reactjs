import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const user = useContext(UserContext); // ✅ Access context

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
