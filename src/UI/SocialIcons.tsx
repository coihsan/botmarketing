import Link from "next/link";
import { socialiconslink } from "./../constants/Icons.tsx";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialiconslink.map((iconslink) =>(
        <Link className="text-[30px] bg-rose-600" key={socialiconslink.key} href={iconslink.url}>
          <span className="">{iconslink.icons}</span>
        </Link>
      ))}
    </div>
  );
}
