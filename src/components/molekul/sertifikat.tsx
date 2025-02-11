"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../ui/animated-list";

interface Item {
  name: string;
  description: string;
  Src: string;
  color: string;
}

let notifications = [
    {
        name: "Dqlab",
        description: "Boostcamp DA",
        Src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR06CqHFcEWH_4363wkXQI6f_sKvztfA8fw&s",
        color: "#ffffff",
      },
  {
    name: "FreeCodeCamp",
    description: "Rensponsive Web Design",
    Src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s",
    color: "#FFB800",
  },
  {
    name: "Dibimbing id",
    description: "Frontend Developer",
    Src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17xLBXGrRaF909EyqQyMXoscYkLd9LM2jtA&s",
    color: "#FFB800",
  },
  {
    name: "Dicoding",
    description: "Learn React",
    Src: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_060223111547.png",
    color: "#FF3D71",
  },
  {
    name: "BNSP",
    description: "Junior Web Developer",
    Src: "https://www.hpi.or.id/wp-content/uploads/2021/08/Logo-BNSP.png",
    color: "#ffffff",
  },

];

notifications = Array.from({ length: 5 }, () => notifications).flat();

const Notification = ({ name, description, Src, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">
            <img src={Src} alt="" />
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-black ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-500 text-left">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-transparent md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
