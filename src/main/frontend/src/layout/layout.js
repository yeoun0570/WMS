import { useRouter } from "next/router";
import LayoutHeader from "./header/header";
import LayoutNavigation from "./navigation/navigation";
import LayoutFooter from "./footer/footer";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LOGIN_PAGE = [
  "/login",
  //여기다가 로그인 페이지만 넣고 네비 안뜨게 설정하자구~
];

export default function Layout(props) {
  const router = useRouter();
  const isLoginPage = LOGIN_PAGE.includes(router.asPath);
  return (
    <div>
      <LayoutHeader />
      <Wrapper>
        {!isLoginPage && <LayoutNavigation />}
        <div>{props.children}</div>
      </Wrapper>
      <LayoutFooter />
    </div>
  );
}
