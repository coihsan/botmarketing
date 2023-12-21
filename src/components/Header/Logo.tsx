import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link className="flex items-center gap-3" href={"/"}>
      <div >
        <Image
          className="rounded-full"
          src={"/avatar.webp"}
          width={50}
          height={50}
          alt="logo on avatar"
        />
      </div>
        <h3 className="font-bold">Mr.Phony</h3>
    </Link>
  );
}
