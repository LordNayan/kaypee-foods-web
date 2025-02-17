import Home from "@/component/home/home";
// import styles from "./page.module.css";
import CustomNavbar from "@/component/common/navbar/navbar";

export default function HomeWrapper() {
  return (
    <div>
      <CustomNavbar />
      <Home />
    </div>
  );
}
