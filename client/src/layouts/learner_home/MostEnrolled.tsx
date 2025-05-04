import { Col, Row, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/components/hooks";
import type { RootState } from "@/store/types";
import styles from "@/styles/staff_home_styles/staff_home_most_enrolled.module.scss";
import CardProducts from "@/components/cards/CardProducts";
import { CourseApi } from "@/components/cards/CardProducts";
import { get_all_courses } from "@/store/reducers/courseReducer";

export default function MostEnrolled() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const loading = useSelector((state: RootState) => state.courses.loading);
  const error = useSelector((state: RootState) => state.courses.error);
  console.log("courses in MostEnrolled:", courses);
  // Phân trang: offset/limit
  const [displayCount, setDisplayCount] = useState(4);
  const limit = 4;

  useEffect(() => {
    dispatch(get_all_courses({ offset: 0, limit: 1000 })); // Lấy hết, hoặc tăng limit nếu dữ liệu lớn
  }, [dispatch]);

  const handleShowMore = () => {
    setDisplayCount(courses.length);
  };
  const handleShowFewer = () => {
    setDisplayCount(limit);
  };

  // Số lượng còn lại chưa show
  const remainingCount = courses.length - displayCount;

  // Hiển thị chỉ displayCount item đầu tiên
  const visibleCourses = Array.isArray(courses) ? courses.slice(0, displayCount) : [];

  return (
    <Row
      className={styles.home_most_enrolled}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Col lg={22} md={24}>
        <div className="mb-7">
          <p className={styles.title}>Most enrolled courses</p>
        </div>
        {/* Loading skeletons */}
        {loading ? (
          <Row gutter={[16, 16]}>
            {[...Array(limit)].map((_, idx) => (
              <Col lg={6} md={12} key={idx}>
                <CardProducts course={{} as CourseApi} loading={true} />
              </Col>
            ))}
          </Row>
        ) : null}
        {error && <div style={{ color: 'red' }}>{String(error)}</div>}
        {!loading && (
          <>
            <Row gutter={[16, 16]}>
              {visibleCourses.length > 0 ? (
                visibleCourses.map((course: CourseApi, idx: number) => (
                  <Col lg={6} md={12} key={course.id || idx}>
                    <CardProducts course={course} loading={false} />
                  </Col>
                ))
              ) : (
                courses.length === 0 && <div>No courses found.</div>
              )}
            </Row>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              {displayCount < courses.length && (
                <Button
                  color="primary" variant="outlined"
                  onClick={handleShowMore}
                  disabled={loading}
                >
                  Show {remainingCount} more
                </Button>
              )}
              {displayCount > limit && displayCount >= courses.length && (
                <Button
                  color="primary" variant="outlined"
                  onClick={handleShowFewer}
                  disabled={loading}
                >
                  Show fewer
                </Button>
              )}
            </div>
          </>
        )}
      </Col>
    </Row>
  );
}
