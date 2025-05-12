import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import styles from "@/styles/learn/attempts/header.module.scss";
import type { Test } from "@/store/interface/tests";
import formatTime from "@/utilities/formatTime";

import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Course } from "@/store/interface/courses";
import { Lesson } from "@/store/interface/lessons";
import { urlToHyphenated } from "@/utilities/urlToHyphenated";

export default function TestHeader({
  course,
  lesson,
  test,
  onBack,
  isFinished
}: {
  course: Course;
  lesson: Lesson;
  test: Test;
  onBack?: () => void;
  isFinished?: boolean;
}) {

  const router = useRouter();

  const handleBack = () => {
    if (!isFinished) {
      if (typeof onBack === 'function') onBack();
      return;
    }
    else {
      router.push(`/learn/${course.id}/lesson/${urlToHyphenated(lesson.name)}-${lesson.id}/test/${urlToHyphenated(test.name)}-${test.id}`); 

    }
  };


  const count = useSelector((state: RootState) => state.test.count);
  return (
    <div className={styles.test_attempt_header}>
      <div className={styles.button_back} onClick={handleBack}>
        <IoMdArrowBack />
        &nbsp;&nbsp;Back
      </div>
      <div className={styles.test_info}>
        <p>{test?.name}</p>
        <p>
         {count} questions&nbsp;•&nbsp; {formatTime(test?.time, "minutes")} mins
        </p>
      </div>

    </div>
  );
}
