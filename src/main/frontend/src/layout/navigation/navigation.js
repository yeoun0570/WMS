import React, { useState } from "react";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default function LayoutNavigation(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["/wms/member"]}
        mode="inline"
        items={props.items}
        onClick={props.onClickNav}
      />
    </Sider>
  );
}
