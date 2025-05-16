'use client'
import React, { useEffect, use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';
import { RootState } from '@/store/rootReducer';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import LearningLesson from '@/layouts/enrolled_course/LearningLesson';
import { get_lesson_by_lesson_id } from '@/store/reducers/lessonReducer';
import { Lesson } from '@/store/interface/lessons';
import { getIdFromURL } from '@/utilities/url/getIdFromURL';
import { get_test_infor_by_course_quiz_id } from '@/store/reducers/testReducer';
import { Test } from '@/store/interface/tests';

interface TestPageProps {
    params: { courseName: string, lesson_name: string, test_name: string } | Promise<{ id: string; courseName: string, lesson_name: string, test_name: string }>;
}

export default function TestPage({ params }: TestPageProps) {
    const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{courseName: string, lesson_name: string, test_name: string }>) 
    : params;
    const { courseName,lesson_name, test_name } = unwrappedParams as { courseName: string, lesson_name: string, test_name: string };
    const dispatch = useDispatch<AppDispatch>();
    const course = useSelector((state: RootState) => state.course.course as Course); 
    const lesson = useSelector((state: RootState) => state.lesson.lesson as Lesson); 
    const test = useSelector((state: RootState) => state.test.test as Test); 
    useEffect(() => {
         if (courseName) {
           dispatch(get_course_by_id({ id: getIdFromURL(courseName) }));
           dispatch(get_lesson_by_lesson_id({ id: getIdFromURL(lesson_name) }));
           dispatch(get_test_infor_by_course_quiz_id({ id: getIdFromURL(test_name) }));
         }
       }, [dispatch, courseName, lesson_name, test_name]);  
    return (
      <div>
          <LearningLesson course={course} lesson={lesson} material={test}/>
      </div>
    );
}
