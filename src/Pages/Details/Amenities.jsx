import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Amenities = () => {
  const { data: amenities = [], isLoading } = useQuery({
    queryKey: ["amenities"],
    queryFn: async () => {
      const res = await axios.get("/amenities.json");
      return res?.data;
    },
  });

  return (
    <div className="mt-14 bg-[#F9FAFB] p-6">
      <h3 className="text-2xl font-semibold">Amenities</h3>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {amenities &&
          amenities?.map((amenity) => (
            <div key={amenity?.id} className="flex items-center gap-4">
              <img src={amenity?.img} alt="" />
              <p>{amenity?.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Amenities;
