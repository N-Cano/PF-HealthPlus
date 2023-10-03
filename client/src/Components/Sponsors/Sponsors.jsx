import sponsor1 from "../../assets/sponsorsImages/sponsor 1.png";
import sponsor2 from "../../assets/sponsorsImages/sponsor 2.png";
import sponsor3 from "../../assets/sponsorsImages/sponsor 3.png";
import sponsor4 from "../../assets/sponsorsImages/sponsor 4.png";
import sponsor5 from "../../assets/sponsorsImages/sponsor 5.png";

const sponsorsData = [
  { name: "sponsor 1", image: sponsor1 },
  { name: "sponsor 2", image: sponsor2 },
  { name: "sponsor 3", image: sponsor3 },
  { name: "sponsor 4", image: sponsor4 },
  { name: "sponsor 5", image: sponsor5 },
];

const Sponsors = () => {
  return (
    <div className="bg-blue-950 h-[250px] flex flex-col items-center justify-center">
      {/* SECCCIÓN DE SPONSORS */}
      <h2 className="text-2xl mr-[100px] font-semibold text-white mb-6">
        Our Sponsors
      </h2>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className="text-center">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="mx-1 h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
