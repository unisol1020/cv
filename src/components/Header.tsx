import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-6">
      <ThemeToggle />
    </header>
  );
}
