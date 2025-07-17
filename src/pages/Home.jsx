import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img className="w-16 ml-8" src="/images/logo.png" alt="" />
        <div className="bg-white py-5 px-10">
          <h2 className="text-2xl font-bold">شروع با همسفر</h2>
          <button>بزن بریم</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
