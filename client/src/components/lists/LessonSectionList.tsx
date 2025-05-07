import React from "react";
import { Button } from "antd";
import styles from "@/styles/learn/learn.module.scss";
import { IoBookOutline } from "react-icons/io5";

export default function LessonSectionList() {
  return (
    <div className={styles.lesson_section_list}>
      <div className={styles.left_content}>
        <div className={styles.iconbox}>
          <div className={styles.round_icon}>
            <IoBookOutline className={styles.icon} />
          </div>
        </div>
        <div >
          <p>Project Overview</p>
          <p>Reading *10 min</p>
        </div>
      </div>
      <Button color="primary" variant="solid">Get Started</Button>
    </div>
  );
}
