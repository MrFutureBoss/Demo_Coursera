import StaffHomeHeader1 from "@/layouts/staff_home/StaffHomeHeader1";
import styles from "@/styles/staff_home_styles/staff_home_common.module.css";
import StaffHomeHeader2 from "@/layouts/staff_home/StaffHomeHeader2";
import "../styles/custom_antd_css/tablist.css";
export default function Home() {
  return (
    <div className={styles.staff_header}>
      <StaffHomeHeader1 />
      <StaffHomeHeader2 />
    </div>
  )
}
