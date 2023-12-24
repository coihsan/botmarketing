import DarkMode from "@/src/UI/DarkMode";
import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
import SearchIndex from "@/src/UI/SearchIndex";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center gap-5 max-[600px]:hidden">
      <div className="max-[600px]:hidden flex items-center gap-1 ">
        {NAVBAR.map((link) => (
          <Link
            key={link.key}
            className="font-semibold py-1 px-4 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ease-linear duration-300"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <SearchIndex />
        <DarkMode />
      </div>
    </nav>
  );
}
