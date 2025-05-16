/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { List, Skeleton } from "antd";
import type { Class } from "@/store/interface/classes";
import styles from "@/styles/learn/course_list.module.scss";
import StatusTag from "../tags/StatusTag";
import { RxStarFilled } from "react-icons/rx";
import { MdGroups, MdOutlinePlayCircleFilled } from "react-icons/md";
import { countParticipant } from "@/utilities/count/countParticipant";
import { IoTime } from "react-icons/io5";
import formatTime from "@/utilities/format/formatTime";
import { useRouter } from "next/navigation";
import { urlToHyphenated } from "@/utilities/url/urlToHyphenated";
import Link from "next/link";

interface EnrolledCourseListProps {
  classes: Class[];
  loading?: boolean;
}

const EnrolledCourseList: React.FC<EnrolledCourseListProps> = ({
  classes,
  loading = false,
}) => {
  const router = useRouter();
  const handleClick = (item: Class) => {
    router.push(
      `/learn/${urlToHyphenated(item.topic_name || "")}-${
        item.course_id
      }/progress`
    );
  };
  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={classes}
      style={{ maxHeight: "25rem", overflowY: "auto" }}
      renderItem={(item) => (
        <List.Item
          className={styles.course_list_item}
          onClick={() => handleClick(item)}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={
                <img
                  src={item.banner}
                  alt="banner"
                  style={{
                    width: 100,
                    height: 100,
                    marginLeft: "1rem",
                    borderRadius: "8px",
                  }}
                />
              }
              title={
                <div>
                  <div className="flex items-center">
                    {item.topic_name}&nbsp;
                    <StatusTag color="blue" content={`v.${item.version}`} />
                  </div>
                  <div className="flex items-center">
                    <StatusTag
                      color="blue"
                      content={
                        <div className="flex items-center">{item.type}</div>
                      }
                    />
                    4.5&nbsp;
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                    <RxStarFilled className="text-yellow-400" />
                  </div>
                </div>
              }
              description={
                <div className="flex items-center gap-1.5 w-full">
                  <span className="flex items-center gap-1.5">
                    <MdGroups size="1.4rem" color="#666666" />
                    <p style={{ fontSize: "0.9rem" }}>
                      {countParticipant(item.participants)}
                    </p>
                    participants
                  </span>
                  ,
                  <span className="h-full w-fit">
                    <span className="flex items-center gap-1.5">
                      <MdOutlinePlayCircleFilled
                        size="1.2rem"
                        color="#666666"
                      />
                      <p style={{ fontSize: "0.9rem" }}>
                        {countParticipant(item.participants)}{" "}
                      </p>
                      lesson
                    </span>
                  </span>
                  ,
                  <span className="h-full w-full">
                    <span className="flex items-center gap-1.5">
                      <IoTime size="1.2rem" color="#666666" />
                      <p style={{ fontSize: "0.9rem" }}>
                        {formatTime(item.duration, "minutes")}
                      </p>
                      mins
                    </span>
                  </span>
                </div>
              }
            >
              <Link
                href={`/learn/${urlToHyphenated(item.topic_name || "")}-${
                  item.course_id
                }/progress`}
              ></Link>
            </List.Item.Meta>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default EnrolledCourseList;
