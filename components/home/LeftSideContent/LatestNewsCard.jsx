import Image from "next/image";
import Link from "next/link";

const LatestNewsCard = ({ image, title, href = "#" }) => {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 py-3 pr-2 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
    >
      <div className="relative h-fit flex-shrink-0 overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={title}
          width={100}
          height={72}
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xs lg:text-sm font-bold text-black leading-normal line-clamp-3 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default LatestNewsCard;
