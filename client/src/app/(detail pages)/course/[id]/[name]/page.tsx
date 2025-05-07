'use client'
import { RootState } from '@/store/rootReducer';
import CourseContent from '@/layouts/details/course/CourseContent';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import React, { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';

interface LearnDetailPageProps {
  params: { id: string; name: string } | Promise<{ id: string; name: string }>;
}

export default function LearnDetailPage({ params }: LearnDetailPageProps) {
  const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{ id: string; name: string }>) 
    : params;
  const { id } = unwrappedParams as { id: string };
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
