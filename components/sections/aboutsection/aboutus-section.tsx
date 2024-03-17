import React from "react";

export default function Aboutus() {
  return (
    <div className="w-full h-max max-w-6xl px-6  space-y-12 mx-auto">
      <div className="space-y-4">
        <p className="font-logo text-4xl">About Cognition</p>
        <p className="font-medium text-lg">
          We are an applied AI lab focused on reasoning.
        </p>
      </div>
      <div className="space-y-4">
        <p className="font-medium ">
          We’re building AI teammates with capabilities far beyond today’s
          existing AI tools. By solving reasoning, we can unlock new
          possibilities in a wide range of disciplines—code is just the
          beginning. We want to help people around the world turn their ideas
          into reality.
        </p>
        <p className="font-medium">
          We are well funded, including a
          <strong> $21 million Series A led by Founders Fund. </strong>
          And we’re grateful for the support of industry leaders including
          <strong>
            {" "}
            Patrick and John Collison, Elad Gil, Sarah Guo, Chris Re, Eric
            Glyman, Karim Atiyeh, Erik Bernhardsson, Tony Xu, Fred Ehrsam{" "}
          </strong>
          and so many more.
        </p>
      </div>
      <div className="space-y-4 ">
        <p className="font-logo  text-3xl">Hire Devin</p>
        <div className="font-medium space-y-2">
          <p>Devin is currently in early access as we ramp up capacity.</p>
          <p>
            To start using Devin for engineering work, please
            <a href="" className="text-blue-800 dark:text-indigo-300">
              {" "}
              reach out here{" "}
            </a>
            or get in touch at
            <a href="" className="text-blue-800 dark:text-indigo-300">
              {" "}
              info@cognition-labs.com.{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="font-logo text-3xl">Join Us</p>
        <p className="font-medium">
          Our team is small and talent-dense. Our founding team has 10 IOI gold
          medals and includes leaders and builders who have worked at the
          cutting edge of applied AI at companies like Cursor, Scale AI,
          Lunchclub, Modal, Google DeepMind, Waymo, and Nuro.
        </p>
        <p className="font-medium">
          Building Devin is just the first step—our hardest challenges still lie
          ahead. If you’re excited to solve some of the world’s biggest problems
          and build AI that can reason, learn more about our team and
          <a href="" className="text-blue-800 dark:text-indigo-300">
            {" "}
            apply to join us here.
          </a>
        </p>
      </div>
    </div>
  );
}
