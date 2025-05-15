import React from "react";
import HeaderSearch from "@/components/inputs/HeaderSearch";
import { Popover } from "antd";
import { useState } from "react";
import styles from "@/styles/search/search_tool.module.scss";
import SearchResult from "@/components/lists/SearchResult";
import Link from "next/link";
import { GrSearchAdvanced } from "react-icons/gr";

const title = (
    <div className={`${styles.search_result_popover_title} flex items-center justify-between`}>
        <p>Result: 0 found(s)</p>
        <Link href="/course" className="cursor-pointer font-normal flex items-center gap-1">
            <GrSearchAdvanced size="1rem" />
            Advanced Search
        </Link>
    </div>
)

const content = (
    <div className={styles.search_result_popover_content}>
        <SearchResult />
    </div>
)

export default function SearchCourse() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover
        placement="bottom"
        arrow={false}
        title={title}
        content={content}
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        className={styles.search_result_popover}
      >
        <div onClick={() => setOpen(true)} style={{ display: "inline-block" }}>
          <HeaderSearch onSearch={(value) => console.log(value)} />
        </div>
      </Popover>
    </div>
  );
}
