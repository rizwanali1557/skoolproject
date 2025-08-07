import React from "react";
import NavbarWeb from "../components/NavbarComponents/NavbarWeb";
import style from ".././styles/Home.module.css";
import VerticalTabs from "../components/VerticalTabsComponent/VerticalTabs";
const page=()=> {
  return (
    <div className={style.settingPageContain}>
      <NavbarWeb />
      <div className={style.verticalTabsContain}>
      <VerticalTabs/>
      </div>
    </div>
  );
}

export default page;
