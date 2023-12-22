import Link from "next/link";
import { socialiconslink } from "./../constants/Icons.tsx";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialiconslink.map((iconslink) =>(
        <Link className="flex" key={socialiconslink.key} href={iconslink.url}>
          <span>{iconslink.icons}</span>
        </Link>
      ))}
    </div>
  );
}
