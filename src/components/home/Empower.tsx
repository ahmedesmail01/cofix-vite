"use client";
import Management from "./../../../public/images/manage program.svg";
import Organizational from "./../../../public/images/organization Structure.svg";
import Workplace from "./../../../public/images/people working in work place.svg";
import Gap from "./../../../public/images/Analysis.svg";
import Governance from "./../../../public/images/Governance Implementation.svg";
import Performance from "./../../../public/images/organization performance on white background.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Service {
  key: string;
  img: string; // Vite typically resolves imported images to a string path
}

const ServiceCard = ({ service }: { service: Service }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm">
      <img
        src={service.img}
        alt={t(`${service.key}.title`)}
        width={400}
        height={250}
        className="w-full h-[200px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 text-[#333]">
        {t(`Empower.services.${service.key}.title`)}
      </h3>
      <p className="text-gray-600 text-sm">
        {t(`Empower.services.${service.key}.description`)}
      </p>
    </div>
  );
};

const Empower = () => {
  // const [showAll, setShowAll] = useState(false);

  const { t } = useTranslation();

  const displayedServices = [
    {
      key: "managementFitness",
      img: Management,
    },
    {
      key: "restructuring",
      img: Organizational,
    },
    {
      key: "workplace",
      img: Workplace,
    },
    {
      key: "gapAnalysis",
      img: Gap,
    },
    {
      key: "governance",
      img: Governance,
    },
    {
      key: "performance",
      img: Performance,
    },
  ];

  // const additionalServices = ["recruitment", "salesLogistics", "training"];

  // const displayedServices = showAll
  //   ? [...initialServices, ...additionalServices]
  //   : initialServices;

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 lg:px-[90px] py-12">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
        <div>
          <div className="text-center text-[#159861] text-base font-semibold">
            {t("Empower.sectionTitle")}
          </div>
          <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold leading-[68px]">
            {t("Empower.mainTitle")}
          </div>
        </div>
        <bdi className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-xl font-normal leading-[30px]">
          {t("Empower.subtitle")}
        </bdi>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>

      <Link
        to={"/services"}
        className="lg:py-4 lg:mt-[48px] py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl lg:text-xl text-white"
      >
        {t("Empower.seeMoreButton")}
      </Link>
    </section>
  );
};

export default Empower;
