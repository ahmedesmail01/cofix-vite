import ContactHero from "../components/contact/ContactHero";
import Contacts from "../components/contact/Contacts";
import ContactComp from "../components/home/ContactComp";

const Contact = () => {
  return (
    <div className="flex w-full relative overflow-hidden flex-col  row-start-2 items-center ">
      {/* <div className="blue_circle hidden lg:block absolute top-[300px] -left-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[1000px] -right-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[3000px] -left-[300px] -z-10" /> */}
      <ContactHero />
      <Contacts />
      <ContactComp />
    </div>
  );
};

export default Contact;
