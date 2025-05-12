import { get_test_by_course_quiz_id } from "@/store/reducers/testReducer";
import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import type { Test } from "@/store/interface/tests";
import TestContent from "@/layouts/enrolled_course/test/attempt/TestContent";
import TrackingTest from "./TrackingTest";
import { FaFlag } from "react-icons/fa";

import TestResult from './TestResult';

export default function TakeTest({
  test,
  e_course_quiz_id,
  handleTimeUp,
  handleFinishTest,
}: {
  test: Test;
  e_course_quiz_id: number;
  handleTimeUp: () => void;
  handleFinishTest: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const tests = useSelector((state: RootState) => state.test.tests as Test[]);
  const [currentQuestion, setCurrentQuestion] = React.useState<number | null>(null);
  const [answered, setAnswered] = React.useState<boolean[]>([]);
  useEffect(() => {
    if (e_course_quiz_id) {
      dispatch(get_test_by_course_quiz_id({ id: e_course_quiz_id }));
    }
  }, [dispatch, e_course_quiz_id]);

  useEffect(() => {
    setAnswered(new Array(tests.length).fill(false));
  }, [tests.length]);

  const handleClickViewQuestion = (idx: number) => {
    setCurrentQuestion(idx);
    document.getElementById(`question-${idx + 1}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div>
          {[...Array(tests.length)].map((_, idx) => (
              <div style={{ margin: "3rem 0" }} key={idx} id={`question-${idx + 1}`}>
                {currentQuestion === idx ? <FaFlag /> : null}<TestContent
                  index={idx + 1}
                  test={tests[idx]}
                  loading={false}
                  onAnswered={() => {
                    setAnswered(prev => {
                      const updated = [...prev];
                      updated[idx] = true;
                      return updated;
                    });
                  }}
                />
              </div>
          ))}
        </div>
        <div>
          <TrackingTest
            test={test}
            count={tests.length}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            answered={answered}
            handleClickViewQuestion={handleClickViewQuestion}
            onTimeUp={handleTimeUp}
            onFinishTest={handleFinishTest}
          />
        </div>
      </div>
    </>
  );
}
