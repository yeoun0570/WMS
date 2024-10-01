import React, { useEffect } from "react";
export default function ProfileInfo(props) {
  useEffect(() => {
    console.log("내정보 들어오니??");
    props.getUserInfo();
  }, []); // 빈 배열을 두 번째 인자로 전달하면, 컴포넌트가 마운트될 때 한 번만 실행

  return <></>;
}
