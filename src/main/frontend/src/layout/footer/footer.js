import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function LayoutFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Warehouse Management System ©{new Date().getFullYear()} Created by LCWMS
    </Footer>
  );
}
