import MyPageEditUI from "./mypageEdit.presenter";
import { useState,useEffect } from "react";
import { useAPI } from "../../../axios/useAPI";


export default function MyPageEdit() {

  /////////////////////////CONST/////////////////////////

  const { get, post } = useAPI();

  const [data, setData] = useState([]);

  const [userStatus, setUserStatus] = useState("1");


  
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

  return <MyPageEditUI 
    data={data}
    items={items}
    columns={columns}
    onChange={handleTabChange}
  />;
}
