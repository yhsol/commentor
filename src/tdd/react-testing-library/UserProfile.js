import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile({ id }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async id => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) return <div>loading..</div>;

  if (!userData) return null;
  const { username, email } = userData;

  return (
    <div>
      <div>{`username: ${username}`}</div>
      <div>{`email: ${email}`}</div>
    </div>
  );
}

export default UserProfile;
