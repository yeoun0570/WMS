import React from "react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";
import * as P from "./ProfileStyle";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default function ProfileItem(props) {
  const onClickMyPage = () => {
    props.setProfileOpen(false);
    props.setPage(props.pageMap["/wms/mypage"][0]);
    props.setDetail(props.pageMap["/wms/mypage"][1]);
    props.router.push("/wms/mypage");
  };
  return (
    <P.ProfileCard>
      <P.ProfileHeader>{props.profile.id}</P.ProfileHeader>
      <P.ProfileImg>
        <P.ProfileText>{props.profile.url}</P.ProfileText>
      </P.ProfileImg>
      <P.ProfileBody>
        <P.UserName>{props.profile.name}</P.UserName>
        <P.UserEmail>{props.profile.email}</P.UserEmail>
        <P.ProfileIcons>
          <P.Icon>
            <HomeOutlined />
          </P.Icon>
          <P.Icon>
            <UserOutlined onClick={onClickMyPage} />
          </P.Icon>
        </P.ProfileIcons>
      </P.ProfileBody>
    </P.ProfileCard>
  );
}
