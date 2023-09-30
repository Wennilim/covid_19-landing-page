import React from "react";

const Hero = () => {
  return (
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col p-8 lg:p-20 xl:p-30 md:w-[50%]">
          <h2 className="text-[#FA5652] font-extrabold xl:text-[24px]">
            COVID-19 Alert
          </h2>
          <h1 className="text-2xl xl:text-[36px] xl:w-[90%] font-extrabold flex-wrap md:w-[300px] ">
            Stay at Home quarantine To stop Corona virus
          </h1>
          <h4 className="text-[14px] xl:text-[18px] xl:py-4">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to.
          </h4>
          <button className="rounded-3xl w-[120px] text-[12px] bg-[#FB4C47] text-white font-semibold p-2 my-6">
            Let Us Help
          </button>
        </div>
        <div className="flex md:w-[60%]">
          <img
            src="/assets/home.png"
            alt="covid"
            className="w-[100%] object-cover"
          />
        </div>
      </div>
  );
};

export { Hero };
