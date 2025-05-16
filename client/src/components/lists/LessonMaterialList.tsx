"use client";
import React from "react";
import { Button } from "antd";
import styles from "@/styles/learn/learn.module.scss";
import { Material } from "@/store/interface/materials";
import { showLess } from "@/utilities/format/showLess";
import LearningIcon from "../icons/LearningIcon";
import { urlToHyphenated } from "@/utilities/url/urlToHyphenated";
import { useRouter } from "next/navigation";

interface LessonMaterialListProps {
  data: Material[];
  lesson_name: string;
}

export default function LessonMaterialList({
  data,
  lesson_name,
}: LessonMaterialListProps) {
  const router = useRouter();
  const handleEnrollNow = ({ material }: { material: Material }) => {
    if (material.type === "Test") {
      router.push(
        `/learn/${material?.course_id}/lesson/${urlToHyphenated(
          lesson_name
        )}-${material?.lesson_id}/test/${urlToHyphenated(material?.name)}-${material?.material_id_ByType}`
      );
    } else {
      router.push(
        `/learn/${material?.course_id}/lesson/${urlToHyphenated(
          lesson_name
        )}-${material?.lesson_id}/section/${urlToHyphenated(material?.name)}-${material?.material_id_ByType}`
      );
    }
  };

  return (
    <div>
      {data.length > 0 &&
        data.map((material: Material, index: number) => (
          <div key={index} onClick={() => handleEnrollNow({ material })}>
            <div className={styles.lesson_section_list}>
              <div className={styles.left_content}>
                <div className={styles.iconbox}>
                  <div className={styles.round_icon}>
                    {/* <IoBookOutline className={styles.icon} /> */}
                    <LearningIcon
                      type={material.type}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div>
                  <p>
                    <span className="font-bold">
                      {showLess(material.name, 100)}
                    </span>
                    <span className="text-[0.9rem]">
                      <span className="text-[#245dc8]"> • </span>
                      {material.time} mins
                    </span>
                  </p>
                  <p>{showLess(material.detail, 200)}</p>
                </div>
              </div>
              <Button
                onClick={() => handleEnrollNow({ material })}
                color="primary"
                variant="solid"
              >
                Get Started
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}
