import React from "react";

const VehiclePannel = ({ setVehiclePannel, setConfirmRidePannel }) => {
  const vehicles = [
    {
      title: "سفر عادی",
      img: "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg",
      capacity: 4,
      eta: "2 دقیقه تا رسیدن",
      location: "خیابان امام خمینی",
      price: "50 تومان",
    },
    {
      title: "سفر با موتور",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
      capacity: 1,
      eta: "4 دقیقه تا رسیدن",
      location: "خیابان امام خمینی",
      price: "70 تومان",
    },
    {
      title: "سفر با سه چرخه",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
      capacity: 3,
      eta: "5 دقیقه تا رسیدن",
      location: "خیابان امام خمینی",
      price: "20 تومان",
    },
  ];

  return (
    <>
      <h2
        className="text-xl font-bold absolute top-3 left-3 flex justify-center w-full"
        onClick={() => setVehiclePannel(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <h3 className="text-xl font-semibold my-3">انتخاب نوع وسیله</h3>
      <div className="flex flex-col gap-3">
        {vehicles.map((vehicle, idx) => (
          <div
            onClick={() => {
              setVehiclePannel(false);
              setConfirmRidePannel(true);
            }}
            key={idx}
            className="flex items-center justify-between w-full rounded-xl p-3 border-2 border-gray-100 active:border-black"
          >
            <img className="h-14" src={vehicle.img} alt="" />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                {vehicle.title}{" "}
                <span>
                  <i className="ri-user-3-fill"></i>
                  {vehicle.capacity}
                </span>
              </h4>
              <h5 className="font-medium text-sm">{vehicle.eta}</h5>
              <p className="text-xs text-gray-600">{vehicle.location}</p>
            </div>
            <h2 className="font-bold">{vehicle.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default VehiclePannel;
