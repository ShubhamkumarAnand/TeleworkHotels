"use client";
import Image from "next/image";

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
