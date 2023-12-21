import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto px-3 py-5 flex items-center justify-between">
      <Logo />
      <Navbar />
    </header>
  );
}
