import * as S from "./addwarehouse.styles";
import AddressInput from "./AddressInput";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useAPI } from "../../../../src/axios/useAPI";


export default function WarehouseUI() {
  const { post } = useAPI();

  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [manager, setManager] = useState('');
  const [storageId, setStorageId] = useState('');
  const [storageName, setStorageName] = useState('');
  const [storageArea, setStorageArea] = useState('');

  // 등록 버튼 클릭 시 호출되는 함수
  const handleSubmit = async () => {
    // 전송할 데이터
    const requestData = {
      storageId,
      storageName,
      address,
      addressDetail,
      zipcode,
      storageArea
    };
    console.log("!@#!@#@$!#@" , requestData);

    try {
      // 서버로 POST 요청
      const response = await post("/storage/register_storage", requestData);
      console.log("등록 성공:", response);
      // 추가적인 처리: 성공 메시지 또는 페이지 이동
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

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
          <input value={storageId} onChange={(e) => setStorageId(e.target.value)}></input>
        </S.Input>
        <S.Input>
          <div>창고 이름</div>
          <input value={storageName} onChange={(e) => setStorageName(e.target.value)}></input>
        </S.Input>
      </div>
      <S.Input>
        <div>우편 번호</div>
        <div style={{ display: "flex" }}>
          <input value={zipcode} readOnly style={{ width: "0px" }} />
          <AddressInput addressAction={{ setZipcode, setAddress }} />
        </div>
      </S.Input>
      <S.Input>
        <div>주소</div>
        <input value={address} readOnly />
      </S.Input>
      <S.Input>
        <div>상세주소</div>
        <input value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)}></input>
      </S.Input>
      <S.Input>
        <div>면적</div>
        <input value={storageArea} onChange={(e) => setStorageArea(e.target.value)}></input>
      </S.Input>
      <div style={{width:"100%", marginTop: "30px", display: "flex", justifyContent: "end"}}>
        <S.MyButton style={{marginRight: "3px"}} onClick={handleSubmit}>등록</S.MyButton>
        <S.MyButton style={{marginRight: "10px"}}>취소</S.MyButton>
      </div>
    </S.Wrapper>
  );
}
