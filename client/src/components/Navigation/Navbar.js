// import files
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:w-[25%] bg-dark-200 font-body-primary fixed">
      {/* Main Container */}
      <div className="px-2 flex flex-col h-screen py-5 items-center w-full">
        {/* Logo */}
        <div className="text-xl lg:text-3xl font-black text-white text-center font-head-primary mb-10">
          <Link to="/home">ApplyJob</Link>
        </div>

        {/* Routes */}
        <div
          className="flex flex-col space-y-4 mx-auto"
        >
          {/* Home */}
          <Link to="/">
            {location.pathname === "/" ? (
              <div className="active-route">
                <div>Home</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="text-dark-600">Home</div>
              </div>
            )}
          </Link>

          {/* Application Process */}
            <Link to="/process">
              {location.pathname === "/process" ? (
                <div className="active-route">
                  <div>Application Process</div>
                </div>
              ) : (
                <div className="inactive-route">
                  <div className=" text-dark-600">Application Process</div>
                </div>
              )}
            </Link>

          {/* Eligibility Form */}
          <Link to="/eligibility">
            {location.pathname === "/eligibility" ? (
              <div className="active-route">
                <div>Eligibility Form</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="">Eligibility Form</div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
