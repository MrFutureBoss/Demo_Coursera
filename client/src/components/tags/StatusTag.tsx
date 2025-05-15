import React from "react";
import { Tag } from "antd";

export default function StatusTag({
  color,
  content,
}: {
  color: string;
  content: string | React.ReactNode;
}) {
  return <Tag color={color}>{content}</Tag>;
}
