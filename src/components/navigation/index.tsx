'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "../ui/button";
import menu from "../../assets/hamburger-menu.svg";
import cross from "../../assets/Plus.svg";
import { useState } from "react";

/**
 * Navigation component renders the navigation bar for the application.
 * @returns Navigation component renders the navigation bar for the application.
 */
export default function Navigation() {
  const [open, setOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Consulting', href: '/' },
    { name: 'Ai Coach', href: '/' },
  ];

  /**
   * MobileNav component renders the mobile navigation bar.
   * @returns Mobile Navigation component.
   */
  const MobileNav = () => (
    <div className="max-w-container flex items-center justify-between py-[15px]">
      <div className="flex items-center">
        <Button
          title={<Image
            src={menu}
            alt="Logo"
            width={28}
            height={28}
          />}
          variant="secondary"
          customStyle="p-0 border-none"
          onClick={() => setOpen(!open)}
        />
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={24}
        />
      </div>
      <div>
        <Button
          title="Get started"
          variant="secondary"
          shape="rounded"
          customStyle="p-[10px] text-[15px]"
        />
      </div>

      <ul className={`w-1/2 fixed top-0 bottom-0 left-0 z-50 bg-white flex flex-col gap-[20px] px-4 py-8 duration-500 ${open ? 'scale-x-100' : 'scale-x-0'}`}>
        <Button
          title={<Image
            src={cross}
            alt="Cross"
            width={28}
            height={28}
          />}
          variant="secondary"
          customStyle="p-[5px] absolute right-1 top-1 rotate-45 border-none"
          onClick={() => setOpen(!open)}
        />
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={24}
        />
        {navLinks.map((link, index) => (
          <li key={index} className="text-[16px] font-semibold group">
            <a href={link.href} className="text-[#020407]">{link.name}</a>
            <hr className="w-full border-[1.5px] border-[#b4b4b4] duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
          </li>
        ))}
      </ul>
    </div>
  );

  /**
   * DesktopNav component renders the desktop navigation bar.
   * @returns Desktop Navigation component.
   */
  const DesktopNav = () => (
    <nav className="max-w-container flex items-center justify-between py-[30px]">
      <div className="flex items-center gap-[74px]">
        <Image
          src={logo}
          alt="Logo"
          width={238.56}
          height={48}
        />
        <ul className="flex items-center gap-[33px]">
          {navLinks.map((link, index) => (
            <li key={index} className="text-[16px] font-semibold group">
              <a href={link.href} className="text-[#020407] font-plusJakartaSans">{link.name}</a>
              <hr className="w-full border-[1.5px] border-[#b4b4b4] duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          title="Get started"
          variant="secondary"
          shape="rounded"
          customStyle="px-[18px] py-[13px] text-[16px]"
        />
      </div>
    </nav>
  );

  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </>
  );
};
