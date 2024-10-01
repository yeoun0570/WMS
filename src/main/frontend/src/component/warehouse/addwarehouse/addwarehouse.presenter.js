import * as S from "./addwarehouse.styles";
import AddressInput from "./AddressInput";
import { Button, Modal } from "antd";
import { useState } from "react";


export default function WarehouseUI() {

  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');

  return (
    <S.Wrapper>
      <h1 style={{fontSize: "24px", marginBottom: "10px"}}>창고 등록</h1>
      <div style={{width: "100%", height: "1px", border: "solid 1px #f0f0f0", marginBottom: "40px"}}/>
      <S.Input>
        <div>담당자</div>
        <input></input>
      </S.Input>
      <div style={{ display: "flex" }}>
        <S.Input>
          <div>창고 ID</div>
          <input></input>
        </S.Input>
        <S.Input>
          <div>창고 이름</div>
          <input></input>
        </S.Input>
      </div>
      <S.Input>
        <div>우편 번호</div>
        <div style={{ display: "flex" }}>
          <input value={zonecode} readOnly style={{ width: "0px" }} />
          <AddressInput addressAction={{ setZonecode, setAddress }} />
        </div>
      </S.Input>
      <S.Input>
        <div>주소</div>
        <input value={address} readOnly />
      </S.Input>
      <S.Input>
        <div>상세주소</div>
        <input value={detailedAddress} />
      </S.Input>
      <S.Input>
        <div>면적</div>
        <input></input>
      </S.Input>
      <div style={{width:"100%", marginTop: "30px", display: "flex", justifyContent: "end"}}>
        <S.MyButton style={{marginRight: "3px"}}>등록</S.MyButton>
        <S.MyButton style={{marginRight: "10px"}}>취소</S.MyButton>
      </div>
    </S.Wrapper>
  );
}
