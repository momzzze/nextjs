import Nav from "../components/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Nav />
        <div className="mx-32 gap-2 mb-10">{children}</div>
      </body>
    </html>
  );
}
