'use client'
import React, { useEffect, use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';
import { RootState } from '@/store/rootReducer';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import LearnHome from '@/layouts/enrolled_course/LearnHome';
import { getIdFromURL } from '@/utilities/url/getIdFromURL';
interface ProgressPageProps {
    params: { courseName: string } | Promise<{ courseName: string }>;
}

export default function ProgressPage({ params }: ProgressPageProps) {
    const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{ courseName: string }>) 
    : params;
    const { courseName } = unwrappedParams as { courseName: string };
    const dispatch = useDispatch<AppDispatch>();
    const course = useSelector((state: RootState) => state.course.course as Course);

    useEffect(() => {
      if (courseName) {
        dispatch(get_course_by_id({ id: getIdFromURL(courseName) }));
      }
    }, [dispatch, courseName]);  
    return (
      <div>
          <LearnHome course={course}/>
      </div>
    );
}
