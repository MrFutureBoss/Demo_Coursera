/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Badge, Card } from "antd";
import styles from "@/styles/staff_home_styles/staff_home_most_enrolled.module.scss";
import CustomTooltip from '../tooltips/CustomTooltip';
import Award from '../icons/Award';
import type { Course } from '@/store/interface/courses';
import { urlToHyphenated } from '@/utilities/urlToHyphenated';

interface CardProductsProps {
  course: Partial<Course>;
  loading?: boolean;
}

const CardProducts: React.FC<CardProductsProps> = ({ course, loading = false }) => {

  return (
    <div>
      <Link href={course.id ? `/course/${urlToHyphenated(course?.topic_name || '')}-${course.id}` : '#'} style={{ textDecoration: 'none' }}>
        <Card
          className={styles.cardContainer}
          style={{ width: 300 }}
          loading={loading}
          cover={
            !loading && course.banner ? (
              <Badge.Ribbon text={course.version ? `v${course.version}` : ''}>
                <img
                  alt={course.topic_name || ''}
                  src={course.banner || ''}
                  style={{ width: "100%", height: 200 }}
                />
              </Badge.Ribbon>
            ) : undefined
          }
        >
          {!loading && (
            <>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 8 }}>
                {course.topic_name} {<CustomTooltip title="This is course have certificate" children={<Award size="24px" color="gold"/>}/>}
              </div>
              <div style={{ color: '#666', marginBottom: 4 }}>
                {course.overview}
              </div>
              <div style={{ fontSize: '0.95rem', marginBottom: 4 }}>
                {course.description}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#0056D2' }}>
                {course.type}
              </div>
            </>
          )}
        </Card>
      </Link>
    </div>
  );
};

export default CardProducts;