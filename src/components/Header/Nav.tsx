import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
export default function Navbar() {
  return (
    <nav className="max-[600px]:hidden">
      <div className="flex items-center gap-1 max-[600px]:hidden">
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
    </nav>
  );
}
