import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";



const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});
export const metadata: Metadata = {
  title: "EduLegend",
  description: "EduLegend is education website build to provide better experience to students who willing to import themselves based on It legend rules  ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` ${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full ">{children}</body>
    </html>
  );
}
