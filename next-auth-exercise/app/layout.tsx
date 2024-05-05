import Nav from "../components/Nav";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SessionProvider session={session}>
          <Nav />
          <div className="mx-32 gap-2 mb-10">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
