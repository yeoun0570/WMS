import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  /* height: 1847px; */
  margin: 20px 400px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 102px;
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
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
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
  align-items: center;
  padding: 40px;
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
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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