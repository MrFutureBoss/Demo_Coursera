'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StaffHomeHeader1 from "@/layouts/header/Header1";
import StaffHomeHeader2 from "@/layouts/header/Header2";
import styles from "@/styles/staff_home_styles/staff_home_common.module.css";
import "../styles/custom_antd_css/tablist.css";
import "../styles/custom_antd_css/sidebar.css";
import ClientProvider from "@/providers/ClientProvider";
import PersistProvider from "@/providers/PersistProvider";
import { usePathname } from "next/navigation";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showHeader2 = pathname === '/' || pathname === '/course';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <PersistProvider>
          <div className="w-full">
            <div className={styles.staff_header}>
              <div style={{ margin: "0 10rem" }}>
                <StaffHomeHeader1 />
              </div>
              {showHeader2 && (
                <div style={{ width: "100%", margin: "auto" }}>
                  <StaffHomeHeader2 />
                </div>
              )}
            </div>
            <AntdRegistry>
              <div>{children}</div>
            </AntdRegistry>
          </div>
          </PersistProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
