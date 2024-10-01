import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';
import theme from '../styles/theme';
import { Table, Button, Select, Calendar, Modal, Alert } from 'antd';

// Table 컴포넌트를 styled-components로 스타일링
//테이블 스타일링

export const Htable = styled(Table)`
.ant-table {
    font-size: 30px;  /* 셀 폰트 크기 */
    padding: 10px 12px;  /* 셀 패딩 */
}

.ant-table-thead > tr > th {
    background-color: #fafafa;
    border-top-radius: 15px;  /* 헤더 테두리 */
    font-size: 16px; /* 폰트 크기*/
}

.ant-table-cell {
    font-size: 13px;  /* 폰트 크기 */
    font-weight: 200; /*폰트 굵기*/
}

.ant-table-cell > .ant-btn-primary {
  background-color: ${theme.colors.glbOrange};

  &:hover {
    background-color: ${theme.colors.glbDarkOrange};
  }
}

.ant-table-cell > .ant-btn-default {
  background-color: ${theme.colors.glbWhite};

  &:hover {
    color: ${theme.colors.glbOrange};
    border-color: ${theme.colors.glbOrange};
  }
}

.ant-table-cell-control-interactive {
    width: 80px;  /* 컨트롤 크기 */
}

.ant-table-pagination {
    justify-content: center;
    aligen-items: flex-start;
}
`;

//검색창 스타일링
export const HSelectWrapper = styled.div`
    display: flex;            //요소 가로로 정렬
    flex-direction: row;      //itmes를 수평축(왼쪽에서 오른쪽으로)으로 표시
    ailgen-items: center;     //items각 줄 가운데 정렬
    width: 500px;               //가로너비설정
`;

export const HSelect = styled(Select)`
    font-weight: bold;
`;

export const HButtonWrapper = styled.div`
  display: flex;                    // 가로로 요소를 배치
  align-items: center;              // 세로로 가운데 정렬
  justify-content: flex-end;        // 버튼을 오른쪽으로 정렬
  margin-right: 25px;
`;

export const HButtonDefault = styled(Button)`
   align-items: center;          // 버튼의 내용(텍스트, 아이콘)을 가운데 정렬
  justify-content: center;      // 버튼의 내용을 수평으로 가운데 정렬
  padding: 8px 16px;            // 버튼의 내부 여백을 설정
  font-size: 16px;              // 버튼 텍스트의 크기를 16px로 설정
  background-color: ${theme.colors.glbOrange};    // 버튼의 배경색을 설정
  color: white !important;                 // 텍스트 색상을 흰색으로 설정
  border: none;                 // 버튼의 테두리를 없애기
    cursor: pointer;             // 커서는 포인터
  &:hover {                     // hover 상태에서 버튼의 스타일 변경->적용이안됨
    background-color: rgb(230, 70, 20) !important;
    }    // hover 시 배경색을 진한 오렌지로 변경

  div {
    background-color: ${theme.colors.glbOrange} !important;    // 버튼의 배경색을 설정
    background-color: ${theme.colors.glbWhite} !important;
  }
`;

export const HButtonFail = styled(Button)`
   align-items: center;          // 버튼의 내용(텍스트, 아이콘)을 가운데 정렬
  justify-content: center;      // 버튼의 내용을 수평으로 가운데 정렬
  padding: 8px 16px;            // 버튼의 내부 여백을 설정
  font-size: 16px;              // 버튼 텍스트의 크기를 16px로 설정
  background-color: red;        // 버튼의 배경색을 설정
  color: white;                 // 텍스트 색상을 흰색으로 설정
  border: none;                 // 버튼의 테두리를 없애기
    cursor: pointer;             // 커서는 포인터
  &:hover {                     // hover 상태에서 버튼의 스타일 변경->적용이안됨
    background-color: rgb(230, 70, 20)};
    }    // hover 시 배경색을 진한 오렌지로 변경
`;

export const HButtonSuccess = styled(Button)`
   align-items: center;          // 버튼의 내용(텍스트, 아이콘)을 가운데 정렬
  justify-content: center;      // 버튼의 내용을 수평으로 가운데 정렬
  padding: 8px 16px;            // 버튼의 내부 여백을 설정
  font-size: 16px;              // 버튼 텍스트의 크기를 16px로 설정
  background-color: blue;        // 버튼의 배경색을 설정
  color: white;                 // 텍스트 색상을 흰색으로 설정
  border: none;                 // 버튼의 테두리를 없애기
    cursor: pointer;             // 커서는 포인터
  &:hover {                     // hover 상태에서 버튼의 스타일 변경->적용이안됨
    background-color: rgb(230, 70, 20)};
    }    // hover 시 배경색을 진한 오렌지로 변경
`;

export const HMemberModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 세로 중앙 정렬을 위한 높이 설정 */
`;

export const HModal = styled(Modal)`
   justify-content: center; /* 모달을 수평 중앙 정렬 */
   align-items: center; /* 모달을 수직 중앙 정렬 */
    justify-content: center;
    align-items: center;
    top: 35%; /* 모달이 화면의 중간에서 시작하도록 설정 */
    left: 40%;

    .ant-modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center; /* 모달 내부 콘텐츠를 수직 중앙 정렬 */
    align-items: center; /* 모달 내부 콘텐츠를 수평 중앙 정렬 */
  }
`;


export const HMembermodal = styled(Modal)`
.ant-modal-content {
    width: 1000px;
    max-width: 100%;
    padding: 20px
    background-color: white;
  }

  .ant-modal-header {
    background-color: white;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;

    button {
    margin-left: 8px;
    }
  }
`;

export const HalertWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 부모 div의 높이를 100%로 설정하여 세로 중앙 정렬이 가능하도록 함 */
  border: ${theme.borders.greyBorder}; /* 보더 스타일 */

`;

export const Halert = styled(Alert)`
position: absolute;
  top: 50px;
  right: 10px;
  width: 400px; /* 너비를 설정 */
  z-index: 1000; /* 다른 요소 위에 위치하도록 설정 */

`;