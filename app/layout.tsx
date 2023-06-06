import { Navbar, Footer } from "./(shared)";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blog AI App",
  description: "Blog built in NextJs that uses AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
