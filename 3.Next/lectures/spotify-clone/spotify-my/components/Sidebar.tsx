"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "@/components/Box";
import Library from "@/components/Library";
import SidebarItem from "@/components/SideBarItem";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ];
  }, [pathname]);

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item, key) => (
              <SidebarItem key={key} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto px-5 py-4">
          <Library />
        </Box>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
