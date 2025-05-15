import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-6 fixed top-0 left-0 right-0 z-10">
      <ThemeToggle />
    </header>
  );
}
