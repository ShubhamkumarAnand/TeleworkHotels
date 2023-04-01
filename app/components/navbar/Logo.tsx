"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// This is the logo in the navbar which on click will redirect the user to the homepage of the application

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex cursor-pointer" onClick={()=>router.push('/')}>
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="hidden cursor-pointer md:block "
        width={100}
        height={100}
      />
      <p className="flex items-center text-4xl font-semibold text-lime-600">
        Telework
      </p>
    </div>
  );
};
export default Logo;
