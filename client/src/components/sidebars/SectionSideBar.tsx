"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { showLess } from "@/utilities/format/showLess";
import TootipArrowPRight from "../tooltips/TootipArrowPRight";
import { RootState } from "@/store/rootReducer";
import type { AppDispatch } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import { get_material_by_lesson_id } from "@/store/reducers/materialReducer";
import type { Material } from "@/store/interface/materials";
import LearningIcon from "../icons/LearningIcon";

interface SectionSideBarProps {
  lessonId: number | string;
}

const SectionSideBar = ({ lessonId }: SectionSideBarProps) => {
  const [current, setCurrent] = useState("mail");
  const [collapsed, setCollapsed] = useState(false);
  const materialsByLessonId = useSelector(
    (state: RootState) => state.material.materialsByLessonId || {}
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(get_material_by_lesson_id({ id: lessonId }));
  }, [dispatch, lessonId]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const lessonMaterials = materialsByLessonId[lessonId] || [];

  const items = lessonMaterials.map((material: Material, index: number) => {
    return {
      key: index + 1,
      label: (
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <LearningIcon
                type={material.type}
                className="bg-gray-300 rounded-full !p-1 text-[0.8rem]"
              />
            </div>
            {/* <div className="flex items-center gap-2">
            <LearningIcon type="Done" className="bg-green-500 rounded-full !p-1 text-white text-[0.6rem]" />
          </div> */}
            {material.name.length > 29 ? (
              <TootipArrowPRight title={material.name}>
                {showLess(material.name, 30)}
              </TootipArrowPRight>
            ) : (
              <>{material.name}</>
            )}
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="w-[12rem] mt-6">
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
        className="custom-sidebar2"
        style={{ borderStyle: "none" }}
      />
    </div>
  );
};

export default SectionSideBar;
