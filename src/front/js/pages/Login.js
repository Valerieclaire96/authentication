import React from "react";
import { useState } from "react" ;
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(
      "https://3001-valerieclai-authenticat-cplhijbzn6p.ws-us84.gitpod.io/api/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((Response) => {
        return Response.json();
      })
      .then((result) => {
        if (typeof(result) == "string" && result.includes("Wrong email or password")) {
          setError("Wrong email or password");
        } else {
          console.log(result);
          // Navigate("/login");
          localStorage.setItem("jwt", result.access_token)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="container" onSubmit={handleLogin}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          {error}
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};
