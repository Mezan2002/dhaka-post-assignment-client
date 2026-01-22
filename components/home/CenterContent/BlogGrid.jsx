import { Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { gridBlogs } from "@/components/home/CenterContent/helpers";

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {gridBlogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-md flex flex-col cursor-pointer"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500"
            />

            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${blog.categoryColor || "bg-red"} text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider`}
            >
              {blog.category}
            </div>
          </div>

          <div className="p-6 flex flex-col items-center text-center">
            <Link href={blog.href}>
              <h3 className="text-md font-bold text-black leading-snug mb-3 line-clamp-3">
                {blog.title}
              </h3>
            </Link>

            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
              <Timer className="size-3.5" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
