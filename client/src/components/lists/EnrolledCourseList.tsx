/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Badge, List, Space, Typography } from "antd";
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

const { Text } = Typography;

interface CardEnrolledCoursesProps {
  classItem: Class;
  loading?: boolean;
}

const CardEnrolledCourses: React.FC<CardEnrolledCoursesProps> = ({
  classItem,
  loading = false,
}) => {
  const actions = [
    <CustomTooltip
      key="participants"
      title={`This course has ${countParticipant(
        classItem.participants
      )} participants`}
    >
      <Space size="small">
        <MdGroups size="1.4rem" color="#666666" />
        <Text>{countParticipant(classItem.participants)}</Text>
      </Space>
    </CustomTooltip>,
    <CustomTooltip
      key="lessons"
      title={`This course has ${countParticipant(
        classItem.participants
      )} lessons`}
    >
      <Space size="small">
        <MdOutlinePlayCircleFilled size="1.2rem" color="#666666" />
        <Text>{countParticipant(classItem.participants)}</Text>
      </Space>
    </CustomTooltip>,
    <CustomTooltip
      key="duration"
      title={`This course takes ${formatTime(
        classItem.duration,
        "minutes"
      )} minutes to complete`}
    >
      <Space size="small">
        <IoTime size="1.2rem" color="#666666" />
        <Text>{formatTime(classItem.duration, "minutes")} min</Text>
      </Space>
    </CustomTooltip>,
  ];

  return (
    <List.Item
      className={styles.listItem}
      actions={actions}
      extra={
        !loading && classItem.banner ? (
          <Badge.Ribbon text={`v${classItem.version}`}>
            <img
              alt={classItem.topic_name || ""}
              src={classItem.banner || ""}
              style={{ width: 280, height: 200, objectFit: "cover" }}
            />
          </Badge.Ribbon>
        ) : null
      }
    >
      <Link
        href={`/learn/${urlToHyphenated(classItem.topic_name || "")}-${
          classItem.course_id
        }/progress`}
        style={{ textDecoration: "none" }}
      >
        <List.Item.Meta
          avatar={<Award size="1.8rem" color="gold" />}
          title={
            <CustomTooltip title={classItem.topic_name}>
              <Text strong style={{ fontSize: "1.1rem" }}>
                {classItem.topic_name}
              </Text>
            </CustomTooltip>
          }
          description={
            <Space direction="vertical" size="small">
              <StatusTag
                color="blue"
                content={<div className="flex items-center">{classItem.type}</div>}
              />
              <Space>
                <Text>4.5</Text>
                {[...Array(5)].map((_, i) => (
                  <RxStarFilled key={i} className="text-yellow-400" />
                ))}
              </Space>
            </Space>
          }
        />
      </Link>
    </List.Item>
  );
};

export default CardEnrolledCourses;