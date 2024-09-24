import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  margin: 150px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

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

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
`;

export const Name = styled.input`
  width: 486px;
  height: 52px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding-left: 16px;

  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 230px;
    height: 30px;
  }
`;

export const Password = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 230px;
    height: 30px;
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
  width: 996px;
  height: 52px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding-left: 16px;
  @media screen and (max-width: 767px) {
  
    /*모바일 */
    width: 500px;
    height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
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
  border: 0;
  border-radius: 15px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
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
