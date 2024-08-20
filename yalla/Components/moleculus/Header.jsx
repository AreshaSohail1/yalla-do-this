import React, { useState } from "react";
import AnchorTag from "../atoms/Anchortag";
import "../../app/globals.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <div className="full">
        <ul className="gap-[50px] xl:flex xl:items-center xl:justify-center lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center sm:hidden hidden">
          <li>
            <AnchorTag variant="Header" href="/">Home</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="/about">About</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="#" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              Services <IoIosArrowDown />
            </AnchorTag>
            {isDropdownVisible && (
              <ul className="dropdown absolute bg-white z-[9999] visible py-[10px] pr-[50px] pl-[30px]">
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

        <span
          id="open"
          className={`block shadow-2xl cursor-pointer xl:hidden lg:hidden md:hidden sm:block hidden`}
        >
          <button  onClick={toggleNav}>
            <IoMdMenu fontSize={30} />
          </button>
        </span>
      </div>

      <div
        id="mySidenav"
        className={`sidenav absolute w-[250px] h-[100vh] transition-transform 0.5s ease-ritht ease-out bg-white z-[100000] xl:hidden lg:hidden md:hidden  ${isNavOpen ? "block" : "hidden"} ${isNavOpen ? 'right-0' : 'right-[-250px]'} `}
      >
        <button onClick={toggleNav} className="hover:rotate-[180] transition">
          <RxCross1 className="text-black text-[30px]" />
        </button>

        <ul className="flex flex-col items-center justify-center">
          <li>
            <AnchorTag variant="Header" href="/">Home</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="/about">About</AnchorTag>
          </li>
          <li>
            <AnchorTag variant="Header" href="#" onClick={toggleDropdown}>
              Services <IoIosArrowDown />
            </AnchorTag>
            {isDropdownVisible && (
              <ul className="dropdown bg-white z-[9999] visible py-[10px] w-[100%]">
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
      </div>
    </div>
  );
}

export default Header;
