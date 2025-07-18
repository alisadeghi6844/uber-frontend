import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.removeItem("token");
      navigate("/captain/login");
    })
    .catch((error) => {
      console.error(error);
    });

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
