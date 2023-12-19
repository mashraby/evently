"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks?.map((link) => {
        const isActive = link.route === pathname;
        return (
          <li 
            className={`${
                isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
            key={link.route}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
