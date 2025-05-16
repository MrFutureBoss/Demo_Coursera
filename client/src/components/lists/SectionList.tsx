import styles from "@/styles/learn/learn.module.scss";
import { Collapse, Skeleton } from "antd";
import LessonSectionList from "./LessonMaterialList";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store/index";
import type { Lesson } from "@/store/interface/lessons";
import type { Material } from "@/store/interface/materials";
import { RootState } from "@/store/rootReducer";
import { get_lesson_by_course_id } from "@/store/reducers/lessonReducer";
import { useEffect } from "react";
import { get_material_by_lesson_id } from "@/store/reducers/materialReducer";
import countSectionByType from "@/utilities/count/countSectionByType";
import countTotalTimeCompleteLession from "@/utilities/count/countTotalTimeCompleteLession";
import formatTime from "@/utilities/format/formatTime";
import { showLess } from "@/utilities/format/showLess";
import LearningIcon from "../icons/LearningIcon";

const panelStyle: React.CSSProperties = {
  background: "#fff",
};

interface SectionListProps {
  courseId: number;
}

export default function SectionList({ courseId }: SectionListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const lessons = useSelector(
    (state: RootState) => state.lesson.lessons as Lesson[]
  );
  const loading = useSelector((state: RootState) => state.lesson.loading);
  const materialsByLessonId = useSelector(
    (state: RootState) => state.material.materialsByLessonId || {}
  );
  const loadingSection = useSelector(
    (state: RootState) => state.material.loading
  );
  useEffect(() => {
    dispatch(get_lesson_by_course_id({ id: courseId }));
  }, [dispatch, courseId]);

  useEffect(() => {
    if (lessons.length > 0) {
      lessons.forEach((lesson: Lesson) => {
        dispatch(get_material_by_lesson_id({ id: lesson.id }));
      });
    }
  }, [dispatch, lessons]);

  const typeForIcon: string[] = ["Slide", "Video", "Document", "Test"];
  let items;
  if (!loading && !loadingSection) {
    items = lessons.map((lesson: Lesson) => {
      const lessonMaterials = materialsByLessonId[lesson.id] || [];
      return {
        key: lesson.id,
        label: (
          <div>
            <div className={styles.lesson_list_title}>
              <p>{showLess(lesson?.name, 100)}</p>
              {countTotalTimeCompleteLession(lessonMaterials) > 0 && (
                <p className="text-[12px] text-[#666]">
                  Time to complete:{" "}
                  <span className="font-bold text-[#0056d2]">
                    {formatTime(
                      countTotalTimeCompleteLession(lessonMaterials),
                      "minute"
                    )}{" "}
                    mins
                  </span>
                </p>
              )}
            </div>
            <div className="flex justify-start items-center gap-2">
              {typeForIcon.map((type) => {
                const count = countSectionByType(
                  lessonMaterials.filter(
                    (material: Material) => material.type !== null
                  ),
                  type
                );

                if (count === 0) return null;

                return (
                  <div key={type} className="flex items-center gap-2">
                    <div className="flex justify-center items-center gap-2 bg-[#E8EEF7] text-[1rem] rounded-full h-[1.5rem] w-[1.5rem]">
                      <LearningIcon type={type} />
                    </div>
                    <span className="text-[0.7rem]">{count}</span>
                    <span className="text-[0.7rem]">
                      {type}
                      {count > 1 ? "s" : ""}
                      {typeForIcon.indexOf(type) !== typeForIcon.length - 1
                        ? " , "
                        : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ),
        children: <LessonSectionList data={lessonMaterials} lesson_name={lesson?.name}/>,
        style: panelStyle,
      };
    });
  } else {
    items = [
      {
        key: "1",
        label: <div>Not found</div>,
        style: panelStyle,
      },
    ];
  }

  return <Skeleton loading={loading || loadingSection} active><Collapse items={items} /></Skeleton>;
}
