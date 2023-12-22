import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import SocialIcons from "@/src/UI/SocialIcons";
export default function Header() {
  return (
    <header className="fixed top-0 w-full shadow-md z-50 bg-white">
      <div className="px-3 py-5 flex items-center justify-between max-w-screen-xl mx-auto  ">
        <div className="flex items-center justify-between gap-5">
          <Logo />
          <Navbar />
        </div>
        <SocialIcons />
      </div>
    </header>
  );
}
