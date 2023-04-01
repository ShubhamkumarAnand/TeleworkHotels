"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
          onClick={() => {}}
        >
          Telework Your Home
        </div>
        <div
          className="flex cursor-pointer flex-row gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-sm md:px-2 md:py-1 "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
        </div>
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="md:w-3bg-white absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl text-sm shadow-md">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={()=>{}} label="LogIn"/>
              <MenuItem onClick={()=>{}} label="SignUp"/>
            </>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
