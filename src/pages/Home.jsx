import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmRidePannel from "../components/ConfirmRidePannel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const pannelRef = useRef(null);
  const vehicleRef = useRef(null);
  const confirmRideRef = useRef(null);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  useGSAP(
    function () {
      if (pannel) {
        gsap.to(pannelRef.current, {
          height: "74%",
          opacity: 1,
          paddingLeft: 20,
          paddingRight: 20,
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0",
          opacity: 0,
          paddingLeft: 0,
          paddingRight: 0,
        });
      }
    },
    [pannel]
  );

  useGSAP(
    function () {
      if (vehiclePannel) {
        gsap.to(vehicleRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePannel]
  );

  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePannel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="/images/logo.png"
        alt=""
      />
      <div className="h-screen w-screen bg-red-500"></div>
      <div className="bg-white flex flex-col justify-end h-screen absolute w-full top-0">
        <div className="h-[26%] p-6 bg-white relative">
          <h5
            onClick={() => setPannel(false)}
            className={`absolute top-3 left-3 text-2xl font-bold ${
              pannel ? "block" : "hidden"
            }`}
          >
            {" "}
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">به مقصد برو</h4>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="line absolute h-18 w-1 top-[35%] rounded-full bg-gray-800 right-10"></div>
            <input
              onClick={() => setPannel(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg my-4 w-full"
              type="text"
              placeholder="مبدا خود را وارد کنید"
            />
            <input
              onClick={() => setPannel(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="مقصد خود را وارد کنید"
            />
          </form>
        </div>
        <div ref={pannelRef} className={`h-0 opacity-0 bg-white`}>
          <LocationSearchPannel
            vehiclePannel={vehiclePannel}
            setVehiclePannel={setVehiclePannel}
            pannel={pannel}
            setPannel={setPannel}
          />
        </div>
      </div>
      <div
        ref={vehicleRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full"
      >
        <VehiclePannel setConfirmRidePannel={setConfirmRidePannel} setVehiclePannel={setVehiclePannel} />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full"
      >
        <ConfirmRidePannel />
      </div>
    </div>
  );
};

export default Home;
