import { Outlet } from 'umi';
import "@/styles/normalize.css";
import styles from "./style.less";

export default function Layout() {
  return (
    <div className={styles.ylong}>
      <Outlet />
    </div>
  );
}
