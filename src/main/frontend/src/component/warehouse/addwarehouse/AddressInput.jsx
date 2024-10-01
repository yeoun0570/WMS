import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import theme from "../../../styles/theme";

const AddressInput = (props) => {
  const { setZonecode, setAddress } = props.addressAction;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const themeObj = {
    bgColor: "#FFFFFF", // 바탕 배경색
    pageBgColor: "#FFFFFF", // 페이지 배경색
    postcodeTextColor: "#C05850", // 우편번호 글자색
    emphTextColor: "#222222", // 강조 글자색
  };

  const postCodeStyle = {
    width: "100%",
    height: "450px",
  };

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
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)} style={{backgroundColor: theme.colors.glbOrange, marginLeft: "10px" }}>
        <span style={{fontSize: "14px"}}>주소 찾기</span>
      </Button>
      <Modal
        title="주소 검색"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // 버튼 제거 (닫기 버튼만 있음)
        centered
        destroyOnClose
      >
        <DaumPostcode
          theme={themeObj}
          style={postCodeStyle}
          onComplete={completeHandler}
        />
      </Modal>
    </div>
  );
};

export default AddressInput;
