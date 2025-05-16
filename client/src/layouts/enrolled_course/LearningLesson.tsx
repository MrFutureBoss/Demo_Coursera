import CustomBreadCrumb from "@/components/breadcrumbs/CustomBreadCrumb";
import { Col, Row } from "antd";
import React from "react";
import Link from "next/link";
import { urlToHyphenated } from "@/utilities/url/urlToHyphenated";
import type { Course } from "@/store/interface/courses";
import type { Lesson } from "@/store/interface/lessons";
import type { Section } from "@/store/interface/sections";
import ReadingDocument from "./section/ReadingDocument";
import WatchingVideo from "./section/WatchingVideo";
import type { Test } from "@/store/interface/tests";
import TestInfo from "./test/TestInfo";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import SectionSideBar from "@/components/sidebars/SectionSideBar";
import styles from "@/styles/learn/sections/section.module.scss";
import { FaBars } from "react-icons/fa";

export default function LearningLesson({
  course,
  lesson,
  material,
}: {
  course: Course;
  lesson: Lesson;
  material: Section | Test;
}) {
  const routes = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: (
        <Link
          href={`/course/${course?.id}/${urlToHyphenated(course?.topic_name)}`}
        >
          {course?.topic_name}
        </Link>
      ),
    },
    {
      title: (
        <Link
          href={`/learn/${urlToHyphenated(course?.topic_name)}-${
            course?.id
          }/progress`}
        >
          {lesson?.name}
        </Link>
      ),
    },
    {
      title: `${material?.name}`,
    },
  ];

  const [isMenuVisible, setIsMenuVisible] = React.useState(true);

  return (
    <Row className="h-[calc(100vh-10rem)]">
      <Col
        lg={isMenuVisible ? 4 : 1} md={isMenuVisible ? 24 : 24} sm={isMenuVisible ? 24 : 24}
        style={{ borderRight: "1px solid rgba(5,5,5,0.06)" }}
      >
        <div className="h-full flex justify-center !mt-6">
          <div className="">
            <div className={styles.hide_menu} onClick={() => setIsMenuVisible(!isMenuVisible)}> <FaBars />&nbsp;<p>{isMenuVisible ? "Hide menu" : ""}</p></div>
            <div className={isMenuVisible ? "" : "hidden"}>
              <SectionSideBar lessonId={lesson?.id} />
            </div>
          </div>
        </div>
      </Col>
      <Col lg={isMenuVisible ? 20 : 23} md={isMenuVisible ? 24 : 24} sm={isMenuVisible ? 24 : 24}>
        <div className={`!p-[1rem] !pl-[5rem] !pr-[5rem]`}>
          <CustomBreadCrumb items={routes} />
        </div>
        <div
          className="flex gap-4 items-center"
          style={{ paddingLeft: "5rem" }}
        >
          <Link href={"#"} className="flex items-center gap-2 font-semibold">
            <IoChevronBackOutline /> Previous
          </Link>
          <Link href={"#"} className="flex items-center gap-2 font-semibold">
            Next <IoChevronForwardOutline />
          </Link>
        </div>
        <div className="flex justify-center overflow-y-auto max-h-[30rem]" style={{ paddingTop: "3rem" }}>
          <div>
            {material?.type === "Document" && <ReadingDocument />}
            {material?.type === "Video" && (
              <WatchingVideo videoUrl={(material as Section).content} />
            )}
            {material?.type === "Test" && <TestInfo test={material as Test} />}
          </div>
        </div>
      </Col>
    </Row>
  );
}
