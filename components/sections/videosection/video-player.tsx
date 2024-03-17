import React from "react";
import VideoPreview from "./video-preview";
import SecondaryVideoSection from "./secondary-videosection";
import VideoText from "./video-texttop";

export default function VideoPlayer() {
  return (
    <div className="w-full space-y-16 ">
      <VideoText />
      <VideoPreview />
      <SecondaryVideoSection />
    </div>
  );
}
