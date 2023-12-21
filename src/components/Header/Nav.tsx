import { NAVBAR } from "@/src/constants/data";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-5">
        {NAVBAR.map((link) => (
          <li key={link.key} href={link.href}>
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
