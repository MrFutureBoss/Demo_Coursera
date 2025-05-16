"use client";
import AccountDropDown from "@/components/dropdown/AccountDropDown";
import Logo from "@/components/images/Logo";
import common from "@/styles/common.module.css";
import header1 from "@/styles/staff_home_styles/staff_home_header1.module.css";
import { Col, Row, Drawer, Grid, Button } from "antd";
import React, { useState } from "react";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/navigation";
import SearchCourse from "../explores/SearchCourse";
const { useBreakpoint } = Grid;

export default function Header1() {
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const authen = useSelector((state: RootState) => state.authen?.authen);
  const route = useRouter();

  const handleLogin = () => {
    route.push("/login");
  };

  // Mobile version: only logo and menu icon
  if (!screens.md) {
    return (
      <Row className={header1.staff_header1_mobile}>
        <Col sm={12} className={header1.col1}>
          <Logo className={common.home_logo} />
        </Col>
        <Col
          sm={12}
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <MenuOutlined
            style={{ fontSize: 24 }}
            onClick={() => setDrawerOpen(true)}
          />
        </Col>
        <Drawer
          title={<Logo className={common.home_logo_mobile} />}
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{ body: { padding: 0 } }}
        >
          <div style={{ padding: 16 }}>
            <SearchCourse/>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "16px 0",
              }}
            >
              <BellOutlined
                className={common.notification_icon}
                style={{ marginRight: 16 }}
              />
              {authen ? (
                <AccountDropDown />
              ) : (
                <Button variant="solid" color="primary" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </Drawer>
      </Row>
    );
  }

  // Desktop version: original layout
  return (
    <Row className={header1.staff_header1}>
      <Col sm={4} className={header1.col1}>
        <Logo className={common.home_logo} />
      </Col>
      <Col sm={12} className={header1.col2}>
        <SearchCourse/>
      </Col>

      {authen ? (
        <Col sm={8} style={{ display: "flex", justifyContent: "end" }}>
          <div className="flex justify-center items-center">
            <BellOutlined className={common.notification_icon} />
          </div>
          <div className="flex justify-center items-center">
            <AccountDropDown />
          </div>
        </Col>
      ) : (
        <Col sm={8} style={{ display: "flex", justifyContent: "end" }}>
          <div className="flex justify-center items-center">
            <Button variant="solid" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Col>
      )}
    </Row>
  );
}
