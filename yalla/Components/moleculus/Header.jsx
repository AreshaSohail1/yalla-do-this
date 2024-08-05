import React from "react";
import AnchorTag from "../atoms/Anchortag";
import "../../app/globals.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const open = function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "block"
    document.getElementById("mySidenav").style.opacity = "100%"
    document.getElementById("mySidenav").style.right = "0"
    document.getElementById("open").style.opacity = "0"
    console.log("open is clicked");
  };

  const close = function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.display = "hidden"
    document.getElementById("open").style.opacity = "100%"
    document.getElementById("mySidenav").style.right = "-250px"

    document.getElementById("mySidenav").style.opacity = "0%"


    console.log("close is clicked");
  };

  return (
    <div>
      <div className="full">
        <ul className=" gap-[50px] xl:flex xl:block xl:items-center xl:justify-center lg:block lg:items-center lg:justify-center lg:flex md:block md:flex md:items-center md:justify-center sm:hidden  hidden">
          <li>
            {" "}
            <AnchorTag variant="Header" href="/">
              Home
            </AnchorTag>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header" href="/about">
              About
            </AnchorTag>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header" href="/service">
              Services <IoIosArrowDown />

            </AnchorTag>
            <ul className='dropdown  absolute bg-white opacity-5 z-[9999] invisible py-[10px] pr-[50px] pl-[30px]'>
              <li><AnchorTag variant='Headerh' href='/acservice'> AC Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/service'>over Servcies</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/tileservice'>Tiles Fixing</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/electricservice'>Electrician Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/plumbing'>Handyman & Plumber</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='bathroom'>Bathroom Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/painting'>Painting Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/kitchen'>Kitchen Service</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/celling'>Gypsum Ceiling</AnchorTag></li>
            </ul>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header" href="/contactus">
              Contact
            </AnchorTag>
          </li>
        </ul>

        <span
          id="open"
          className="block shadow-2xl cursor-pointer xl:hidden lg:hidden md:hidden sm:block "
        >
          <button onClick={open} >
            <IoMdMenu fontSize={30} />
          </button>
        </span>
      </div>
      <div
        id="mySidenav"
        className="sidenav hidden absolute right-[-250px] h-[100vh] transition 0.5s ease-in bg-white z-[100000]"
      >
        <button onClick={close} className="hover:rotate-[180] transition 0.5s ">
          <a href="javascript:void(0)" class="closebtn">
            <RxCross1 className=" text-black text-[30px]" />
          </a>
        </button>


        <ul className="flex flex-col items-center justify-center">
          <li>
            {" "}
            <AnchorTag variant="Header" href="/">
              Home
            </AnchorTag>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header" href="/about">
              About
            </AnchorTag>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header">
              Services <IoIosArrowDown />

            </AnchorTag>
            <ul className='dropdown  absolute bg-white opacity-5 z-[9999] invisible py-[10px] w-[100%] mr-[100px]'>
              <li><AnchorTag variant='Headerh' href='/acservice'> AC Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/service'>over Servcies</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/tileservice'>Tiles Fixing</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/electricservice'>Electrician Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/plumbing'>Handyman & Plumber</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='bathroom'>Bathroom Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/painting'>Painting Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/kitchen'>Kitchen Service</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/celling'>Gypsum Ceiling</AnchorTag></li>
            </ul>
          </li>
          <li>
            {" "}
            <AnchorTag variant="Header" href="/contactus">
              Contact
            </AnchorTag>
          </li>
        </ul>
      </div>
    </div>
  );

}

export default Header;
