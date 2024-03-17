import React from "react";

export default function VideoText() {
  return (
    <div className="w-full max-w-6xl p-6 pb-12 border-b flex flex-col space-y-16 mx-auto">
      <div className="py-3 space-y-4 max-md:text-center font-bold uppercase">
        {" "}
        <p className="text-6xl max-md:text-4xl">Introducing Devin,</p>
        <p className="text-6xl max-md:text-4xl text-end max-md:text-center  ">
          {" "}
          The first AI software engineer
        </p>
      </div>
      <p className="text-3xl max-md:text-2xl font-logo  tracking-wider font-medium text-center">
        Meet Devin,
        <br className="md:hidden" /> the world’s first fully autonomous AI
        software engineer.
      </p>
      <div className="space-y-6 max-md:text-start text-center max-md:px-4   mx-auto font-medium">
        <p className="text-xl ">
          Devin is a
          <strong className="uppercase">
            {" "}
            tireless, skilled teammate,
            {" "}
            </strong>
          equally ready to build alongside you or independently complete tasks
          for you to review.
        </p>
        <p className="text-xl ">
          With Devin, engineers can focus on more interesting problems and
          engineering teams can strive for more ambitious goals.
        </p>
      </div>
      <div className="space-y-5 max-md:px-4 font-medium">
        <p className="text-2xl font-logo tracking-wider">
          {"Devin's Capabilities : "}
        </p>
        <p className="text-lg ">
          With our advances in long-term reasoning and planning, Devin can plan
          and execute complex engineering tasks requiring thousands of
          decisions. Devin can recall relevant context at every step, learn over
          time, and fix mistakes.
        </p>
        <p className="text-lg ">
          {
            "We've also equipped Devin with common developer tools including the shell, code editor, and browser within a sandboxed compute environment—everything a human would need to do their work."
          }
        </p>
        <p className="text-lg ">
          {
            "Finally, we've given Devin the ability to actively collaborate with the user. Devin reports on its progress in real time, accepts feedback, and works together with you through design choices as needed."
          }
        </p>
      </div>
    </div>
  );
}
