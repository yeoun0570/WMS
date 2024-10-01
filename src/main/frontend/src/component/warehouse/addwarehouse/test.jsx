import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";

const AddressInput = (props) => {
  const { zonecode, address, detailedAddress } = props.addressState || {};
  const {
    setZonecode = () => {},
    setAddress = () => {},
    setDetailedAddress = () => {},
  } = props.addressAction || {};

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

  return (
    <DaumPostcode
      theme={themeObj}
      style={postCodeStyle}
      onComplete={props.onComplete}
    />
  );
};

export default AddressInput;
