'use client'
import { RootState } from '@/store/rootReducer';
import CourseContent from '@/layouts/details/course/CourseContent';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import React, { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';
import { getIdFromURL } from '@/utilities/getIdFromURL';

interface LearnDetailPageProps {
  params: { name: string } | Promise<{ name: string }>;
}

export default function LearnDetailPage({ params }: LearnDetailPageProps) {
  const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{ name: string }>) 
    : params;
  const { name } = unwrappedParams as { name: string };
  const dispatch = useDispatch<AppDispatch>();
  const course = useSelector((state: RootState) => state.course.course as Course);
  
  useEffect(() => {
    if (name) {
      dispatch(get_course_by_id({ id: getIdFromURL(name) }));
    }
  }, [dispatch, name]);  
  return (
    <div>
      <CourseContent course={course} />
    </div>
  );
}
