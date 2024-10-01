import { Divider, Tabs ,Table, Flex } from 'antd';
import * as H from "../../styles/pageStyles";

export default function MemberUI({
  data,
  items,
  columns,
  onChange,
}) {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={(key) => {onChange(key);}} />
      <H.Htable
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}