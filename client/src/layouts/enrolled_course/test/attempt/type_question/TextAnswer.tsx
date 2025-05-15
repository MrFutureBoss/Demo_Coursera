import React from 'react'
import type { Test } from '@/store/interface/tests';
import { Input } from 'antd';
import styles from '@/styles/learn/card_test.module.scss';

interface TextAnswerProps {
    test: Test;
    onAnswered?: () => void;
    showAnswer?: boolean;
}
export default function TextAnswer({test, onAnswered, showAnswer}: TextAnswerProps) {
    const [selected, setSelected] = React.useState<string | null>(null);
   
    React.useEffect(() => {
        setSelected(null);
      }, [test]);

  return (
    <div className={styles.card_test_box}>
    <Input
      placeholder="Type your answer here"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        if (onAnswered) onAnswered();
      }}
      disabled={showAnswer}
    />
    {showAnswer && (
        <div className={styles.card_test_box}>
          <p>Answer: {test.answers}</p>
        </div>
       )}
  </div>
  )
}
