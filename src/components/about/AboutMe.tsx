import { HoverableText } from "../HoverableText";

const defaultText = `I'm a full stack developer who particularly loves React but works with various web frameworks. I pride myself on writing clean, efficient, and maintainable code.`;
const hiddenText = `When I'm not obsessing over React, I'm secretly negotiating with my keyboard - the bigger the paycheck, the more my code behaves! Quality directly proportional to compensation.`;

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl font-bold">About Me</h1>

      <HoverableText
        defaultText={defaultText}
        hiddenText={hiddenText}
        className="text-4xl font-semibold"
      />
    </div>
  );
}
