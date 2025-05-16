import React, { useEffect, useState } from "react";
import { Avatar, List, Skeleton } from "antd";
import { SearchCourse } from "@/store/interface/courses";
import styles from "@/styles/search/search_tool.module.scss";
interface SearchResultProps {
  search_results: SearchCourse[];
  loading: boolean;
}

export default function SearchResult({ search_results, loading }: SearchResultProps) {
  const [list, setList] = useState<SearchCourse[]>([]);

  useEffect(() => {
    setList(search_results.map((item) => ({ ...item, loading: false })));
    setList(search_results.map((item) => ({ ...item, loading: false })));
  }, [search_results]);

  // const onLoadMore = () => {
  //   setList(
  //     data.concat(
  //       Array.from({ length: PAGE_SIZE }).map(() => ({ loading: true } as unknown as SearchCourse))
  //     )
  //   );
  //   const nextPage = page + 1;
  //   setPage(nextPage);
  //   const results = Array.isArray(search_results) ? search_results : [];
  //   const newData = data.concat(results);
  //   setData(newData);
  //   setList(newData);
  //   window.dispatchEvent(new Event("resize"));
  // };

  // const loadMore =
  //   !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;

  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        style={{maxHeight: '50rem', height: 'fit-content', overflowY: 'auto'}}
        renderItem={(item: SearchCourse) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">Not enrolled</a>,
            ]}
            className={styles.search_found}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.banner} />}
                title={<a href="https://ant.design">{item.topic_name}</a>}
                description={<></>}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}
