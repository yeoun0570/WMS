import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Button, Modal } from "antd";

export const Wrapper = styled.form`
  margin: auto;
  width: 472px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  flex-grow: 1;
  
  div {
    font-weight: normal;
    font-size: 12px;
    flex-grow: 1;
    
  }

  input {
    border : solid 1px ${theme.colors.glbGrey};
    border-radius: 6px;
    font-weight: normal;
    padding: 6px;
    flex-grow: 1;
  }
`;

export const MyButton = styled(Button)`
  &: hover {
    border-color: ${theme.colors.glbOrange} !important;
    color: ${theme.colors.glbOrange} !important;
  }
`;