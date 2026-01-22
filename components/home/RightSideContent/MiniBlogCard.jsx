import { Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MiniBlogCard = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="bg-white shadow-md flex flex-col mb-8 cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div
          className={`absolute top-4 left-4 ${blog.badgeColor} text-white text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider`}
        >
          {blog.category}
        </div>
      </div>

      <div className="p-6">
        <Link href={blog.href}>
          <h3 className="text-[17px] font-extrabold text-black leading-[1.3] mb-3 line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        <div className="flex items-center gap-x-3 text-[11px] text-gray-400 mb-4 font-medium">
          <div className="flex items-center gap-1">
            <span className="italic lowercase">by</span>
            <span className="text-black font-bold uppercase">
              {blog.author}
            </span>
          </div>
          <div className="flex items-center gap-1.5 pl-3 border-l border-gray-200">
            <Timer className="size-3.5" />
            <span>{blog.date}</span>
          </div>
        </div>

        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
      </div>
    </div>
  );
};

export default MiniBlogCard;
