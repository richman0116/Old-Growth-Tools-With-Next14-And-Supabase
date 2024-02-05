// check if media is loaded
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { cn } from "@/lib/util";
// import Image from "next/image";
// import companylogo from "../public/companylogo.png";

export default function ListItem(props) {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // videos are a priority
    // if video is present, it uses that by default
    if (props.item.image && !props.item.video) {
      const img = new Image();
      img.src = props.item.image;
      img.onload = () => {
        setLoaded(true);
      };
    } else if (props.item.video) {
      const video = document.createElement("video");
      video.src = props.item.video;
      video.onloadeddata = () => {
        setLoaded(true);
      };
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      role="list-item"
      className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={"/view/" + props.item.title}
        className="hover:opacity-90 transition"
      >
        <div
          // style={
          //   props.item.image && !props.item.video
          //     ? {
          //         backgroundImage: `url('${props.item.image}')`,
          //         padding: "15px",
          //       }
          //     : {}
          // }
          className={cn(
            "relative w-full  rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden",
            props.item.color
          )}
          alt=""
        >
          {props.item.video && (
            <div className="flex justify-center items-end h-full w-full">
              <video
                className="ease block object-cover rounded-t-xl transition ease-in-out delay-150 duration-200 w-44 h-48 custom-shadow-2 hover:-translate-y-1 hover:scale-x-150 hover:scale-y-125 cards "
                playsInline=""
                autoPlay={true}
                loop={true}
                muted={true}
                src={props.item.video}
              />
            </div>
          )}
          {props.item.image && (
            <div className="flex justify-center items-end h-full w-full">
              <img
                className="ease block object-cover rounded-t-xl transition duration-200 w-44 custom-shadow-2 h-48"
                src={props.item.image}
                height={170}
                width={225}
                alt="image"
              />
            </div>
          )}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </svg>
            </div>
          )}
          {/* {props.index == 0 && ( */}
          <>
            <div className="absolute top-2 left-2 ">
              {/* <img src="/companylogo.png" width={50} height={50} /> */}
              <img src={props.item.icon1} width={48} height={48} />
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-3">
              <div>
                <img src={props.item.icon2} width={38} height={34} />
              </div>
              <div className={cn(!props.item.icon3 ? "hidden" : "")}>
                <img src={props.item.icon3} width={38} height={34} />
              </div>
              <div>
                <img src={props.item.icon4} width={53} height={34} />
              </div>
              {/* {props.item.icon3 && (
                <div className="absolute top-2 right-2">
                  <img src={props.item.icon3} width={50} height={40} />
                </div>
              )} */}
            </div>
            {isHovered &&
              <div className="transition ease-in-out absolute bottom-2 right-2">
                <img src={props.item.hoverIcon} width={48} height={48} />
              </div>
            }
          </>
        </div>
      </a>

      <div className="flex justify-between items-center mt-2">
        <a href="" className="">
          <h2 className=" hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200 font-bold">
            {props.item.title}
          </h2>
          <p className="hover:text-dark-500  dark:text-white text-sm h-16">{props.item.description}</p>
        </a>
        {/* <div className="flex justify-end gap-2 font-normal">
          <button className="flex flex-1 justify-end items-center dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[20px]"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div> */}
      </div>
      {/* Render tags */}
      {/* <div className="flex mt-1">
        {props.item.tags.map((tag) => (
          <div
            key={tag}
            className="mr-2 text-xs dark:bg-gray-800 text-tagColor"
          >
            #{tag}
          </div>
        ))}
      </div> */}
    </div>
  );
}