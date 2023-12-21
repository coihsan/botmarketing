import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-5">
        {NAVBAR.map((link) => (
          <Link className="font-semibold" key={link.key} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
