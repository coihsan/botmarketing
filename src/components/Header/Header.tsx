import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import SocialIcons from "@/src/UI/SocialIcons";
export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto px-3 py-5 flex items-center justify-between">
      <div className="flex items-center justify-between gap-5">
        <Logo />
        <Navbar />
      </div>
      <SocialIcons />
    </header>
  );
}
