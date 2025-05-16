import React from "react";
import HeaderSearch from "@/components/inputs/HeaderSearch";
import { Popover } from "antd";
import { useState } from "react";
import styles from "@/styles/search/search_tool.module.scss";
import SearchResult from "@/components/lists/SearchResult";
import Link from "next/link";
import { GrSearchAdvanced } from "react-icons/gr";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import type { SearchCourse } from "@/store/interface/courses";

const title = (founds: number) => (
    <div className={`${styles.search_result_popover_title} flex items-center justify-between`}>
        <p>Result: {founds} found(s)</p>
        <Link href="/course" className="cursor-pointer font-normal flex items-center gap-1">
            <GrSearchAdvanced size="1rem" />
            Advanced Search
        </Link>
    </div>
)

const content = (search_results: SearchCourse[], loading: boolean) => (
    <div className={styles.search_result_popover_content}>
        <SearchResult search_results={search_results} loading={loading} />
    </div>
)

export default function SearchCourse() {
  const [open, setOpen] = useState(false);
  const search_results = useSelector((state: RootState) => state.course.searchCourses);
  const founds = useSelector((state: RootState) => state.course.founds);
  const loading = useSelector((state: RootState) => state.course.loading);
  console.log("Search results: ", search_results)
  
  return (
    <div>
      <Popover
        placement="bottom"
        arrow={false}
        title={title(founds)}
        content={content(search_results, loading)}
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        className={styles.search_result_popover}
      >
        <div onClick={() => setOpen(true)} style={{ display: "inline-block" }}>
          <HeaderSearch/>
        </div>
      </Popover>
    </div>
  );
}
