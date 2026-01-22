import LatestNewsCard from "@/components/home/LeftSideContent/LatestNewsCard";
import { latestNews } from "@/components/home/LeftSideContent/helpers";

const TheLatest = () => {
  return (
    <div className="shadow-md bg-white px-5 pb-5 pt-4 border border-gray-100">
      <div className="relative mb-2">
        <h4 className="text-base font-bold text-black pb-2">The Latest</h4>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-black"></div>
      </div>

      <div className="flex flex-col">
        {latestNews.map((news) => (
          <LatestNewsCard
            key={news.id}
            title={news.title}
            image={news.image}
            href={news.href}
          />
        ))}
      </div>
    </div>
  );
};

export default TheLatest;
