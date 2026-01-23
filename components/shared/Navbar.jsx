"use client";
import { navItems } from "@/components/shared/helpers";
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white relative">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between px-7 py-4">
        <Menu
          strokeWidth={3}
          className="size-6 text-black cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
        <Image
          src="/images/logo_mobile.png"
          alt="Logo"
          width={150}
          height={40}
          className="h-8 w-auto object-contain"
        />
        <Search strokeWidth={3} className="size-6 text-black cursor-pointer" />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[70] transform transition-transform overflow-y-auto duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Search Bar */}
        <div className="p-5 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none text-sm shadow-inner text-gray-500"
            />
            <Search
              strokeWidth={3}
              className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-black"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-5 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-lg font-bold text-dark hover:text-black transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Logo */}
      <div className="hidden lg:block py-[34px] border-b border-black">
        <div className="px-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={184}
            height={100}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Navigations */}
      <div className="px-4">
        <div className="items-center justify-between py-2 hidden lg:flex">
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative group py-1">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-bold text-black whitespace-nowrap tracking-tight uppercase">
                      {item.label}
                    </span>
                    <ChevronDown className="size-4 text-gray-500 group-hover:text-black transition-colors" />
                  </div>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ease-out ${
                      item.dropdownItems.some(
                        (dropdown) => dropdown.href === pathname,
                      )
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                  <div className="absolute left-0 top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white border border-gray-200 shadow-lg min-w-52">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-black whitespace-nowrap relative group py-1 uppercase"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
