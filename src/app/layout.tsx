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
          "${inter.variable} bg-onyx-50 dark:bg-onyx-950 dark:text-slate-50"
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
