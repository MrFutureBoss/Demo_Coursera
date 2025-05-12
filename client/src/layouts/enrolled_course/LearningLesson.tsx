import CustomBreadCrumb from '@/components/breadcrumbs/CustomBreadCrumb'
import CustomSideBar from '@/components/sidebars/CustomSideBar'
import { Col, Row } from 'antd'
import React from 'react'
import common from '@/styles/common.module.css'
import Link from 'next/link'
import { GiProgression } from 'react-icons/gi'
import { MailOutlined, SettingOutlined } from '@ant-design/icons'
import { urlToHyphenated } from '@/utilities/urlToHyphenated'
import type { Course } from '@/store/interface/courses'
import type { Lesson } from '@/store/interface/lessons'
import type { Section } from '@/store/interface/sections'
import ReadingDocument from './section/ReadingDocument'
import WatchingVideo from './section/WatchingVideo'
import type { Test } from '@/store/interface/tests'
import TestInfo from './test/TestInfo'

export default function LearningLesson({course, lesson, material}: {course: Course, lesson: Lesson, material: Section | Test}) {
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
            title: (
              <Link
                href={`/learn/${urlToHyphenated(course?.topic_name)}-${course?.id}/progress`}
              >
                {lesson?.name}
              </Link>
            ),
          },
        {
          title: `${material?.name}`,
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
    <Row>
    <Col span={6} style={{ borderRight: "1px solid rgba(5,5,5,0.06)"}}>
      <CustomSideBar items={sidebarItems} />
    </Col>
    <Col span={18}>
      <div className={common.breadcrumb}>
        <CustomBreadCrumb items={routes} />
      </div>
      <div className="flex justify-center">
        <div>
             {material?.type === "Document" && (
                <ReadingDocument/>
              )}
              {material?.type === "Video" && (
                <WatchingVideo/>
              )}
              {material?.type === "Test" && (
                <TestInfo test={material as Test}/>
              )}
        </div>  
      </div>
    </Col>
  </Row>
  )
}
