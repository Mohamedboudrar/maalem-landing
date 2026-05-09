import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maalem - Morocco's Trusted Repair Platform",
  description: "Connect with verified repair and maintenance professionals in Morocco",
  icons: {
    icon: "/assets/images/logo-maalem.jpg",
    apple: "/assets/images/logo-maalem.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
