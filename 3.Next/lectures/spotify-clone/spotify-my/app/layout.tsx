import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import getSongsByUserId from "@/actions/getSongsByUserId";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoDo-Spotify",
  description: "Clone Soptify with nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SuperbaseProvider>
          <UserProvider>
            <SideBar songs={userSongs}>{children}</SideBar>
            <ModalProvider />
          </UserProvider>
        </SuperbaseProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
