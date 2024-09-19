import { useRouter } from "next/router";
import LayoutHeader from "./header/header";
import LayoutNavigation from "./navigation/navigation";
import LayoutFooter from "./footer/footer";
import { Breadcrumb, Layout, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Content } = Layout;
const LOGIN_PAGE = [
  "/login",
  "/",
  //여기다가 로그인 페이지만 넣고 네비 안뜨게 설정하자구~
];
export default function LayoutPage(props) {
  const router = useRouter();
  const isLoginPage = LOGIN_PAGE.includes(router.asPath);

  const [page, setPage] = useState("welcome");
  const [detail, setDetail] = useState("detail");
  //////////////////////////////나중에 다른파일로 바꿔서 import합시다.
  const pageMap = {
    "/wms/member": ["회원관리", "회원조회"],
    "/wms/member/1": ["회원관리", "회원승인"],
    "/wms/member/2": ["회원관리", "또뭐있"],
    "/wms/warehouse": ["창고관리", "창고현황"],
    "/wms/warehouse/1": ["창고관리", "또뭐있"],
    "/wms/outbound": ["출고관리", "출고현황"],
    "/wms/outbound/1": ["출고관리", "출고승인"],
    "/wms/outbound/2": ["출고관리", "기타등등"],
    "/wms/inbound": ["입고관리", "입고현황"],
    "/wms/inbound/1": ["입고관리", "입고승인"],
    "/wms/inventory": ["재고관리", "재고현황"],
    "/wms/inventory/1": ["재고관리", "음..."],
    "/wms/inventory/2": ["재고관리", "기타등등"],
  };
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };
  const items = [
    getItem("회원관리", "sub1", <UserOutlined />, [
      getItem(pageMap["/wms/member"][1], "/wms/member"),
      getItem(pageMap["/wms/member/1"][1], "/wms/member/1"),
      getItem(pageMap["/wms/member/2"][1], "/wms/member/2"),
    ]),
    getItem("창고관리", "sub2", <TeamOutlined />, [
      getItem("창고현황 조회", "/wms/warehouse"),
      getItem("또뭐가 있더라..", "/wms/warehouse/1"),
    ]),

    getItem("출고관리", "sub3", <DesktopOutlined />, [
      getItem("출고현황", "/wms/outbound"),
      getItem("음...", "/wms/outbound/1"),
      getItem("기타등등", "/wms/outbound/2"),
    ]),
    getItem("입고관리", "sub4", <PieChartOutlined />, [
      getItem("입고현황", "/wms/inbound"),
      getItem("또뭐가 있더라..", "/wms/inbound/1"),
    ]),
    getItem("재고관리", "sub5", <DesktopOutlined />, [
      getItem("재고현황", "/wms/inventory"),
      getItem("음...", "/wms/inventory/1"),
      getItem("기타등등", "/wms/inventory/2"),
    ]),
  ];
  /////////////////////////////여기 위에 지저분한거 나중에 다른파일로 뺍시다.
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onClickNav = ({ item, key, keyPath, domEvent }) => {
    setPage(pageMap[key][0]);
    setDetail(pageMap[key][1]);
    router.push(key);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {!isLoginPage && (
        <LayoutNavigation onClickNav={onClickNav} items={items} />
      )}
      <Layout>
        <LayoutHeader />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {!isLoginPage && <Breadcrumb.Item>{page}</Breadcrumb.Item>}
            {!isLoginPage && <Breadcrumb.Item>{detail}</Breadcrumb.Item>}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </div>
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}
