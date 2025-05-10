import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface SideBarProps {
  items: MenuProps["items"];
}

export default function CustomSideBar({ items }: SideBarProps) {
  const [current, setCurrent] = useState("mail");
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="h-[100vh] w-full mt-6">
      <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }} hidden>
        {collapsed ? "" : "Menu hide"}{" "}
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        className="custom-sidebar"
      />
    </div>
  );
}
