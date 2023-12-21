import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="">
        <Image
          className="rounded-full"
          src={"/avatar.webp"}
          width={50}
          height={50}
          alt="logo on avatar"
        />
        <span className="font-bold">Mr.Bot</span>
      </div>
    </Link>
  );
}
