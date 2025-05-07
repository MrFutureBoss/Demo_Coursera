import React from "react";
import styles from "@/styles/details/course_detail.module.scss";
import { Button } from "antd";
import TeamTag from "@/components/tags/TeamTag";
import type { Course } from "@/store/interface/courses";
import getTodayFormatted from "@/utilities/timeNow";
import renderHTML from "@/utilities/renderHTML";
import { showLess } from "@/utilities/showLess";
import { useRouter } from "next/navigation";
import { urlToHyphenated } from "@/utilities/urlToHyphenated";

export default function CourseBanner({ course }: { course: Course }) {
  const router = useRouter();
  const handleEnrollNow = () => {
    router.push(`/learn/${course?.id}/${urlToHyphenated(course?.topic_name)}/progress`);
  };
  return (
    <div className={styles.course_banner_content}>
      <div className={styles.course_banner_content_box}>
        <div className="w-fit">
          <p className={styles.title}>{course?.topic_name}</p>
          <p className={styles.overview}>{course?.overview}</p>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={renderHTML(
              showLess(course?.description, 400)
            )}
          ></p>
          <div className="flex justify-start items-center gap-8 mb-4">
            <Button
              onClick={handleEnrollNow}
              variant="solid"
              style={{
                height: "4rem",
                width: "15rem",
                backgroundColor: "#0056d2",
                color: "#fff",
              }}
            >
              <div className="block leading-5">
                <p className="font-semibold">Enroll now</p>
                <p className="text-[12px]">Start {getTodayFormatted()}</p>
              </div>
            </Button>
            <p>
              Join with team{" "}
              <TeamTag content={`# ${course?.team_group}`} />
            </p>
          </div>
          <p className={styles.enrolled}>
            <span className={styles.number}>19,000</span> already enrolled this{" "}
            {course?.type}
          </p>
        </div>
      </div>
      <div className="w-[50%] rounded-3xl">Detail to know</div>
    </div>
  );
}
