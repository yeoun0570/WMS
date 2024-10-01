import MemberUI from "./member.presenter";
import { useState,useEffect } from "react";
import { useAPI } from "../../../src/axios/useAPI";


export default function Member() {

  /////////////////////////CONST/////////////////////////

  const { get, post } = useAPI();

  const [data, setData] = useState([]);

  const [userStatus, setUserStatus] = useState("1");

  const items = [{ key: '1', label: '사원목록' }, { key: '2', label: '비사원목록' }];
  
  const columns = [
    {
      title: '번호',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1, // 행 번호를 1부터 시작
    },
    {
      title: '이름',
      dataIndex: 'userName',
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


  
  /////////////////////////METHOD/////////////////////////
  
  useEffect(() => {fetchData();}, [userStatus]);

  const fetchData = async () => {
    try {
      const responseData = await post("/user/list", { userStatus });
  
      const userList = Array.isArray(responseData.dto) ? responseData.dto : [responseData.dto];
      
      setData(userList);
  
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  
  const handleTabChange = (key) => {setUserStatus(key);};


  /////////////////////////RETURN/////////////////////////

  return <MemberUI 
    data={data}
    items={items}
    columns={columns}
    onChange={handleTabChange}
  />;
}
