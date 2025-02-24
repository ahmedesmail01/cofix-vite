import ServicesHero from "../components/services/ServicesHero";
import WhatServices from "../components/services/WhatServices";
import ContactComp from "../components/home/ContactComp";

const Servises = () => {
  return (
    <div className="flex relative overflow-hidden flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      {/* <div className="blue_circle hidden lg:block absolute top-[300px] -left-[300px] -z-10" /> */}
      <div className="blue_circle hidden lg:block absolute top-[1000px] -right-[300px] -z-10" />
      {/* <div className="blue_circle hidden lg:block absolute top-[3000px] -left-[300px] -z-10" /> */}
      <ServicesHero />
      <WhatServices />
      <ContactComp />
    </div>
  );
};

export default Servises;
