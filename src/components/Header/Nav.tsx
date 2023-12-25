import SearchIndex from "@/src/UI/SearchIndex";
import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
export default function Navbar() {
  return (
    <nav className="w-full xl:flex max-md:flex md:flex items-center gap-5 max-sm:hidden">
      <div className="max-lg:hidden xl:flex items-center gap-1">
        {NAVBAR.map((link) => (
          <Link
            key={link.key}
            className="font-semibold py-1 px-4 rounded-full hover:bg-zinc-300 dark:hover:bg-slate-700 transition-colors ease-linear duration-300"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <SearchIndex />
      </div>
    </nav>
  );
}
