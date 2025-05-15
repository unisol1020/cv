"use client";

import { HoverableText } from "../HoverableText";
import AboutMe from "./AboutMe";
import DownloadCV from "./DownloadCV";

const defaultText = `Making\n good\n stuff\n since\n 2020`;
const hiddenText = `Hiding\n bad\n stuff\n since\n 2020`;

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 w-full">
      <div className="flex flex-col gap-20 min-h-svh">
        <HoverableText
          defaultText={defaultText}
          hiddenText={hiddenText}
          className="text-8xl font-semibold text-center"
        />

        <DownloadCV />
      </div>

      <AboutMe />
    </div>
  );
}
