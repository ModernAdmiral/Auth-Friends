import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriends from "./AddFriends";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  //   const [showLoading, setLoading] = useState(null);
  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(response => {
        setFriends(response.data);
        console.log("friends", friends);
      });
  };

  useEffect(() => {
    getData();

    // if (friends === []) {
    //   setLoading(false);
    // } else setLoading(true);

    console.log("friends status", friends === []);

    if (!localStorage.getItem("token")) {
      console.error("Please Login!!!");
    } else {
      console.info("We are logged in");
    }
  }, []);

  return (
    <>
      <h2>LOGGED IN!</h2>
      <AddFriends />
      {friends.length === 0 ? <h3>Loading...</h3> : <h3>Friend List</h3>}

      {friends.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>Age: {item.age}</h4>
          <h4>Email: {item.email}</h4>
        </div>
      ))}
    </>
  );
};

export default Friends;
