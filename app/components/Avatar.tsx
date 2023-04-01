"use client";
import Image from "next/image";

// This component is for the Avatar of the user by default it is set to the empty image at this moment

const Avatar = () => {
  return (
    <Image
      width={30}
      className="rounded-full"
      height={30}
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};
export default Avatar;
