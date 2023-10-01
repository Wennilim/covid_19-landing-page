import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col w-full py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <img
            src="/assets/map.png"
            alt="map"
            className="w-[70%] md:w-[50%] relative"
          />
          <div className="lg:absolute lg:right-[350px] flex flex-col bg-white w-[250px] p-4 h-[300px] shadow-lg rounded-lg">
            <h3 className="text-[20px] p-3">Live Reports</h3>
            <div className="flex flex-col gap-4">
              <ReportComp
                icon="/assets/china.png"
                country="China"
                number="81,340"
                upDown="/assets/down.png"
              />
              <ReportComp
                icon="/assets/us.png"
                country="USA"
                number="100,392"
                upDown="/assets/up.png"
              />
              <ReportComp
                icon="/assets/italy.png"
                country="Italy"
                number="86,498"
                upDown="/assets/up.png"
              />
              <ReportComp
                icon="/assets/spain.png"
                country="Spain"
                number="64,059"
                upDown="/assets/up.png"
              />
              <ReportComp
                icon="/assets/german.png"
                country="Germany"
                number="50,871"
                upDown="/assets/up.png"
              />
              <ReportComp
                icon="/assets/iran.png"
                country="Iran"
                number="32,332"
                upDown="/assets/up.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <div className="text-[#0C6C44] font-semibold text-[20px]">
            Have Question in mind?
          </div>
          <div className="text-[#0C6C44] font-bold text-[20px] py-2">
            Let us help you
          </div>

          <div className="flex relative bg-white shadow-lg md:w-[350px] p-4 py-2 rounded-3xl justify-between">
            <input
              placeholder="demo@example.com"
              className="self-center focus:border-none"
            />
            <button className="bg-[#FA5652] rounded-3xl text-white flex px-6 py-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };

function ReportComp({ icon, country, number, upDown }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <img src={icon} alt="map" className="w-8 h-5 rounded-md" />
        <span>{country}</span>
      </div>
      <div className="flex gap-2">
        <div>{number}</div>
        <img src={upDown} alt="map" className="w-2 h-2 self-center" />
      </div>
    </div>
  );
}
