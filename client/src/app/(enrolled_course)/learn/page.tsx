import MyCourses from '@/layouts/enrolled_course/my_courses_list/MyCourses'
import React from 'react'
import styles from '@/styles/learn/my_courses/my_courses.module.scss'

export default function page() {
  return (
    <div className={styles.my_courses}>
        <div style={{margin: 'auto'}}>
           <MyCourses/>
        </div>
    </div>
  )
}
