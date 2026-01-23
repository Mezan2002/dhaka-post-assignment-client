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
      <div className="max-w-[1380px] mx-auto bg-white_light min-h-screen grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 px-4 gap-4 py-10">
        {/* Left Side */}
        <aside className="order-2 md:order-3 lg:order-1 md:col-span-6 lg:col-span-2">
          <TheLatest />
          <Opinion />
        </aside>

        {/* Center */}
        <main className="order-1 md:order-1 lg:order-2 md:col-span-4 lg:col-span-4 flex flex-col gap-8">
          <TopBlogSlider />
          <div className="flex flex-col">
            {mainBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <BlogGrid />
        </main>

        {/* Right Side */}
        <aside className="order-3 md:order-2 lg:order-3 md:col-span-2 lg:col-span-2">
          {sidebarBlogs.map((blog) => (
            <MiniBlogCard key={blog.id} blog={blog} />
          ))}
        </aside>
      </div>
    </section>
  );
}
