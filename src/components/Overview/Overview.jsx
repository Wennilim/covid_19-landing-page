import React from "react";

const Overview = () => {
  return (
    <section id="overview">
      <div className=" flex flex-col md:flex-row w-full px-2 py-20">
        <div className="flex w-[50%]">
        <img
          src="/assets/virus.png"
          alt="overview"
          className="w-[100%] object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-[#FA5652] font-extrabold xl:text-[24px]">
            What is Covid-19 Alert
          </h2>
          <h1 className="text-2xl xl:text-[36px] xl:w-[90%] font-extrabold flex-wrap md:w-[300px] ">
            Coronavirus
          </h1>
          <h4 className="text-[14px] xl:text-[18px] xl:py-4">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response.
          </h4>
          <button className="rounded-3xl w-[120px] text-[12px] bg-[#FA5652] opacity-20  text-white font-semibold p-2 my-6">
            Learn More
          </button>
        </div>
      </div>
     
      </div>
    </section>

  );
};

export { Overview };
