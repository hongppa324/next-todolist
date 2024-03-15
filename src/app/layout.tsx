import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import QueryProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todolist",
  description: "This is next.js Todolist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <nav className="flex m-2 space-x-8 w-full place-content-center">
            <Link
              href="/about"
              className="flex w-18 border-4 border-teal-300 justify-center cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/report"
              className="flex w-18 border-4 border-emerald-300 justify-center cursor-pointer"
            >
              Report
            </Link>
            <Link
              href="/todos-csr"
              className="flex w-18 border-4 border-indigo-300 justify-center cursor-pointer"
            >
              Todos-CSR
            </Link>
            <Link
              href="/todos-ssr"
              className="flex w-18 border-4 border-fuchsia-300 justify-center cursor-pointer"
            >
              Todos-SSR
            </Link>
            <Link
              href="/"
              className="flex w-18 border-4 border-zinc-300 justify-center cursor-pointer"
            >
              Home
            </Link>
          </nav>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
