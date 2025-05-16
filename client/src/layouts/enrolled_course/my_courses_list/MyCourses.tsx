"use client";
import React from "react";
import CustomTabs from "@/components/tabs/CustomTabs";
import { Col, Row, type TabsProps } from "antd";
import styles from "@/styles/learn/my_courses/my_courses.module.scss";
import CardEnrolledCourses from "@/components/cards/CardEnrolledCourses";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import type { Class } from "@/store/interface/classes";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/index";
import { countAllClasses, getAllClasses } from "@/store/reducers/classesReducer";
import CustomPagination from "@/components/paginations/CustomPagination";
import RadioCardAndList from "@/components/radios/RadioCardAndList";
import EnrolledCourseList from "@/components/lists/EnrolledCourseList";

export default function MyCourses() {
  const classes = useSelector((state: RootState) => state.classes.classesForParticipant);
  const count = useSelector((state: RootState) => state.classes.count);
  const loading = useSelector((state: RootState) => state.classes.loading);
  // const error = useSelector((state: RootState) => state.classes.error);
  const dispatch = useDispatch<AppDispatch>();
  const [filter, setFilter] = React.useState("In Progress");
  const [limit, setLimit] = React.useState(4);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [view, setView] = React.useState("card");

  React.useEffect(() => {
    dispatch(countAllClasses({ userId: 1, filter: filter }));
    dispatch(getAllClasses({ userId: 1, filter: filter, offset: 0, limit: limit }));
  }, [dispatch, filter, limit]);

  const handleFilter = (data: string) => {
    setFilter(data);
    dispatch(getAllClasses({ userId: 1, filter: data, offset: 0, limit: limit }));
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span onClick={() => handleFilter("In Progress")}>In Progress</span>,
      children: <div>There are {count} still in progress courses</div>,
    },
    {
      key: "2",
      label: <span onClick={() => handleFilter("Completed")}>Completed</span>,
      children: <div>There are {count} completed courses</div>,
    },
    {
      key: "3",
      label: <span onClick={() => handleFilter("Upcoming")}>Upcoming</span>,
      children: <div>There are {count} upcoming courses</div>,
    },
  ];

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    dispatch(
      getAllClasses({
        userId: 1,
        filter: filter,
        offset: (page - 1) * limit,
        limit: limit,
      })
    );
  };

  const handlePageSizeChange = (pageSize: number) => {
    setLimit(pageSize);
    dispatch(getAllClasses({ userId: 1, filter: filter, offset: 0, limit: pageSize }));
  };

  return (
    <Row className={styles.my_courses_content}>
      <Col lg={12} md={24} sm={24}>
        <h1>My Enrolled Courses</h1>
        <div className={styles.filter_tabs}>
          <CustomTabs items={items} />
        </div>
        <div style={{ margin: "2rem auto" }}>
          <CustomPagination
            total={count}
            current={pageNumber}
            pageSize={limit}
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
          />
        </div>
      </Col>
      <Col lg={12} md={24} sm={24}>
        <div>
          <RadioCardAndList value={view} onChange={(e) => setView(e.target.value)} />
          <div style={{ marginTop: "2rem" }}>
            {loading ? (
              <Row gutter={[32, 16]}>
                {view === "card"
                  ? [...Array(limit)].map((_, idx) => (
                      <Col xl={6} lg={6} md={12} key={idx}>
                        <CardEnrolledCourses classItem={{} as Class} loading={true} />
                      </Col>
                    ))
                  : [...Array(limit)].map((_, idx) => (
                      <Col xl={6} lg={6} md={12} key={idx}>
                        <EnrolledCourseList classes={[{} as Class]} loading={true} />
                      </Col>
                    ))}
              </Row>
            ) : (
              <Row gutter={[16, 16]}>
                {view === "card"
                  ? classes.map((classItem: Class, idx: number) => (
                      <Col lg={12} md={12} key={idx}>
                        <CardEnrolledCourses classItem={classItem} loading={false} />
                      </Col>
                    ))
                  : 
                      <Col span={24}>
                        <EnrolledCourseList classes={classes} loading={false} />
                      </Col>
                    }
              </Row>
            )}
            {/* {error && <div style={{ color: "red" }}>{String(error)}</div>} */}
          </div>
        </div>
      </Col>
    </Row>
  );
}