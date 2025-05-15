import React from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

interface CustomPaginationProps {
  total: number;
  current: number;
  pageSize: number;
  onChange: (page: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
}

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};

export default function CustomPagination({ total, current, pageSize, onChange, onShowSizeChange }: CustomPaginationProps) {
  return (
    <div>
      <Pagination
        current={current}
        total={total}
        showSizeChanger
        showQuickJumper
        // showTotal={(total) => `Total ${total} items`}
        itemRender={itemRender}
        hideOnSinglePage
        pageSize={pageSize}
        pageSizeOptions={[4, 8, 12, 16]}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        responsive
      />
    </div>
  );
}
