import React from "react";

const Symptoms = () => {
  return (
    <section id="symptoms">
      <div className="flex flex-col gap-4 text-center py-10">
        <h2 className="text-[#FA5652] font-extrabold xl:text-[24px]">
          Covid-19
        </h2>
        <h1 className="text-2xl xl:text-[36px] font-extrabold">Symptoms</h1>
        <p className="w-[50%] mx-auto py-2">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </p>
        <img
          src="/assets/symptom.png"
          alt="symptoms"
          className="w-[40%] flex self-center object-cover py-4"
        />
      </div>{" "}
    </section>
  );
};

export { Symptoms };
