import { HoverText } from "../hover-text";
import AboutMe from "./AboutMe";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-30">
      <HoverText
        defaultText={`<span style="font-size: 1.5rem;">Max Levchuk</span>\nMaking\n good\n shit\n since\n 2020`}
        hoverText={`<span style="font-size: 1.5rem;">Max Levchuk</span>\nHiding\n bad\n shit\n since\n 2020`}
        fontSize="text-8xl"
      />

      <AboutMe />
    </div>
  );
}
