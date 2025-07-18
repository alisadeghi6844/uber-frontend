import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-[url('/images/Start.png')] bg-cover bg-no-repeat bg-center">
        <img className="w-16 ml-8" src="/images/logo.png" alt="" />
        <div className="bg-white px-4 pt-4 pb-7">
          <h2 className="text-2xl font-bold">شروع با همسفر</h2>
          <Link to='/user/login' className="w-full bg-black text-white py-3 rounded mt-2 text-lg flex items-center justify-center mt-6">
            بزن بریم
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
