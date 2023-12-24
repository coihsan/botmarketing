import Link from "next/link";
import { socialiconslink } from "./../constants/Icons.tsx";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialiconslink.map((iconslink) => (
        <Link
          key={iconslink.key}
          className="hover:scale-[0.9] "
          href={iconslink.url}
        >
          {iconslink.icons}
        </Link>
      ))}
    </div>
  );
}
