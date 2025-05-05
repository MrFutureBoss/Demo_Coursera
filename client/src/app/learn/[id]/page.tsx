import CourseContent from '@/layouts/details/course/CourseContent';
import React from 'react';

interface LearnDetailPageProps {
  params: { id: string; name: string };
}
  
export default function LearnDetailPage({ params }: LearnDetailPageProps) {
  return (
    <div>
      <h1>Chi tiết khóa học: {params.id}</h1>
      <CourseContent />
    </div>
  );
}
