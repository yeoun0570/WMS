import * as S from "./notice.styles";
import { Card } from "antd";

export default function NoticeUI(props) {
  return (
    <Card
      style={{
        width: 330,
        backgroundColor: props.color,
      }}
      onClick={props.onClickNotice}
    >
      <p>{props.el.date}</p>
      <p>{props.el.title}</p>
      <p>{props.el.content}</p>
    </Card>
  );
}
