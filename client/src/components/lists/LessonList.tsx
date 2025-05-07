import styles from "@/styles/learn/learn.module.scss";
import { Collapse } from "antd";
import LessonSectionList from "./LessonSectionList";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store/index";
import type { Lesson } from "@/store/interface/lessons";
import type { Section } from "@/store/interface/sections";
import { RootState } from "@/store/rootReducer";
import { get_lesson_by_course_id } from "@/store/reducers/lessonReducer";
import { useEffect } from "react";
import { get_section_by_lesson_id } from "@/store/reducers/sectionReducer";
import countSectionByType from "@/utilities/countSectionByType";
import countTotalTimeCompleteLession from "@/utilities/countTotalTimeCompleteLession";
import formatTime from "@/utilities/formatTime";

const panelStyle: React.CSSProperties = {
  background: "#fff",
  border: "none",
};

export default function LessonList({courseId}: {courseId: string}) {
  const dispatch = useDispatch<AppDispatch>();
  const lessons = useSelector((state: RootState) => state.lesson.lessons as Lesson[]);
  const loading = useSelector((state: RootState) => state.lesson.loading);
  const sections = useSelector((state: RootState) => state.section.sections as Section[]);
  const loadingSection = useSelector((state: RootState) => state.section.loading);

  useEffect(() => {
    dispatch(get_lesson_by_course_id({id: courseId}));
  }, [dispatch, courseId]);

  useEffect(() => {
    if (lessons.length > 0) {
      lessons.forEach((lesson: Lesson) => {
        dispatch(get_section_by_lesson_id({id: lesson.id}));
      });
    }
  }, [dispatch, lessons]);
  
  
  
  return (
    <Collapse>
      {!loading && !loadingSection ? (
        lessons.map((lesson: Lesson) => (
          <Collapse.Panel
            key={lesson.id}
            header={
              <div>
                <div className={styles.lesson_list_title}>
                  <p>{lesson?.name}</p>
                  {countSectionByType(sections, "Test") > 0 ? <p>{countSectionByType(sections, "Test")} test left</p> : <></>}
                </div>
                <div className="flex justify-between">
                  <p className="text-[12px] text-[#666]">Time to complete: {formatTime(countTotalTimeCompleteLession(sections), "minute")} minutes</p>
                </div>
              </div>
            }
            style={panelStyle}
          >
            <LessonSectionList />
          </Collapse.Panel>
        ))
      ) : (
        <Collapse.Panel
          key="1"
          header={
            <div>
              <div className={styles.lesson_list_title}>
                <p>Lesson 1</p>
                <p>1 test left</p>
              </div>
              <div className="flex justify-between">
                <p>3 videos, 1 slide, 1 test</p>
                <p>Time to complete: 1h 30m</p>
              </div>
            </div>
          }
          style={panelStyle}
        >
          <LessonSectionList />
        </Collapse.Panel>
      )}
    </Collapse>
  );
}