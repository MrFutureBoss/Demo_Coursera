import React from "react";
import styles from "@/styles/staff_home_styles/staff_home_continue_learning.module.scss";
import { Button, Col, Row } from "antd";
import Link from "next/link";

export default function ContinueLearning() {
  return (
    <Row
      className={styles.home_continue_learning}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Col lg={22} md={24}>
        <p className={styles.title}>Continue Learning</p>
        <div className="flex justify-end mb-5">
          <Link href="/" className={styles.view_all_learning}>
            View all learning
          </Link>
        </div>
        <Row gutter={[16, 16]}>
          <Col lg={15} md={24} className={styles.box}>
            <Row>
              <Col lg={4}>
                <div className={styles.banner_box}>
                  <img
                    className={styles.banner_image}
                    src="https://netweb.vn/wp-content/uploads/2019/07/php-la-gi-1-1.jpg"
                    alt="demo"
                  />
                </div>
              </Col>
              <Col
                lg={9}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <div>
                  <div className="flex gap-1.5">
                    <div>[T]</div>
                    <p>Course name</p>
                  </div>
                  <div className={styles.overview}>
                    <p>Overview: OKKK</p>
                  </div>
                  <div className="text-gray-500">
                    <p>Enrolled: 23/04/2025</p>
                  </div>
                </div>
              </Col>
              <Col
                lg={10}
                md={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.get_start_box}>
                  <Row>
                    <Col lg={14}>
                      <div className="h-full w-full flex justify-center items-center">
                        <div>
                          <p className="font-bold">Project Overview</p>
                          <p className="text-gray-500">Reading: 10%</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div className="h-full w-full flex justify-center items-center">
                        <Button type="primary">Get started</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={9} md={24} className={styles.tracking_progess_box}>
            <div className="flex flex-col gap-1.5">
              <p className="font-bold">Weekly goal progress tracker</p>
              <p>
                Learners with goals are 75% more likely to complete their
                courses. Set a weekly goal now to take charge of your learning
                journey and boost your success!
              </p>
              <Button className="w-fit" color="primary" variant="outlined">
                Set your weekly goal
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
