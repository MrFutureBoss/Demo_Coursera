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
import { getIdFromURL } from '@/utilities/getIdFromURL';
import { Section } from '@/store/interface/sections';
import { get_section_by_section_id } from '@/store/reducers/sectionReducer';

interface TestPageProps {
    params: { courseName: string, lesson_name: string, section_name: string } | Promise<{ id: string; courseName: string, lesson_name: string, section_name: string }>;
}

export default function TestPage({ params }: TestPageProps) {
    const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{courseName: string, lesson_name: string, section_name: string }>) 
    : params;
    const { courseName,lesson_name, section_name } = unwrappedParams as { courseName: string, lesson_name: string, section_name: string };
    const dispatch = useDispatch<AppDispatch>();
    const course = useSelector((state: RootState) => state.course.course as Course); 
    const lesson = useSelector((state: RootState) => state.lesson.lesson as Lesson); 
    const section = useSelector((state: RootState) => state.section.section as Section); 
    useEffect(() => {
         if (courseName) {
           dispatch(get_course_by_id({ id: getIdFromURL(courseName) }));
           dispatch(get_lesson_by_lesson_id({ id: getIdFromURL(lesson_name) }));
           dispatch(get_section_by_section_id({ id: getIdFromURL(section_name) }));
         }
       }, [dispatch, courseName, lesson_name, section_name]);  
    return (
      <div>
          <LearningLesson course={course} lesson={lesson} section={section}/>
      </div>
    );
}
