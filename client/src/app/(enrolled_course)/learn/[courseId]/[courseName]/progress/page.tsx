'use client'
import React, { useEffect, use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';
import { RootState } from '@/store/rootReducer';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import LearnHome from '@/layouts/enrolled_course/LearnHome';
interface ProgressPageProps {
    params: { courseId: string; courseName: string } | Promise<{ courseId: string; courseName: string }>;
}

export default function ProgressPage({ params }: ProgressPageProps) {
    const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{ courseId: string; courseName: string }>) 
    : params;
    const { courseId } = unwrappedParams as { courseId: string };
    const dispatch = useDispatch<AppDispatch>();
    const course = useSelector((state: RootState) => state.course.course as Course);

    useEffect(() => {
      if (courseId) {
        dispatch(get_course_by_id({ id: courseId }));
      }
    }, [dispatch, courseId]);  
    return (
      <div>
          <LearnHome course={course} />
      </div>
    );
}
