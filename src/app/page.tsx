import { HoverableText } from "@/components/HoverableText";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-12 p-24">
      <div className="flex flex-col gap-8 text-center">
        <HoverableText
          defaultText={`Hover\n over me to reveal\n hidden text`}
          hiddenText={`This is\n only visible\n inside the cursor!`}
          className="text-8xl font-medium"
        />

        <HoverableText
          defaultText="Another example with different content"
          hiddenText="Secret message revealed by cursor!"
          className="text-xl"
        />
      </div>
    </div>
  );
}
