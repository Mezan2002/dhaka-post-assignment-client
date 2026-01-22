"use client";
import { navItems } from "@/components/shared/helpers";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="py-8 border-b border-black">
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
        <div className="flex items-center justify-between py-2">
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative group py-1">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-bold text-black whitespace-nowrap tracking-tight">
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
                  className="text-sm font-bold text-black whitespace-nowrap relative group py-1"
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
