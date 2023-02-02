import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateDashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      Navigate("/login");
    } else {
      fetch(
        "https://3001-valerieclai-authenticat-p661o2oof76.ws-us85.gitpod.io/api/token",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error)
          Navigate("/login")
        });
    }
  }, []);
  return <div>PrivateDashboard</div>;
};
