import SideBar from "../components/SideBar";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider>
          <div className="flex">
            {/* Sidebar */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <SideBar />
            </div>
            {/* ClientProvider - Notification */}

            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
