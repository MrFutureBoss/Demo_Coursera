import React from "react";
import styles from "@/styles/learn/attempts/test_tracking.module.scss";

interface TestResultInfoProps {
  count: number;
}

export default function TestResultInfo({
  count
}: TestResultInfoProps) {
   
  return (
    <div className={styles.test_tracking_box}>
      <div className={styles.test_tracking_progress}>
          {count} questions 
      </div>
    </div>
  );
}
