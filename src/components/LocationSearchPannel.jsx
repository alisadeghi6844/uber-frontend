import React from "react";
const locations = [
  "خیابان 24 , کوچه ممدی بن بست باقر",
  "خیابان 24 , کوچه ممدی بن بست باقر",
  "خیابان 24 , کوچه ممدی بن بست باقر",
  "خیابان 24 , کوچه ممدی بن بست باقر",
  "خیابان 24 , کوچه ممدی بن بست باقر",
  "خیابان 24 , کوچه ممدی بن بست باقر",
];
const LocationSearchPannel = ({
  vehiclePannel,
  setVehiclePannel,
  pannel,
  setPannel,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {locations.map((location, idx) => (
        <div
          onClick={() => {
            setVehiclePannel(true);
            setPannel(false);
          }}
          key={idx}
          className="flex items-center justify-start gap-4 p-3 rounded-xl"
        >
          <h2 className="bg-[#eee] rounded-full h-10 w-10 flex items-center justify-center">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;
