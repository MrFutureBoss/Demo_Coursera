import React from "react";
import type { Test } from "@/store/interface/tests";
import { Skeleton } from "antd";
import SingleChoice from "../type_question/SingleChoice";
import TextAnswer from "../type_question/TextAnswer";
import MatchingInformation from "../type_question/MatchingInformation";

interface CardTestBoxProps {
  index: number;
  test: Test;
  loading?: boolean;
}

const TestAnswerResult: React.FC<CardTestBoxProps> = ({
  index,
  test,
  loading = false,
}) => {

  return (
    <Skeleton loading={loading}>
      <div className="w-full w-max-full">
        <div className="flex items-center gap-9" style={{marginBottom: "1rem"}}>
          <div className="w-[80%]">
            <p style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              <span style={{ fontWeight: "bold" }}>Question {index}:</span>{" "}
              {test?.question}
            </p>
          </div>
          {test?.score &&
            <div>
              <div className="bg-[#F5F5F5] text-[#000] rounded" style={{ padding: "0.3rem 0.3rem" }}>
                <p>{test?.score} points</p>
              </div>
            </div>
          }
        </div>
        {test.type === "Single Choice" && (
          <SingleChoice test={test} showAnswer={true} />
        )}
        {test.type === "Text Answer" && (
          <TextAnswer test={test} showAnswer={true} />
        )}
        {test.type === "Matching Information" && (
          <MatchingInformation test={test} showAnswer={true} />
        )}
      </div>
    </Skeleton>
  );
};

export default TestAnswerResult;
