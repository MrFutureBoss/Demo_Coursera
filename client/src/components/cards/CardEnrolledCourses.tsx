/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Badge, Card } from "antd";
import styles from "@/styles/staff_home_styles/staff_home_most_enrolled.module.scss";
import type { Class } from "@/store/interface/classes";
import { countParticipant } from "@/utilities/countParticipant";
import StatusTag from "../tags/StatusTag";
import { RxStarFilled } from "react-icons/rx";
import { MdGroups } from "react-icons/md";
import CustomTooltip from "../tooltips/CustomTooltip";
import { IoTime } from "react-icons/io5";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import formatTime from "@/utilities/formatTime";
import Award from "../icons/Award";
import { urlToHyphenated } from "@/utilities/urlToHyphenated";

interface CardEnrolledCoursesProps {
  classItem: Class;
  loading?: boolean;
}

const CardEnrolledCourses: React.FC<CardEnrolledCoursesProps> = ({
  classItem,
  loading = false,
}) => {
  return (
    <div>
      <Link
        href={`/learn/${urlToHyphenated(classItem.topic_name || "")}-${
          classItem.course_id
        }/progress`}
        style={{ textDecoration: "none" }}
      >
        <Card
          className={styles.cardContainer}
          style={{ width: 300 }}
          loading={loading}
          cover={
            !loading && classItem.banner ? (
              <Badge.Ribbon text={`v${classItem.version}`}>
                <img
                  alt={classItem.topic_name || ""}
                  src={classItem.banner || ""}
                  style={{ width: "100%", height: 200 }}
                />
              </Badge.Ribbon>
            ) : undefined
          }
          actions={[
            <span
              className="h-full w-full flex items-center justify-center"
              key="ellipsis"
            >
              <CustomTooltip
                title={`This is course have ${countParticipant(
                  classItem.participants
                )} participants`}
                children={
                  <span className="flex items-center gap-1.5">
                    <MdGroups size="1.4rem" key="group" color="#666666" />
                    <p style={{ fontSize: "0.9rem" }}>
                      {countParticipant(classItem.participants)}
                    </p>
                  </span>
                }
              />
            </span>,
            <span
              className="h-full w-full flex items-center justify-center"
              key="ellipsis"
            >
              <CustomTooltip
                title={`This is course have ${countParticipant(
                  classItem.participants
                )} lessons`}
                children={
                  <span className="flex items-center gap-1.5">
                    <MdOutlinePlayCircleFilled
                      size="1.2rem"
                      key="group"
                      color="#666666"
                    />
                    <p style={{ fontSize: "0.9rem" }}>
                      {countParticipant(classItem.participants)}
                    </p>
                  </span>
                }
              />
            </span>,
            <span
              className="h-full w-full flex items-center justify-center"
              key="ellipsis"
            >
              <CustomTooltip
                title={`This is course have ${formatTime(
                  classItem.duration,
                  "minutes"
                )} minutes to complete`}
                children={
                  <span className="flex items-center gap-1.5">
                    <IoTime size="1.2rem" key="group" color="#666666" />
                    <p style={{ fontSize: "0.9rem" }}>
                      {formatTime(classItem.duration, "minutes")} min
                    </p>
                  </span>
                }
              />
            </span>,
          ]}
        >
          {!loading && (
            <>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  marginBottom: 8,
                  lineHeight: "1rem",
                }}
              >
                <div>
                  <CustomTooltip
                    title={classItem.topic_name}
                    children={
                      <p className="w-fit flex items-center gap-1">
                        <Award size="1.2rem" color="gold" />
                        {classItem.topic_name}
                      </p>
                    }
                  />
                </div>
              </div>
              <div style={{ fontSize: "0.95rem", marginBottom: 4 }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: 5 }}
                >
                  {/* <StatusTag color="blue" content="In Progress" /> */}
                  {/* <p>Version: {classItem.version}</p> */}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StatusTag
                    color="blue"
                    content={
                      <div className="flex items-center">{classItem.type}</div>
                    }
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    4.5&nbsp;
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </>
          )}
        </Card>
      </Link>
    </div>
  );
};

export default CardEnrolledCourses;
