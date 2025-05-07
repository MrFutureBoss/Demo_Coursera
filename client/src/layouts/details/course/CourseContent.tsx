import { Col, Row } from "antd";
import React from "react";
import CustomBreadCrumb from "@/components/breadcrumbs/CustomBreadCrumb";
import styles from "@/styles/details/course_detail.module.scss";
import common from "@/styles/common.module.css";
import CourseBanner from "./CourseBanner";
import type { Course } from "@/store/interface/courses";
import Link from "next/link";

export default function CourseContent({ course }: { course: Course }) {
  const routes = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: <Link href="/courses">Courses</Link>,
    },
    {
      title: (
        <Link href={`/courses/${course?.id}`}>
          {course?.topic_name}
        </Link>
      ),
    },
  ];

  return (
    <Row className={styles.course_detail}>
      <Col lg={24}>
        <div className={common.breadcrumb}>
          <CustomBreadCrumb items={routes} />
        </div>
      </Col>
      <Col lg={24}>
        <div
          className={styles.course_banner}
          style={
            {
              "--banner-url": `url(${course?.banner})`,
            } as React.CSSProperties
          }
        >
          <CourseBanner course={course} />
        </div>
        <div className={styles.course_info_box}></div>
      </Col>
    </Row>
  );
}
