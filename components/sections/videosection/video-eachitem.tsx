import React from "react";

interface VideoItemProps {
  id: number;
  title: string;
  description: string;

  videolink: string;
}

export default function VideoEachItem({ item }: { item: VideoItemProps }) {
  return (
    <div
      className="flex flex-col w-full max-xl:max-w-2xl  max-xl:space-y-10 mx-auto items-center justify-center
    xl:max-w-6xl xl:flex-row xl:justify-between
    "
    >
      <div className=" flex flex-col px-4 xl:w-1/2 space-y-4 ">
        <p className="text-2xl font-logo tracking-wide font-light ">
          {item.title}
        </p>
        <p className="text-lg font-medium">{item.description}</p>
      </div>
      <div className="flex max-xl:w-full  max-xl:h-[30vh] xl:h-[30vh] shadow-xl rounded-3xl border-2  ">
        <iframe
          className="z-10 aspect-auto 
          xl:aspect-video 
          max-xl:w-full 
          overflow-clip rounded-3xl "
          src={item.videolink}
          title="videos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
