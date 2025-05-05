import React from 'react'
import styles from '@/styles/details/course_detail.module.scss'
import { Button } from 'antd'
import TeamTag from '@/components/tags/TeamTag'

export default function CourseBanner() {
  return (
    <div className={styles.course_banner_content}>
      <div className='w-[50%] flex justify-center items-center'>
        <div>
          <p className={styles.title}>Google UX Design Professional Certificate</p>
          <p className={styles.description}>Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required.</p>
          <div className='flex justify-start items-center gap-8 mb-4'>
            <Button variant='solid' style={{ height: '4rem', width: '15rem', backgroundColor: '#0056d2', color: '#fff' }}><div className='block leading-5'><p className='font-semibold'>Enroll now</p><p className='text-[12px]'>Start May 5</p></div></Button>
            <p>Join with team <TeamTag content="#TeamTag" /></p>
          </div>
          <p className={styles.enrolled}><span className={styles.number}>2 members</span> already enrolled this course</p>
        </div>
      </div>
      <div className='w-[50%] rounded-3xl'>
        <img style={{ width: 'fit-content', height: '20rem' }} src="https://nickjanetakis.com/assets/blog/cards/using-dockers-v2-api-to-get-a-list-of-tags-with-the-help-of-jq.jpg" alt="" />
      </div>
      <div>
      </div>
    </div>
  )
}
