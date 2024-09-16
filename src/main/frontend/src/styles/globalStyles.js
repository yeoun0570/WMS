import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myFont";
  }
  @font-face {
    //전체 폰트설정은 여기서 해주자고
    font-family: "myFont";
    src: url("/fonts/GeistVF.woff");
  }
`;
