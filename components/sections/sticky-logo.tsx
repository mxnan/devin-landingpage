import Image from "next/image";
import React from "react";
import Devinlogo from "../ui/devin-logo";

export default function Stickylogo() {
  return (
    <div className="fixed flex items-end flex-col   right-4 top-20 ">
      <Devinlogo />
      <p className="text-3xl">Cognition</p>
      <div>twitter</div>
        <div>Linkedin</div>
    </div>
  );
}
