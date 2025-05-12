import React from "react";
import type { Test } from "@/store/interface/tests";
import { Radio } from "antd";
import styles from "@/styles/learn/card_test.module.scss";
import convertStringToArray from "@/utilities/convertStringToArray";
import convertNumberToAlphabet from "@/utilities/convertNumberToAlphabet";
interface SingleChoiceProps {
    test: Test;
    onAnswered?: () => void;
}

export default function SingleChoice({ test, onAnswered }: SingleChoiceProps) {
  const options = convertStringToArray(test.options);
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <div>
      <div className={styles.card_test_box}>
        {options.length > 0 ? (
          <Radio.Group
            style={{ width: "100%" }}
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              if (onAnswered) onAnswered();
            }}
          >
            {options.map((opt, idx) => (
              <Radio
                className={styles.choice}
                style={{
                  display: "block",
                  height: "32px",
                  lineHeight: "32px",
                }}
                value={opt}
                key={idx}
              >
                <b>{convertNumberToAlphabet(idx)}.</b> {opt}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <p>No other choice!</p>
        )}
      </div>
    </div>
  );
}
