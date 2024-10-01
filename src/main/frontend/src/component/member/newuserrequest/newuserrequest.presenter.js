import React, { useState } from 'react';
import { Divider, Tabs, Table, Button } from 'antd';
import * as H from "../../../styles/pageStyles";


export default function NewUserRequestUI({
  data,
  items,
  columns,
  selectionType,
  onApprove,
  onDeny,
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); 

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};


  return (
    <div>
      <Tabs defaultActiveKey='0' items={items} />

      <H.Htable
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />

      <H.HButtonWrapper>
        <H.HButtonDefault style={{ margin: "2px" }} onClick={onApprove}>
          승인
        </H.HButtonDefault>
        <H.HButtonDefault style={{ margin: "2px" }} onClick={onDeny}>
          미승인
        </H.HButtonDefault> {/* 미승인 버튼 */}
      </H.HButtonWrapper>
    </div>
  );
}