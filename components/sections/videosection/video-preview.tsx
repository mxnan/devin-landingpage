import React from "react";

export default function VideoPreview() {
  return (
    <div className="w-full max-w-6xl p-4 flex flex-col space-y-4 mx-auto">
      <div className="relative shadow-2xl aspect-video flex rounded-3xl border-2 dark:border-zinc-900 border-stone-50 ">
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
