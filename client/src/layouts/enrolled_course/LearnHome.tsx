import CustomBreadCrumb from "@/components/breadcrumbs/CustomBreadCrumb";
import CustomSideBar from "@/components/sidebars/CustomSideBar";
import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import type { Course } from "@/store/interface/courses";
import common from "@/styles/common.module.css";
import { urlToHyphenated } from "@/utilities/url/urlToHyphenated";
import {
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { GiProgression } from "react-icons/gi";
import CourseInfo from "./CourseInfo";
import LessonList from "@/components/lists/LessonList";

const LearnHome = ({ course }: { course: Course }) => {
  const routes = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: <Link href="/courses">Courses</Link>,
    },
    {
      title: (
        <Link
          href={`/course/${course?.id}/${urlToHyphenated(
            course?.topic_name
          )}`}
        >
          {course?.topic_name}
        </Link>
      ),
    },
    {
      title: "Progress",
    },
  ];

  const sidebarItems = [
    {
      label: "Progress",
      key: "progress",
      icon: <GiProgression  style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Feedback",
      key: "feedback",
      icon: <MailOutlined />,
    },
    {
      label: "Certificate",
      key: "certificate",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <div>
      <Row>
        <Col span={6} style={{ borderRight: "1px solid rgba(5,5,5,0.06)"}}>
          <CourseInfo
            banner={course?.banner}
            title={course?.topic_name}
            overview={course?.overview}
          />
          <CustomSideBar items={sidebarItems} />
        </Col>
        <Col span={18}>
          <div className={common.breadcrumb}>
            <CustomBreadCrumb items={routes} />
          </div>
          <div className="flex justify-center">
            <div className="w-[45rem] max-w-[100vw]">
             <LessonList courseId={course?.id}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LearnHome;
