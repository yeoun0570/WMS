import { useState } from "react";
import * as S from "./addwarehouse.styles";
import AddressInput from "./test";
import { Modal, Button } from "antd";


export default function WarehouseUI() {

  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
    setIsModalVisible(false); // 주소 선택 후 모달 닫기
  };

  const handleCancel = () => {
    setIsModalVisible(false); // 모달 취소 시 닫기
  };

  return (
    <S.Wrapper>
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
        <div>창고 주소</div>
        <input></input>
        <div>{zonecode}</div>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          주소 찾기
        </Button>
        <Modal
          title="주소 검색"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} // 버튼 제거 (닫기 버튼만 있음)
          centered
        >
          <AddressInput
            addressState={{ zonecode, address, detailedAddress }}
            addressAction={{ setZonecode, setAddress, setDetailedAddress }}
            onComplete={completeHandler}
          />
        </Modal>
        <div>{address}</div>
        <input
          value={detailedAddress}
          onChange={(e) => setDetailedAddress(e.target.value)}
          placeholder="상세 주소"
        />
      </S.Input>
      <S.Input>
        <div>상세주소</div>
        <input></input>
      </S.Input>
      <S.Input>
        <div>우편번호</div>
        <input></input>
      </S.Input>
      <S.Input>
        <div>면적</div>
        <input></input>
      </S.Input>
      <button type="submit">등록</button>
      <button type="submit">취소</button>
    </S.Wrapper>
  );
}
