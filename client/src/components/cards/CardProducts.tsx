/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Badge, Card } from "antd";
import styles from "@/styles/staff_home_styles/staff_home_most_enrolled.module.scss";

export interface CourseApi {
  id: number;
  topic_name: string;
  banner: string;
  overview: string;
  description: string;
  type: string;
  status: string;
  version: string;
}


interface CardProductsProps {
  course: Partial<CourseApi>;
  loading?: boolean;
}

const CardProducts: React.FC<CardProductsProps> = ({ course, loading = false }) => {
  return (
    <div>
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
              {course.topic_name}
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
    </div>
  );
};

export default CardProducts;