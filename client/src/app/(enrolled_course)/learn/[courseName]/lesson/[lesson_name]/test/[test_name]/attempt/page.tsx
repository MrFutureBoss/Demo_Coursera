'use client'
import React, { useEffect, use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/store/index';
import type { Course } from '@/store/interface/courses';
import { RootState } from '@/store/rootReducer';
import { get_course_by_id } from '@/store/reducers/courseReducer';
import { get_lesson_by_lesson_id } from '@/store/reducers/lessonReducer';
import { Lesson } from '@/store/interface/lessons';
import { getIdFromURL } from '@/utilities/url/getIdFromURL';
import { get_test_infor_by_course_quiz_id } from '@/store/reducers/testReducer';
import { Test } from '@/store/interface/tests';
import TestHeader from '@/layouts/enrolled_course/test/attempt/TestHeader';
import ConfirmModal from '@/components/modals/ConfirmModal';
import styles from '@/styles/learn/attempts/header.module.scss';
import TakeTest from '@/layouts/enrolled_course/test/attempt/TakeTest';
import { useRouter } from 'next/navigation';
import { urlToHyphenated } from '@/utilities/url/urlToHyphenated';
import TestResult from '@/layouts/enrolled_course/test/attempt/result/TestResult';

interface TestAttemptPageProps {
    params: { courseName: string, lesson_name: string, test_name: string } | Promise<{ id: string; courseName: string, lesson_name: string, test_name: string }>;
}

export default function TestAttemptPage({ params }: TestAttemptPageProps) {
    const unwrappedParams = params instanceof Promise 
    ? use(params as Promise<{courseName: string, lesson_name: string, test_name: string }>) 
    : params;
    const { courseName,lesson_name, test_name } = unwrappedParams as { courseName: string, lesson_name: string, test_name: string };
    const dispatch = useDispatch<AppDispatch>();
    const course = useSelector((state: RootState) => state.course.course as Course); 
    const lesson = useSelector((state: RootState) => state.lesson.lesson as Lesson); 
    const test = useSelector((state: RootState) => state.test.test as Test); 

    const [openModal, setOpenModal] = React.useState(false);
    const [pendingAction, setPendingAction] = React.useState<null | (() => void)>(null);
    const [isFinished, setIsFinished] = React.useState(false);
    const router = useRouter();

    const handleModalSubmit = React.useCallback(() => {
      setOpenModal(false);
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      } else {
        router.push(`/learn/${course.id}/lesson/${urlToHyphenated(lesson.name)}-${lesson.id}/test/${urlToHyphenated(test.name)}-${test.id}`); 
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pendingAction, router]);

    const handleModalCancel = React.useCallback(() => {
      setOpenModal(false);
      setPendingAction(null);
    }, []);

    React.useEffect(() => {
      let isModalOpen = false;
      const onPopState = () => {
        if (isModalOpen) return;
        isModalOpen = true;
        setPendingAction(() => () => window.history.go(-1));
        setOpenModal(true);
        window.history.pushState(null, '', window.location.href); // push lại để giữ nguyên trang
      };
      window.addEventListener('popstate', onPopState);
      return () => window.removeEventListener('popstate', onPopState);
    }, []);

    React.useEffect(() => {
      const onBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
        return '';
      };
      window.addEventListener('beforeunload', onBeforeUnload);
      return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, []);

    const handleBack = () => {
      setPendingAction(() => () => window.history.back());
      setOpenModal(true);
    };

    useEffect(() => {
         if (courseName) {
           dispatch(get_course_by_id({ id: getIdFromURL(courseName) }));
           dispatch(get_lesson_by_lesson_id({ id: getIdFromURL(lesson_name) }));
           dispatch(get_test_infor_by_course_quiz_id({ id: getIdFromURL(test_name) }));
         }
       }, [dispatch, courseName, lesson_name, test_name]);  

      // Callback khi hết giờ
      const handleTimeUp = React.useCallback(() => {
        setIsFinished(true);
      }, []);
    
      // Callback khi bấm Finished Test
      const handleFinishTest = React.useCallback(() => {
        setIsFinished(true);
      }, []);


    return (
      <>
        <div className={styles.test_attempt }>
            <TestHeader course={course} lesson={lesson} test={test} onBack={handleBack} isFinished={isFinished}/>
            {isFinished ? <TestResult e_course_quiz_id={Number(getIdFromURL(test_name))} /> : <TakeTest 
              test={test} 
              e_course_quiz_id={Number(getIdFromURL(test_name))}
              handleTimeUp={handleTimeUp}
              handleFinishTest={handleFinishTest}
            /> }
        </div>
        <ConfirmModal
          open={openModal}
          title="Are you sure want to leave?"
          content="You are not completed this test yet. Are you sure want to leave before submitting?"
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
        />
      </>
    );
}