import React from "react";

const LeftPane = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 lg:h-[95%] lg:fixed lg:px-14 lg:py-10 lg:rounded-lg bg-primary-blue justify-between items-center rounded-md p-5 space-y-4">
      {/* heading */}
      <div className="flex-col space-y-0 text-center">
        <div className="font-black text-2xl lg:text-6xl font-head-primary text-dark-100">
          ApplyJob
        </div>
        <div className="text-lg">Get your dream job!</div>
      </div>

      <div className="shadow-black shadow-xl hidden lg:flex h-2/5 w-full">
        <img src="https://www.trentondaily.com/wp-content/uploads/2023/03/Job-Hunting-Illustration-1.jpg" className="rounded-xl h-full w-full" />
      </div>

      <div className="font-bold text-medium lg:text-xl text-dark-100 leading-6 text-center">
        <i>
          Get your eligibiity check done and apply for your dream job now!
        </i>
      </div>
    </div>
  );
};

export default LeftPane;
