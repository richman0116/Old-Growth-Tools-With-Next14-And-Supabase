import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaHandsWash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function VisiteWebsite({ data }) {
  return (
    <div className=" inline-flex gap-4 w-full sm:justify-start justify-center ">
      <Link
        className=" inline-flex bg-black p-2 items-center gap-2 sm:px-32 md:px-48 xl:px-44 lg:px-28 px-10   rounded-3xl "
        href={data?.website || "#"}
        target="_blank"
      >
        <h1 className=" text-white font-bold sm:text-sm text-[9px] lg:w-[100px] w-full">
          Visit Website
        </h1>
        <HiExternalLink className=" text-white" size={25} />
      </Link>

      <div className=" inline-flex bg-specialOrange2 p-3 items-center gap-2 px-4 rounded-3xl h-[52px] w-[110px]">
        <h1 className=" text-white font-bold">52K</h1>
        <Image src="/clapVector.png" width={22.93} height={22.45} alt="Clap icon"/>
      </div>
    </div>
  );
}