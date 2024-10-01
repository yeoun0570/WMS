import MyPageUI from "./mypage.presenter";
import { useState,useEffect } from "react";
import { useAPI } from "../../axios/useAPI";
import { useForm } from "react-hook-form";
import React from "react";
import { useRouter } from "next/router";


export default function MyPage() {

  const [profile, setProfile] = useState({});
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

  //내 프로필 정보 받아오기
  const getUserInfo = async () => {
    try {
      const response = await get("user/info");
      console.log(response.data.userPosition);
      setProfile({
        id: response.data.userId,
        url: response.data.userProfile,
        name: response.data.userName,
        email: response.data.userEmail,
        role: response.data.userPosition,
      });
    } catch (error) {
      setProfile({
        id: "숫자일까 문자일까",
        url: "../../../public/img/gyulobal1.png",
        name: "김정우",
      });
    } finally {
    }
  };

  useEffect(() => {
    console.log("내정보 들어오니??");
    getUserInfo();
  }, []);

  /////////////////////////RETURN/////////////////////////

  return <MyPageUI
    profile={profile}
    // items={items}
    // columns={columns}
    // onChange={handleTabChange}
  />;
}
