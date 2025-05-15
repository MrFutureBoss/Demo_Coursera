// app/layout.tsx (Server Component)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import 'antd/dist/reset.css';
import ClientProvider from "@/providers/ClientProvider";
import PersistProvider from "@/providers/PersistProvider";
import ClientLayout from "./ClientLayout";
import "../styles/custom_antd_css/popover.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ClientProvider>
          <PersistProvider>
            <AntdRegistry>
              <ClientLayout>{children}</ClientLayout>
            </AntdRegistry>
          </PersistProvider>
        </ClientProvider>
      </body>
    </html>
  );
}