import { opinions } from "@/components/home/LeftSideContent/helpers";
import OpinionCard from "@/components/home/LeftSideContent/OpinionCard";

const Opinion = () => {
  return (
    <div className="shadow-md bg-white px-5 pb-5 pt-4 border border-gray-100 mt-8">
      <div className="relative mb-2">
        <h4 className="text-base font-bold text-black pb-2 tracking-wide">
          Opinion
        </h4>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-black"></div>
      </div>

      <div className="flex flex-col">
        {opinions.map((opinion) => (
          <OpinionCard
            key={opinion.id}
            title={opinion.title}
            href={opinion.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Opinion;
