import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myFont";
  }
  /* 기본 토글 버튼 배경색 변경 */
  .ant-layout-sider-trigger {
    background-color: #ffffff !important;
    color: black !important;
  }

  /* 마우스 호버 시 배경색 변경 */
  .ant-layout-sider-trigger:hover {
    background-color: gray !important;
    color: white !important; /* 더 밝은 파란색으로 변경 */
  }

  @font-face {
    //전체 폰트설정은 여기서 해주자고
    font-family: "myFont";
    src: url("/fonts/GeistVF.woff");
  }
`;
