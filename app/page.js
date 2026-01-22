import BlogCard from "@/components/home/CenterContent/BlogCard";
import BlogGrid from "@/components/home/CenterContent/BlogGrid";
import { mainBlogs } from "@/components/home/CenterContent/helpers";
import TopBlogSlider from "@/components/home/CenterContent/TopBlogSlider";
import Opinion from "@/components/home/LeftSideContent/Opinion";
import TheLatest from "@/components/home/LeftSideContent/TheLatest";
import { sidebarBlogs } from "@/components/home/RightSideContent/helpers";
import MiniBlogCard from "@/components/home/RightSideContent/MiniBlogCard";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="max-w-[1380px] mx-auto bg-white_light min-h-screen grid grid-cols-8 px-4 gap-4 py-10">
        {/* Left Side */}
        <aside className="col-span-2">
          <TheLatest />
          <Opinion />
        </aside>

        {/* Center */}
        <main className="col-span-4 flex flex-col gap-8">
          <TopBlogSlider />
          <div className="flex flex-col">
            {mainBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <BlogGrid />
        </main>

        {/* Right Side */}
        <aside className="col-span-2">
          {sidebarBlogs.map((blog) => (
            <MiniBlogCard key={blog.id} blog={blog} />
          ))}
        </aside>
      </div>
    </section>
  );
}
