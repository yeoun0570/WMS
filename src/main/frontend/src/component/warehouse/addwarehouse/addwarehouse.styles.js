import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Wrapper = styled.form`
  width: 100%;
`;

export const Input = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  
  div {
    font-weight: normal;
    font-size: 12px;
  }

  input {
    border : solid 1px ${theme.colors.glbGrey};
    border-radius: 6px;
  }
`;