import { HoverableText } from "../HoverableText";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <HoverableText
        defaultText={`Making\n good\n shit\n since\n 2020`}
        hiddenText={`Hiding\n bad\n shit\n since\n 2020`}
        className="text-8xl font-medium text-center"
      />
    </div>
  );
}
