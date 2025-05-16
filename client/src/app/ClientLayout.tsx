"use client";

import StaffHomeHeader1 from "@/layouts/header/Header1";
import { useRoleGuard } from "@/guards/roleGuard";
import StaffHomeHeader2 from "@/layouts/header/Header2";
import styles from "@/styles/staff_home_styles/staff_home_common.module.css";
import "../styles/custom_antd_css/tablist.css";
import "../styles/custom_antd_css/sidebar.css";
import "../styles/custom_antd_css/card.css";
import "../styles/custom_antd_css/modal.css";
import "../styles/custom_antd_css/radio.css";
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useRoleGuard();
  const pathname = usePathname();
  
  const showHeader1 =
    pathname === "/" ||
    (pathname || "").startsWith("/course") ||
    (pathname || "").startsWith("/learn") 
    && !(pathname || "").endsWith("/attempt") ||
    (pathname || "").endsWith("/progress");
    const showHeader2 =
    pathname === "/" ||
    pathname === "/learn" ||
    pathname === "/learn/";
  return (
    <div className="w-full">
      <div className={styles.staff_header}>
        {showHeader1 && (
          <div>
            <StaffHomeHeader1 />
          </div>
        )}

        {showHeader2 && (
          <div>
            <StaffHomeHeader2 />
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
