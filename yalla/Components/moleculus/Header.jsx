import React, { useState } from "react";
import AnchorTag from "../atoms/Anchortag";
import "../../app/globals.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDesktopDropdownVisible, setDesktopDropdownVisible] = useState(false);
  const [isMobileDropdownVisible, setMobileDropdownVisible] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleDesktopDropdown = () => {
    setDesktopDropdownVisible(!isDesktopDropdownVisible);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(!isMobileDropdownVisible);
  };

  return (
    <div>
      <div className="full">
        {/* Desktop Navigation */}
        <ul className="gap-[50px] xl:flex xl:items-center xl:justify-center lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center sm:hidden hidden">
          <li>
            <AnchorTag variant="Header" href="/">Home</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="/about">About</AnchorTag>
          </li>
          <li className="relative">
            <AnchorTag
              variant="Header"
              href="#"
              onMouseEnter={toggleDesktopDropdown}
              onclick={toggleDesktopDropdown}
            >
              Services <IoIosArrowDown />
            </AnchorTag>
            {isDesktopDropdownVisible && (
              <ul className="dropdown absolute divide-y bg-white z-[9999] visible w-[230px] py-[10px] pr-[50px] pl-[30px]">
                <li><AnchorTag variant="Headerh" href="/acservice">AC Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/service">Other Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/tileservice">Tiles Fixing</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/electricservice">Electrician Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/plumbing">Handyman & Plumber</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/bathroom">Bathroom Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/painting">Painting Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/kitchen">Kitchen Service</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/celling">Gypsum Ceiling</AnchorTag></li>
              </ul>
            )}
          </li>
          <li>
            <AnchorTag variant="Header" href="/contactus">Contact</AnchorTag>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <span
          id="open"
          className={`block shadow-2xl cursor-pointer xl:hidden lg:hidden md:hidden sm:block`}
        >
          <button onClick={toggleNav}>
            <IoMdMenu fontSize={30} />
          </button>
        </span>
      </div>

      {/* Mobile Sidenav */}
      <div
        id="mySidenav"
        className={`sidenav fixed w-[250px] h-[100vh] transition-transform duration-500 ease-in-out bg-white z-[100000] xl:hidden lg:hidden md:hidden ${isNavOpen ? "right-0" : "right-[-250px]"}`}
      >
        <button onClick={toggleNav} className="hover:rotate-[180deg] transition">
          <RxCross1 className="text-black text-[30px]" />
        </button>

        <ul className="flex flex-col items-center justify-center mt-4">
          <li>
            <AnchorTag variant="Header" href="/" onClick={toggleNav}>Home</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="/about" onClick={toggleNav}>About</AnchorTag>
          </li>
          <li className="relative">
            <AnchorTag
              variant="Header"
              href="#"
              onClick={toggleMobileDropdown}
            >
              Services <IoIosArrowDown />
            </AnchorTag>
            {isMobileDropdownVisible && (
              <ul className="dropdown bg-white z-[9999] visible py-[10px] w-[100%]">
                <li><AnchorTag variant="Headerh" href="/acservice" onClick={toggleNav}>AC Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/service" onClick={toggleNav}>Other Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/tileservice" onClick={toggleNav}>Tiles Fixing</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/electricservice" onClick={toggleNav}>Electrician Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/plumbing" onClick={toggleNav}>Handyman & Plumber</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/bathroom" onClick={toggleNav}>Bathroom Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/painting" onClick={toggleNav}>Painting Services</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/kitchen" onClick={toggleNav}>Kitchen Service</AnchorTag></li>
                <li><AnchorTag variant="Headerh" href="/celling" onClick={toggleNav}>Gypsum Ceiling</AnchorTag></li>
              </ul>
            )}
          </li>
          <li>
            <AnchorTag variant="Header" href="/contactus" onClick={toggleNav}>Contact</AnchorTag>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
