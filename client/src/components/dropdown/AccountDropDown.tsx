"use client";
import React from "react";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import common from "@/styles/common.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromToken, logout } from "@/store/reducers/authenReducer";
import { RootState } from '@/store/rootReducer';
import type { AppDispatch } from '@/store/index';
import { useRouter } from "next/navigation";

export default function AccountDropDown() {
  const authen = useSelector((state: RootState) => state.authen?.authen);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogout = () => {
    if (authen?.role_id === 1) {
      dispatch(logout({ navigate: "/login", role: 1 }));
      router.push("/login");
    } else {
      dispatch(logout({ navigate: "/login", role: 2 }));
      router.push("/login");
    }
  };
  React.useEffect(() => {
    dispatch(getUserFromToken());
  }, [dispatch]);

  React.useEffect(() => {
  }, [authen]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <>{authen?.email}</>,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Profile",
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Billing",
      extra: "⌘B",
    },
    {
      key: "4",
      label: "Settings",
      icon: <SettingOutlined />,
      extra: "⌘S",
    },
    {
      key: "5",
      label: "Logout",
      icon: <LogoutOutlined/>,
      onClick: handleLogout,
    },
  ];

  return (
    <Dropdown menu={{ items }} className={common.dropdown_account}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div className="flex justify-center items-center rounded-[50px] bg-blue-800 p-2.5 h-[40px] w-[40px]">
            <p
              style={{ margin: "0", padding: "0" }}
              className="text-blue-100 font-bold"
            >
              M
            </p>
          </div>
          <p style={{ margin: "0", padding: "0" }} className="text-blue-500 font-bold">Welcome back!</p>
          <DownOutlined />
          
        </Space>
      </a>
    </Dropdown>
  );
}
