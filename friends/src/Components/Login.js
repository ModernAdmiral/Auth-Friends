import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
const Login = props => {
  //   const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = e => {
    e.preventDefault();
    console.log("e", e);
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(response => {
        console.log("respone", response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/protected");
        setLoggedIn(true);
      })
      .catch(err => console.log("error", err));
  };

  //   useEffect(() => {
  //     sessionStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
  //   }, []);
  const handleChange = e => {
    console.log("handle change working");
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h2>{isLoggedIn ? "LOGGED IN" : "Please Log In!"}</h2>
      <form onSubmit={login}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <button type="submit" onSubmit={login}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
