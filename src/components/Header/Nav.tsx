import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-1">
        {NAVBAR.map((link) => (
          <Link
            className="font-semibold py-1 px-4 rounded-full hover:bg-zinc-100 transition-colors ease-linear duration-300"
            key={link.key}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
