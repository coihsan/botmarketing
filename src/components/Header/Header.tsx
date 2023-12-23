import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import NavMobile from "@/src/components/Header/NavMobile";
import SocialIcons from "@/src/UI/SocialIcons";
import DarkMode from "@/src/UI/DarkMode";
export default function Header() {
  return (
    <header className="fixed top-0 w-full shadow-md z-50 bg-slate-50 dark:bg-slate-900">
      <div className="relative px-3 py-5 flex items-center justify-between max-w-screen-xl mx-auto  ">
        <div className="flex items-center gap-5">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-center gap-5">
          <SocialIcons />
          <DarkMode />
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
