"use client";
import React from "react";
import header2 from "@/styles/staff_home_styles/staff_home_header2.module.css";
import { Tabs } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

interface TabItem {
  key: string;
  label: string;
  url: string;
}

export default function Header2() {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useSelector((state: RootState) => state.authen.authen);

  const items: Array<TabItem> = [
    { key: "1", label: "Home", url: "/" },
    { key: "2", label: "Enrolled Courses", url: "/learn" },
    ...(auth?.role === "member"
      ? [] : [{ key: "3", label: "Dashboard", url: "/dashboard" }]),
    { key: "4", label: "Online Degrees", url: "/degrees" },
  ];

  const getActiveKey = () => {
    const currentItem = items.find(item => item.url === pathname);
    return currentItem?.key || items[0].key;
  };

  const handleTabChange = (key: string) => {
    const item = items.find((i) => i.key === key);
    if (item) {
      router.push(item.url);
    }
  };

  return (
    <div className={header2.staff_header2}>
      <Tabs
        activeKey={getActiveKey()}
        onChange={handleTabChange}
        items={items.map(({ key, label }) => ({ key, label }))}
      />
    </div>
  );
}