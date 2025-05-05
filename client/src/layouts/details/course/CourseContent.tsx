import { Col, Row } from 'antd'
import React from 'react'
import CustomBreadCrumb from '@/components/breadcrumbs/CustomBreadCrumb'
import styles from '@/styles/details/course_detail.module.scss'
import CourseBanner from './CourseBanner'
import type { Course } from '@/store/reducers/courseReducer'

export default function CourseContent({ course }: { course: Course }) {  
  return (
    <Row className={styles.course_detail}>
      <Col lg={24}>
        <div className={styles.breadcrumb}>
          <CustomBreadCrumb name={course?.data?.topic_name} />
        </div>
      </Col>
      <Col lg={24}>
        <div
          className={styles.course_banner}
          style={{
            '--banner-url': `url(${course?.data?.banner})`
          } as React.CSSProperties}
        >
          <CourseBanner course={course} />
        </div>
        <div className={styles.course_info_box}>
        </div>
      </Col>
    </Row>
  )
}
