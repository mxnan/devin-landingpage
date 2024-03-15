import React from "react";

export default function GraphContent() {
  return (
    <div className="flex relative h-1/2 max-w-4xl mx-auto w-full">
      <p className="font-logo text-3xl absolute top-10 right-5 text-background ">
        {"% Issues resolved"}
      </p>
      <span className="absolute text-background right-5 bottom-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-from-line"
        >
          <path d="m18 9-6-6-6 6" color="red" />
          <path d="M12 3v14" color="green" />
          <path d="M5 21h14" color="blue" />
        </svg>
      </span>

      {/* all graph bars container */}
      <div className="flex items-end gap-10 px-6 w-full h-full bg-foreground rounded-3xl">
        <div className="h-[80%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-3 text-background">
            {"13.84%"}
          </p>
        </div>
        <div className="h-[44%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-5 text-background">
            {"4.80%"}
          </p>
        </div>
        <div className="h-[33%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-5 text-background">
            {"3.97%"}
          </p>
        </div>
        <div className="h-[22%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-5 text-background">
            {"3.01%"}
          </p>
        </div>
        <div className="h-[11%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-5 text-background">
            {"1.74%"}
          </p>
        </div>
        <div className="h-[5%] relative w-24 rounded-t-xl bg-background">
          <p className="font-logo text-3xl absolute -top-10 left-5 text-background">
            {"0.52%"}
          </p>
        </div>
      </div>
      {/* all graph bars container */}
    </div>
  );
}
