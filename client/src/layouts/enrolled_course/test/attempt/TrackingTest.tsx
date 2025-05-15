import React from "react";
import styles from "@/styles/learn/attempts/test_tracking.module.scss";
import { Button, Checkbox, Col, Row } from "antd";
import TimeRemain from "@/components/countdowns/TimeRemain";
import type { Test } from "@/store/interface/tests";
import type { CheckboxProps } from 'antd';

interface TrackingTestProps {
  test: Test;
  count: number;
  currentQuestion: number | null;
  setCurrentQuestion: (idx: number | null) => void;
  answered: boolean[];
  handleClickViewQuestion: (idx: number) => void;
  onTimeUp: () => void | null;
  onFinishTest: () => void;
}

export default function TrackingTest({
  test,
  count,
  currentQuestion,
  setCurrentQuestion,
  answered,
  handleClickViewQuestion,
  onFinishTest,
  onTimeUp
}: TrackingTestProps) {
  const [finishSoon, setFinishSoon] = React.useState<boolean>(false);
  const onChange: CheckboxProps['onChange'] = (e) => {
    setFinishSoon(e.target.checked);
  };
   
  return (
    <div className={styles.test_tracking_box}>
      <div className={styles.time_left}>
        <div>Time left:</div>
        <div className={styles.time_left_value}>
          <TimeRemain time={test.time} onTimeUp={onTimeUp} />
        </div>
      </div>

      <div>
        <Checkbox
        checked={finishSoon}
          onChange={onChange}
        >
          Finish soon
        </Checkbox>
      </div>

      <div className={styles.submit_button_box}>
        <Button disabled={!finishSoon} color="primary" variant="solid" onClick={onFinishTest}>
          Finished Test
        </Button>
      </div>
      <div className={styles.test_tracking_info}>
        <p>Unanswered: {count - answered.filter((ans) => ans).length}</p>
      </div>
      <Row gutter={[8, 8]} className={styles.test_tracking_progress}>
        {[...Array(count)].map((_, idx) => (
          <Col span={4} key={idx}>
            <div
              className={
                currentQuestion === idx
                  ? styles.item_active
                  : answered[idx]
                    ? styles.item_choice
                    : styles.item
              }
              onClick={() => {
                setCurrentQuestion(idx);
                handleClickViewQuestion(idx);
              }}
            >
              <p>{idx + 1}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
