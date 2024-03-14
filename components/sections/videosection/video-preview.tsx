"use client";

import React from "react";

import { useInView } from "react-intersection-observer";

export default function VideoPreview() {
  const { ref, inView, entry } = useInView({
    threshold: [0, 1],
  });


  return (
    <div className="w-full max-w-6xl p-4 flex flex-col space-y-4 mx-auto">
      <div
        ref={ref}
        className="relative shadow-xl aspect-video flex rounded-3xl border-1 "
      >
        <iframe
          className="z-10 aspect-video w-full overflow-clip rounded-3xl "
          src="https://www.youtube.com/embed/fjHtjT7GO1c"
          title="Intro YT video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
