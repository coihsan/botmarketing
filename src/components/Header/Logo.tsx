import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link className="flex items-center overflow-hidden gap-3 " href={"/"}>
      <div className="w-full rounded-full border-4 border-yellow-500">
        <Image
          className="rounded-full"
          src={"/avatar.webp"}
          width={50}
          height={50}
          alt="logo on avatar"
        />
      </div>
      <h3 className="font-bold text-2xl">Mr.Phony</h3>
    </Link>
  );
}
