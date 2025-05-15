import { get_test_by_course_quiz_id } from "@/store/reducers/testReducer";
import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import type { Test } from "@/store/interface/tests";
import TestAnswerResult from "./TestAnswerResult";
import TestResultInfo from "./TestResultInfo";
export default function TestResult({
  e_course_quiz_id,
}: {
  e_course_quiz_id: number;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const tests = useSelector((state: RootState) => state.test.tests as Test[]);
  useEffect(() => {
    if (e_course_quiz_id) {
      dispatch(get_test_by_course_quiz_id({ id: e_course_quiz_id }));
    }
  }, [dispatch, e_course_quiz_id]);

  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div>
          {[...Array(tests.length)].map((_, idx) => (
            <div
              style={{ margin: "3rem 0" }}
              key={idx}
              id={`question-${idx + 1}`}
            >
              <TestAnswerResult
                index={idx + 1}
                test={tests[idx]}
                loading={false}
              />
            </div>
          ))}
        </div>
        <div>
          <TestResultInfo count={tests.length} />
        </div>
      </div>
    </>
  );
}
