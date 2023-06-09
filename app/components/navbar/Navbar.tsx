"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

// The Main Navbar component which consists of all the elements

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
