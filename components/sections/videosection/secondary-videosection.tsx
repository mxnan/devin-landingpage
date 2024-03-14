import React from "react";
import { VideoItems } from "./videoitem-index";
import VideoEachItem from "./video-eachitem";

export default function SecondaryVideoSection() {
  return (
    <div className="w-full max-w-6xl p-4 flex flex-col gap-20 mx-auto">
      <p className="font-medium text-center xl:text-start text-2xl font-logo  xl:text-3xl">
        {"Here's a sample of what Devin can do:"}
      </p>
       <div className="w-full flex flex-col max-lg:items-center space-y-16">
         {
          VideoItems.map((item) => {
            return <VideoEachItem item={item} key={item.id} />
          })
         }
       </div>
    </div>
  );
}
