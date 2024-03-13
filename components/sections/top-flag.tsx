import React from "react";
import { ToggleTheme } from "../ui";

export default function TopFlag() {
  return (
    <div className="fixed w-full top-0 h-10 border-b border-gray-900">
      <div className="fixed flex flex-col left-4 top-20">
        <ToggleTheme />
        <div>X</div>
        <div>L</div>
      </div>
    </div>
  );
}
