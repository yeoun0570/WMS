import { Divider, Tabs ,Table, Flex } from 'antd';
import * as H from "../../styles/pageStyles";
import * as S from "./mypage.styles";

export default function MyPageUI({
  profile,
  items,
  columns,
  onChange,
}) {
  console.log(profile);
  return (
    <S.Wrapper>
      <h1 style={{fontSize: "24px", marginBottom: "10px"}}>마이페이지</h1>
      <div style={{width: "100%", height: "1px", border: "solid 1px #f0f0f0", marginBottom: "40px"}}/>
      <S.Input>
        <div>이름</div>
        <input defaultValue={profile.name} placeholder="이름을 입력하세요."></input>
      </S.Input>
      <S.Input>
        <div>사원 번호</div>
        <input defaultValue={profile.id} readOnly></input>
      </S.Input>
      <S.Input>
        <div>연락처</div>
        <input placeholder="연락처를 입력하세요."></input>
      </S.Input>
      <S.Input>
        <div>이메일</div>
        <input defaultValue={profile.email}></input>
      </S.Input>
      <S.Input>
        <div>근무처</div>
        <input placeholder="근무처를 입력하세요."></input>
      </S.Input>
      <S.Input>
        <div>직함</div>
        <input defaultValue={profile.role} placeholder="직함을 입력하세요."></input>
      </S.Input>
      
      <div style={{width:"100%", marginTop: "30px", display: "flex", justifyContent: "end"}}>
        <S.MyButton style={{marginRight: "10px"}}>수정</S.MyButton>
      </div>
    </S.Wrapper>
  );
}