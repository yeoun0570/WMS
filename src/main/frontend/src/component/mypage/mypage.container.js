import MyPageUI from "./mypage.presenter";
import { useState,useEffect } from "react";
import { useAPI } from "../../axios/useAPI";
import { useForm } from "react-hook-form";
import React from "react";


export default function MyPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  /////////////////////////CONST/////////////////////////

  const { get, post } = useAPI();

  const [data, setData] = useState([]);


  
  /////////////////////////METHOD/////////////////////////
  

  const fetchData = async () => {
    try {
      const responseData = await get("/user/list", { '현재 로그인한 유저의 아이디' });
  
      const userList = Array.isArray(responseData.dto) ? responseData.dto : [responseData.dto];
      
      setData(userList);
  
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };


  /////////////////////////RETURN/////////////////////////

  return <MyPageUI
    data={data}
    items={items}
    columns={columns}
    onChange={handleTabChange}
  />;
}
