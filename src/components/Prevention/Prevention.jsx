import React from "react";

const Prevention = () => {
  return (
    <section id="prevention">
      <div className="flex flex-col gap-4 text-center py-10">
        <h2 className="text-[#FA5652] font-extrabold xl:text-[24px]">
          Covid-19
        </h2>
        <h1 className="text-2xl xl:text-[36px] font-extrabold">
          What Should We Do
        </h1>
        <p className="w-[50%] mx-auto py-2">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused
        </p>
      </div>
      <OddComp
        img="/assets/mask.png"
        number="01"
        title="Wear Masks"
        description="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
      />

      <EvenComp
        img="/assets/wash.png"
        number="02"
        title="Wash Your Hands"
        description='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals'
      />

      <OddComp
        img="/assets/tisu.png"
        number="03"
        title="Use Nose - Rag"
        description="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
      />

      <EvenComp
        img="/assets/hand.png"
        number="04"
        title="Avoid Contacts"
        description="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic"
      />
    </section>
  );
};

export { Prevention };

function OddComp({ img, number, title, description }) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-[50%] mx-auto">
      <div className="flex items-center gap-2">
        <div>
          <div className="flex gap-2">
            <div className="bg-[#FA5652] shadow-lg  bg-opacity-20 rounded-full p-2 h-fit text-[16px] font-bold text-[#FB4C47]">
              {number}
            </div>
            <div className="font-bold text-[28px] ">{title}</div>
          </div>
          <p className="flex text-[14px]  md:px-10">{description}</p>
        </div>
      </div>
      <img src={img} alt="image" className="w-[40%] py-10 self-center" />
    </div>
  );
}

function EvenComp({ img, number, title, description }) {
  return (
    <div className="flex flex-col md:flex-row w-[50%] gap-6 mx-auto">
      <img src={img} alt="image" className="w-[40%] py-10 self-center" />
      <div className="flex items-center gap-2">
        <div>
          <div className="flex gap-2">
            <div className="bg-[#FA5652] shadow-lg  bg-opacity-20 rounded-full p-2 h-fit text-[16px] font-bold text-[#FB4C47]">
              {number}
            </div>
            <div className="font-bold text-[28px] ">{title}</div>
          </div>
          <p className="flex text-[14px]  md:px-10">{description}</p>
        </div>
      </div>
    </div>
  );
}
