import React, { Fragment } from "react";
import { Tilt } from "react-tilt";

export const contagionLinks = [
  {
    title: "Air Transmission",
    description:
      "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify",
    img: "/assets/rub.png",
  },
  {
    title: "Human Contacts",
    description:
      "Washing your hands is one of thesimplest ways you can protect",
    img: "/assets/shake.png",
  },
  {
    title: "Contained Objects",
    description:
      "Use the tissue while sneezing,In this way, you can protect your droplets.",
    img: "/assets/coke.png",
  },
];

const Contagion = () => {
  return (
    <section id="contagion">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-[#FA5652] font-extrabold xl:text-[24px]">
          Covid-19
        </h2>
        <h1 className="text-2xl xl:text-[36px] font-extrabold">Contagion</h1>
        <p className="w-[50%] mx-auto py-2">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {contagionLinks.map((link) => (
          <Tilt className="flex w-[250px] bg-white rounded-2xl shadow-lg mx-4 p-4">
            <div className="flex flex-col text-center items-center">
              <img
                src={link.img}
                alt="covid"
                className="w-[40%] flex self-center object-cover py-4"
              />
              <h2 className="font-bold text-[24px]">{link.title}</h2>
              <p className="py-2 text-[14px] w-[80%]">{link.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export { Contagion };
