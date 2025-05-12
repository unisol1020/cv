import CatIcon from "./CatIcon";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex flex-row justify-between p-2 fixed bg-background dark:bg-background w-full">
      <CatIcon />

      <Menu />
    </div>
  );
}
