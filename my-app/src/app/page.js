import React from "react";
import NavbarWeb from "@/components/NavbarComponents/NavbarWeb";
import TabsData from "@/components/TabsComponents/TabsData";
import "./globals.css";
const page=()=> {
  return (
    <div classsName="homePageContain">
      <NavbarWeb />
      <TabsData/>
      </div>
  );
}

export default page;
