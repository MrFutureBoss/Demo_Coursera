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
  display: 'swap', // improves font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`} 
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <AntdRegistry>
          <ClientProvider>
            <PersistProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </PersistProvider>
          </ClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}