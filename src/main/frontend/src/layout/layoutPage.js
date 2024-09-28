import axios from "axios";
import { useRouter } from "next/router";
import LayoutHeader from "./header/header";
import LayoutNavigation from "./navigation/navigation";
import LayoutFooter from "./footer/footer";
import { Breadcrumb, Layout, theme, Button, Drawer } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Notice from "../notice/notice.container";
const { Content } = Layout;
const LOGIN_PAGE = [
  "/login",
  "/",
  "/login/new",
  //여기다가 로그인 페이지만 넣고 네비 안뜨게 설정하자구~
];
export default function LayoutPage(props) {
  const router = useRouter();
  const isLoginPage = LOGIN_PAGE.includes(router.asPath);
  const [notices, setNotices] = useState([]);

  const [page, setPage] = useState("대시보드");
  const [detail, setDetail] = useState("사원관리");
  const [drawOpen, setDrawOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  //////////////////////////////나중에 다른파일로 바꿔서 import합시다.
  const pageMap = {
    "/wms/dashboard": ["대시보드"],
    "/wms/member": ["회원관리", "사원관리"],
    "/wms/member/newuserrequest": ["회원관리", "회원가입요청"],
    "/wms/warehouse": ["창고관리", "창고조회"],
    "/wms/warehouse/addwarehouse": ["창고관리", "창고등록"],
    "/wms/outbound": ["출고관리", "출고요청서조회"],
    "/wms/outbound/outbounddonelist": ["출고관리", "출고현황"],
    "/wms/outbound/writeoutbound": ["출고관리", "출고요청서작성"],
    "/wms/inbound": ["입고관리", "입고요청서조회"],
    "/wms/inbound/inbounddonelist": ["입고관리", "입고현황"],
    "/wms/inbound/writeinbound": ["입고관리", "입고요청서작성"],
    "/wms/stock": ["재고관리", "재고조회"],
    "/wms/waybill": ["운송장관리", "운송장조회"],
    "/wms/waybill/modifywaybill": ["운송장관리", "운송장수정"],
    "/wms/mypage": ["WMS", "내정보"],
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
    getItem("대시보드", "/wms/dashboard", <PieChartOutlined />),
    getItem("회원관리", "sub1", <UserOutlined />, [
      getItem(pageMap["/wms/member"][1], "/wms/member"),
      getItem(pageMap["/wms/member/newuserrequest"][1], "/wms/member/newuserrequest"),
    ]),
    getItem("창고관리", "sub2", <TeamOutlined />, [
      getItem("창고조회", "/wms/warehouse"),
      getItem("창고등록", "/wms/warehouse/addwarehouse"),
    ]),

    getItem("출고관리", "sub3", <DesktopOutlined />, [
      getItem("출고요청서조회", "/wms/outbound"),
      getItem("출고현황", "/wms/outbound/outbounddonelist"),
      getItem("출고요청서작성", "/wms/outbound/writeoutbound"),
    ]),
    getItem("입고관리", "sub4", <PieChartOutlined />, [
      getItem("입고요청서조회", "/wms/inbound"),
      getItem("입고현황", "/wms/inbound/inbounddonelist"),
      getItem("입고요청서작성", "/wms/inbound/writeinbound"),
    ]),
    getItem("재고관리", "sub5", <DesktopOutlined />, [
      getItem("재고조회", "/wms/stock"),
    ]),
    getItem("운송장관리", "sub6", <DesktopOutlined />, [
      getItem("운송장조회", "/wms/waybill"),
      getItem("운송장수정", "/wms/modifywaybill"),
    ])
  ];
  /////////////////////////////여기 위에 지저분한거 나중에 다른파일로 뺍시다.리팩토링필요
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onClickNav = ({ item, key, keyPath, domEvent }) => {
    setPage(pageMap[key][0]);
    setDetail(pageMap[key][1]);
    router.push(key);
  };

  const showLoading = async () => {
    setDrawOpen(true);
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:8080/api/jw");
      setNotices(response.data); // notices 상태 업데이트
    } catch (error) {
      setNotices([
        { date: "2022", title: "통지", content: "내용", checked: false },
        { date: "2023", title: "통지", content: "내용", checked: true },
        { date: "2024", title: "통지", content: "내용", checked: true },
        { date: "2021", title: "통지", content: "내용", checked: false },
        { date: "2022", title: "통지", content: "내용", checked: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {!isLoginPage && (
          <LayoutNavigation onClickNav={onClickNav} items={items} />
        )}
        <Layout>
          {!isLoginPage && (
            <LayoutHeader
              router={router}
              setPage={setPage}
              setDetail={setDetail}
              showLoading={showLoading}
              pageMap={pageMap}
            />
          )}
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
      <Drawer
        closable
        destroyOnClose
        title={<p>notice</p>}
        placement="right"
        open={drawOpen}
        loading={loading}
        onClose={() => {
          setDrawOpen(false);
        }}
      >
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
          onClick={showLoading}
        >
          추가작업
        </Button>
        {notices.map((el) => (
          <Notice id={el.id} el={el} router={router} />
        ))}
      </Drawer>
    </>
  );
}
