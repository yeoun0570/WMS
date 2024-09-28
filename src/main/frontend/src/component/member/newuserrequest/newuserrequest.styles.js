import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  width: 600px;
  /* height: 1847px; */
  margin: 20px 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: solid 1px green;


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
  text-align: left;
  width: 100%;
  font-size: 34px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 20px;
  }
`;

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
  justify-content: flex-start;
  padding: 10px;
  border: solid 1px red;
  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
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

export const NewuserrequestButton = styled.button`
  width: 155px;
  height: 50px;
  background-color: white;
  border: solid 1px blue;
  border-radius: 0px;
  font-size: 16px;
  cursor: pointer;
`

export const Error = styled.div`
  font-size: 10px;
  color: red;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 8px;
  }
`;
export const TableWrapper = styled.div`
  overflow-x: auto; /* 테이블이 화면을 넘어갈 때 스크롤 가능하도록 */
  overflow-y: auto;
  padding: 10px;
  border: solid 1px black;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
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