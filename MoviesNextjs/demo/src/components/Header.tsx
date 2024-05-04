import Image from "next/image";
import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";
import GenreDropDown from "./GenreDropDown";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"
            alt="logo"
            className="w-40 h-auto cursor-pointer"
            width={120}
            priority={true}
            height={100}
          />
        </Link>
        {/* Other */}
        <div className="text-white flex space-x-2 items-center">
          {/* Genere */}
          <GenreDropDown />
          {/* Search */}
          <SearchInput />
          {/* Theme */}
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default Header;
