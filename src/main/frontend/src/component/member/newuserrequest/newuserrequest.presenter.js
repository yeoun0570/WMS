import React, { useState } from 'react';
import { Divider, Tabs, Table, Button } from 'antd';


const onChange = (key) => {
  console.log(key);
}

const items = [
{
  key: '1',
  label: '신규 요청 목록'
}
]

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    // render: (text) => <a>{text}</a>,
},
  {
    title: '사원번호',
    dataIndex: 'userId',
  },
  {
    title: '이메일',
    dataIndex: 'email',
  },
  {
    title: '근무처',
    dataIndex: 'address',
  },
  {
    title: '직함',
    dataIndex: 'role',
  },

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
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
const App = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange}/>
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default App;