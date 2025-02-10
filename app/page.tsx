import Home from "@/component/home/home";
// import styles from "./page.module.css";
import Footer from "@/component/common/footer/footer";
import CustomNavbar from "@/component/common/navbar/navbar";

export default function HomeWrapper() {
  return (
    <div>
      <CustomNavbar />
      <Home />
      <Footer />
    </div>
  );
}
