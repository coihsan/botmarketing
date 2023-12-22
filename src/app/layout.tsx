import "@/src/app/globals.css";
import Header from "@/src/components/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr. Phony",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-white"
        }
      >
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
