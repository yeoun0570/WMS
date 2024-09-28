import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  width: 600px;
  /* height: 1847px; */
  margin: 10px 130px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 0px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 600px;
    margin: 20px;
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 60px;
  } 
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 34px;
  font-weight: bold;
  border-color: red;
  

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 20px;
  }
`;


/*Text*/
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 10px;
  }
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  
  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
`;

export const Input = styled.input`
    width: 300px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233,233,233);

  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 600px;
    height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 0px;
  

  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
`;

/*Button*/
export const EmployeeListButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;
  border: ${theme.borders.greyBorder}; 
  border-radius: 0px;
  font-size: 16px;
  cursor: pointer;
`;

export const NonEmployeeButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;
  border: ${theme.borders.greyBorder}; 
  border-radius: 0px;
  font-size: 16px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ced4da;
  border: 0;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  font-size: 15px;
  font-weight: 500;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: #fab005;
  cursor: pointer;
`;

/* 재작성 해야 하는 경우*/
export const Error = styled.div`
  font-size: 10px;
  color: red;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 8px;
  }
`;

/*Table*/
export const TableWrapper = styled.div`
  overflow-x: auto; /* 테이블이 화면을 넘어갈 때 스크롤 가능하도록 */
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: glbLightGrey;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;