import React from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { Twittericon } from "../ui";



export default function Stickylogo() {
  return (
    <div className="fixed flex items-end flex-col gap-4   right-4 top-20 ">
      <Devinlogo />
      <p className="text-4xl font-logo uppercase">Cognition AI</p>
      <div className="p-2 rounded-full border">
        <Twittericon />
      </div>
      <div className="p-2 rounded-full border">
        <Linkedin size={28} strokeWidth={1} />
      </div>
    </div>
  );
}
