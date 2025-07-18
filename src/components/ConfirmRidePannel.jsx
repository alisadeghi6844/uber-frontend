import React from "react";

const ConfirmRidePannel = () => {
  return (
    <>
      <h2
        className="text-xl font-bold absolute top-3 left-3 flex justify-center w-full"
        // onClick={() => setVehiclePannel(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <h3 className="text-xl font-semibold my-4">
        درحال پیداکردن نزدیکترین سفیر
      </h3>
      <img
        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        alt=""
      />
    </>
  );
};

export default ConfirmRidePannel;
