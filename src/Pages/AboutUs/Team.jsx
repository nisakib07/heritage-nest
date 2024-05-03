import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const Team = () => {
  return (
    <div className="px-2 lg:px-0">
      <div className="flex items-center gap-2">
        <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
        <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
          Our Team
        </p>
      </div>

      <h2 className="text-lg lg:text-4xl font-bold mt-4">
        Discover the Faces Behind Our Success
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8">
        <img className="w-full" src={team1} alt="" />
        <img className="w-full" src={team2} alt="" />
        <img className="w-full" src={team3} alt="" />
      </div>
    </div>
  );
};

export default Team;
