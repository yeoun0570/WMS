import { Layout, theme } from "antd";
const { Header } = Layout;
import styled from "@emotion/styled";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
`;
const Item = styled.div`
  padding-left: 30px;
`;
export default function LayoutHeader(props) {
  const onClickMyPage = () => {
    props.setPage(props.pageMap["/wms/mypage"][0]);
    props.setDetail(props.pageMap["/wms/mypage"][1]);
    props.router.push("/wms/mypage");
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        margin: "5px 16px",
      }}
    >
      <Wrapper>
        <Item>WMS</Item>
        <Item>
          <UserOutlined onClick={onClickMyPage} />
        </Item>
        <Item>
          <BellOutlined onClick={props.showLoading} />
        </Item>
      </Wrapper>
    </Header>
  );
}
