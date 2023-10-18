import { useTranslation } from "react-i18next";
import "./Sponsors.css";

const sponsorsData = [
  { name: "sponsor 1", image: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553464/assets/sponsorsImages/sponsor_1_b9go7d.png' },
  { name: "sponsor 2", image: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/sponsorsImages/sponsor_2_kfadpk.png' },
  { name: "sponsor 3", image: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553469/assets/sponsorsImages/sponsor_3_vuqjm4.png' },
  { name: "sponsor 4", image: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553464/assets/sponsorsImages/sponsor_4_evpbch.png' },
  { name: "sponsor 5", image: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553464/assets/sponsorsImages/sponsor_5_m890cq.png' },
];

const Sponsors = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black h-[255px] flex flex-wrap flex-col items-center justify-around pb-12 pt-2">
      <h2
        className="text-2xl h-6 pt-6 md:text-3xl font-semibold text-white mb-6 md:mb-8 xl:mb-10"
        style={{ fontFamily: "Rubik, sans-serif" }}>
        {t("LANDING PAGE.SPONSORS.OUR SPONSORS")}
      </h2>
      <div className="grid grid-cols-5 mr-[200px]">
        <section>
          {sponsorsData.map((sponsor, index) => (
            <img key={index} src={sponsor.image} alt={sponsor.name} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
