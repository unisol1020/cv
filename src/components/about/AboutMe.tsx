import { HoverText } from "../hover-text";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start">About me</div>

      <HoverText
        defaultText="Full-stack developer passionate about crafting solutions across backend and frontend. Deeply experienced with React and TypeScript, I deliver high-quality code and products that exceed expectations."
        hoverText="Full-stack developer with a simple formula: bigger paycheck = cleaner code. Expert in React and TypeScript with competitive rates for bug-free solutions. Quality directly proportional to compensation."
        fontSize="text-4xl"
        textAlign="left"
      />
    </div>
  );
}
