import HoverText from "@/components/hover-text/HoverText";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HoverText
        defaultText={`Making\n good\n shit\n since\n 2020`}
        hoverText={`Hiding\n bad\n shit\n since\n 2020`}
      />
    </div>
  );
}
