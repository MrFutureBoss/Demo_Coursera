import { Col, Row } from 'antd'
import React from 'react'
import styles from '@/styles/details/course_detail.module.scss'
import Link from 'next/link'

export default function CourseInfo() {
  return (
    <Row className={styles.course_info}>
        <Col lg={8} style={{ display: 'flex', justifyContent: 'center' }}>7 course series</Col>
        <Col lg={8} style={{ display: 'flex', justifyContent: 'center' }}><div className='flex gap-1.5'><p>4.8 stars</p><p>(2 reviews)</p></div></Col>
        <Col lg={8} style={{ display: 'flex', justifyContent: 'center' }}><p>Build toward a degree</p><Link href="" className='text-blue-500'>Learn more</Link></Col>
    </Row>
  )
}
