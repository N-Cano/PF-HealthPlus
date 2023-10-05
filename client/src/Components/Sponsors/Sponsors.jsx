import sponsor1 from "../../assets/sponsorsImages/sponsor 1.png";
import sponsor2 from "../../assets/sponsorsImages/sponsor 2.png";
import sponsor3 from "../../assets/sponsorsImages/sponsor 3.png";
import sponsor4 from "../../assets/sponsorsImages/sponsor 4.png";
import sponsor5 from "../../assets/sponsorsImages/sponsor 5.png";
import "./Sponsors.css";

const sponsorsData = [
  { name: "sponsor 1", image: sponsor1 },
  { name: "sponsor 2", image: sponsor2 },
  { name: "sponsor 3", image: sponsor3 },
  { name: "sponsor 4", image: sponsor4 },
  { name: "sponsor 5", image: sponsor5 },
];

const Sponsors = () => {
  return (
    <div className="bg-black h-[255px] flex flex-wrap flex-col items-center justify-around pb-12 pt-2">
      <h2
        className="text-2xl h-6 pt-6 md:text-3xl font-semibold text-white mb-6 md:mb-8 xl:mb-10"
        style={{ fontFamily: "Rubik, sans-serif" }}>
        Our Sponsors
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
