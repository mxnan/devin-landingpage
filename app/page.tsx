import { ToggleTheme } from "@/components/ui/ToggleTheme";
import React from "react";

export default function page() {
  return (
    <>
      <main>
        <section className="w-full h-screen flex items-center justify-center text-9xl ">
          <ToggleTheme />
        </section>
      </main>
    </>
  );
}
