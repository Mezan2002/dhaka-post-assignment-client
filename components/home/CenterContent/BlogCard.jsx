import { MessageCircle, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="bg-white cursor-pointer shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-4 -mt-16 md:-mt-20 bg-white px-6 pb-6 pt-4 z-10 shadow-sm">
        <div className="mb-4">
          <span className="text-[11px] text-gray-400 uppercase hover:text-black transition-colors duration-300">
            {blog.category}
          </span>
        </div>

        <Link href={blog.href}>
          <h2 className="text-xl md:text-[28px] font-extrabold text-black leading-[1.2] mb-5 transition-colors line-clamp-2">
            {blog.title}
          </h2>
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-gray-400 mb-6 font-medium">
          <div className="flex items-center gap-1">
            <span>by</span>
            <span className="text-black font-bold uppercase">
              {blog.author}
            </span>
            {blog.others && (
              <span className="italic font-normal lowercase">
                and {blog.others}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
            <Timer className="size-3.5" />
            <span>{blog.date}</span>
          </div>

          <div className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
            <MessageCircle className="size-3.5" />
            <span>{blog.comments}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {blog.excerpt}
        </p>

        <Link
          href={blog.href}
          className="inline-block px-4 py-1.5 border border-gray-300 text-[11px] text-gray-500 tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
