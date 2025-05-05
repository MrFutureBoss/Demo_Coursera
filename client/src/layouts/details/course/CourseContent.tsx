import { Col, Row } from 'antd'
import React from 'react'
import CustomBreadCrumb from '@/components/breadcrumbs/CustomBreadCrumb'
import styles from '@/styles/details/course_detail.module.scss'
import CourseBanner from './CourseBanner'
import CourseInfo from './CourseInfo'

export default function CourseContent() {
  return (
    <Row className={styles.course_detail}>
      <Col lg={24}>
        <div className={styles.breadcrumb}>
          <CustomBreadCrumb />
        </div>
      </Col>
      <Col lg={24}>
        <div className={styles.course_banner}>
          <CourseBanner />
        </div>
        <div className={styles.course_info_box}>
           <CourseInfo />
        </div>
      </Col>
    </Row>
  )
}
