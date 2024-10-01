import NewUserRequestUI from "./newuserrequest.presenter";
import { useState,useEffect } from "react";
import { useAPI } from "../../../axios/useAPI";
import { errorModal } from "../../../lib/util";

/////////////////////////FUNCTION/////////////////////////
// 
// 
// 
/////////////////////////FUNCTION ENDS/////////////////////////

export default function Newuserrequest() {

  /////////////////////////CONST/////////////////////////

  const { put, post } = useAPI();

  const [data, setData] = useState([]);

  const items = [{ key: '0', label: '신규 요청 목록' }];
  
  const columns = [
    {
      title: '번호',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1, // 행 번호를 1부터 시작
    },
    {
      title: '이름',
      dataIndex: 'userName', // render: (text) => <a>{text}</a>,
    },
    {
      title: '사원번호',
      dataIndex: 'userId',
    },
    {
      title: '이메일',
      dataIndex: 'userEmail',
    },
    {
      title: '근무처',
      dataIndex: 'storageId',
    },
    {
      title: '직함',
      dataIndex: 'userPosition',
    },
  ];

  const [selectionType, setSelectionType] = useState('checkbox');

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  

  /////////////////////////METHOD/////////////////////////

  useEffect(() => {fetchData();}, []);


  const fetchData = async () => {

    try {

      const responseData = await post("/user/list", { userStatus: items[0].key});

      const userList = Array.isArray(responseData.dto) ? responseData.dto : [responseData.dto];

      setData(userList);

    } catch (error) {

      if (error instanceof Error) errorModal("fail", error.message);

    }
  };




  
  const handleApprove = async () => {
    
    const userIds = selectedRowKeys; // 선택된 사원번호를 List<String> 형태로 담기


    console.log("흠??")
    console.log(userIds);

    try {
      
      const response = await put("/user/update/status", { userIds, userStatus: '1' }); // 승인 요청을 위한 API 호출
      
      console.log(response);
      
      fetchData();

    } catch (error) {
      if (error instanceof Error) errorModal("fail", error.message);
    }
  };



  const handleDeny = async () => {

    const userIds = selectedRowKeys; // 선택된 사원번호를 List<String> 형태로 담기
  
    try {
      const response = await post("/user/delete", { userIds }); //선택된 사원번호 데이터베이스에서 삭제

      console.log(response);
      
      fetchData();
  
    } catch (error) {
      if (error instanceof Error) errorModal("fail", error.message);
    }
  };


  const rowSelection = {

    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys); // 선택된 사원번호 업데이트
    },

    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };


  /////////////////////////RETURN/////////////////////////
  return (
      <NewUserRequestUI
        data={data}
        items={items}
        columns={columns}
        selectionType={selectionType}
        rowSelection={rowSelection}
        onApprove={handleApprove}
        onDeny={handleDeny}
      />
  );

}
