'use client'
import { RootState } from '@/store/rootReducer';
import CourseContent from '@/layouts/details/course/CourseContent';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import React, { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/reducers/courseReducer';

interface LearnDetailPageProps {
  params: { id: string; name: string } | Promise<{ id: string; name: string }>;
}

export default function LearnDetailPage({ params }: LearnDetailPageProps) {
  // Safe unwrapping for both Promise and object params
  const unwrappedParams = typeof (params as any).then === 'function' ? use(params as Promise<{ id: string; name: string }>) : params;
  const { id, name } = unwrappedParams as { id: string; name: string };
  const dispatch = useDispatch<AppDispatch>();
  const course = useSelector((state: RootState) => state.course.course as Course);

  useEffect(() => {
    if (id) {
      dispatch(get_course_by_id({ id }));
    }
  }, [dispatch, id]);  
  return (
    <div>
      <CourseContent course={course} />
    </div>
  );
}
