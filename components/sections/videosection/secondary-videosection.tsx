import React from "react";
import { VideoItems } from "./videoitem-index";
import VideoEachItem from "./video-eachitem";

export default function SecondaryVideoSection() {
  return (
    <div className="w-full max-w-6xl p-4 flex flex-col gap-20 pb-12 border-b mx-auto">
      <p className="font-medium text-center  w-max mx-auto  text-3xl font-logo  xl:text-3xl">
        {"Here's a sample of what Devin can do:"}
      </p>

      {VideoItems.map((item) => {
        return <VideoEachItem item={item} key={item.id} />;
      })}
    </div>
  );
}
