import * as S from "./requestwaybill.styles";
import * as H from "../../styles/pageStyles";
import AddressInput from "./AddressInput";
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const columns = ({ showModal }) => [
  {
    title: '운송장번호',
    dataIndex: 'waybillId',
  },
  {
    title: '발신지',
    dataIndex: 'departStorageName',
  },
  {
    title: '주소',
    dataIndex: 'departAddress',
  },
  {
    title: '상세주소',
    dataIndex: 'departAddressDetail',
  },
  {
    title: '우편번호',
    dataIndex: 'departZipcode',
  },
  {
    title: '수신지',
    dataIndex: 'arriveStorageName',
  },
  {
    title: '주소',
    dataIndex: 'arriveAddress',
  },
  {
    title: '상세주소',
    dataIndex: 'arriveAddressDetail',
  },
  {
    title: '우편번호',
    dataIndex: 'arriveZipcode',
  },
  {
    title: '상세보기',
    render: (_, record) => (
      <Button onClick={() => showModal(record)}>상세보기</Button>
    ),
  },
];

export default function WaybillUI({ data, fetchData, modifyWaybill }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modifiedData, setModifiedData] = useState({}); // 수정된 데이터를 저장할 상태

  const [arriveZonecode, setArriveZonecode] = useState('');
  const [arriveAddress, setArriveAddress] = useState('');
  const [arriveDetailedAddress, setArriveDetailedAddress] = useState('');

  const [departZonecode, setDepartZonecode] = useState('');
  const [departAddress, setDepartAddress] = useState('');
  const [departDetailedAddress, setDepartDetailedAddress] = useState('');

  useEffect(() => {
    setModifiedData((prev) => ({
      ...prev,
      departZipcode: departZonecode,
      departAddress: departAddress,
      departAddressDetail: departDetailedAddress,
    }));
  }, [departZonecode, departAddress, departDetailedAddress]);

  useEffect(() => {
    setModifiedData((prev) => ({
      ...prev,
      arriveZipcode: arriveZonecode,
      arriveAddress: arriveAddress,
      arriveAddressDetail: arriveDetailedAddress,
    }));
  }, [arriveZonecode, arriveAddress, arriveDetailedAddress]);

  const showModal = (record) => {
    setSelectedRecord(record);
    setModifiedData({
      waybillId: record.waybillId,
      departAddress: record.departAddress,
      departAddressDetail: record.departAddressDetail,
      departZipcode: record.departZipcode,
      arriveAddress: record.arriveAddress,
      arriveAddressDetail: record.arriveAddressDetail,
      arriveZipcode: record.arriveZipcode,
    });
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const success = await modifyWaybill(modifiedData); // 수정된 데이터로 수정 요청
    console.log("!!!!!!!!", modifiedData);

    if (success) {
      fetchData(); // 데이터를 갱신하여 테이블 업데이트
    }

    setIsModalVisible(false); // 모달 닫기
  };

  const tableData = data?.dtoList?.map((item, index) => ({
    key: index + 1,
    waybillId: item.waybillId,
    departStorageName: item.departStorageName,
    departAddress: item.departAddress,
    departAddressDetail: item.departAddressDetail,
    departZipcode: item.departZipcode,
    arriveStorageName: item.arriveStorageName,
    arriveAddress: item.arriveAddress,
    arriveAddressDetail: item.arriveAddressDetail,
    arriveZipcode: item.arriveZipcode,
    inboundItemList: item.inboundItemList || [], // 추가된 부분
    outboundItemList: item.outboundItemList || [], // 추가된 부분
  }));

  return (
    <div>
      <H.Htable
        columns={columns({ showModal })}
        dataSource={tableData}
      />

      <Modal
        title="상세정보"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
        centered
      >
        {selectedRecord && (
          <S.Wrapper style={{ borderTop: "solid 1px #f0f0f0" }}>
            <S.Input>
              <div>운송장번호</div>
              <input
                name="waybillId"
                defaultValue={selectedRecord.waybillId}
                readOnly />
            </S.Input>

            <S.Input>
              <div>발신지 주소</div>
              <div style={{ display: "flex" }}>
                <input
                  readOnly
                  value={departZonecode || modifiedData.departZipcode}
                  name="departZipcode"
                  onChange={handleInputChange}
                  style={{ width: "0px" }} />
                <AddressInput setZonecode={setDepartZonecode} setAddress={setDepartAddress} />
              </div>
            </S.Input>
            <S.Input>
              <input
                type="text"
                name="departAddress"
                onChange={handleInputChange}
                value={departAddress || modifiedData.departAddress}
              />
            </S.Input>
            <S.Input>
              <div>상세주소</div>
              <input
                type="text"
                name="departAddressDetail"
                value={departDetailedAddress || modifiedData.departAddressDetail}
                onChange={handleInputChange} />
            </S.Input>

            <S.Input>
              <div>수신지 주소</div>
              <div style={{ display: "flex" }}>
                <input
                  readOnly
                  value={arriveZonecode || modifiedData.arriveZipcode}
                  name="arriveZipcode"
                  onChange={handleInputChange}
                  style={{ width: "0px" }} />
                <AddressInput setZonecode={setArriveZonecode} setAddress={setArriveAddress} />
              </div>
            </S.Input>
            <S.Input>
              <input
                type="text"
                name="arriveAddress"
                onChange={handleInputChange}
                value={arriveAddress || modifiedData.arriveAddress}
              />
            </S.Input>
            <S.Input>
              <div>상세주소</div>
              <input
                type="text"
                name="arriveAddressDetail"
                value={arriveDetailedAddress || modifiedData.arriveAddressDetail}
                onChange={handleInputChange} />
            </S.Input>

            <div style={{ borderBottom: "solid 1px #f0f0f0" }} />

            {/* 입고 품목 목록 */}
            {selectedRecord.inboundItemList && selectedRecord.inboundItemList.length > 0 && (
              <S.Input>
                <div style={{ fontSize: "15px" }}>입고 품목</div>
                <div style={{display: "flex"}}>
                  <div>상품 ID</div>
                  <div>수량</div>
                </div>
                {selectedRecord.inboundItemList.map((item, idx) => (
                  <div key={idx} style={{display: "flex", gap: "6px", marginBottom: "3px"}}>
                    <input defaultValue={item.productId} readOnly/>
                    <input defaultValue={item.quantity} readOnly/>
                  </div>
                ))}
              </S.Input>
            )}

            {/* 출고 품목 목록 */}
            {selectedRecord.outboundItemList && selectedRecord.outboundItemList.length > 0 && (
              <S.Input>
              <div style={{ fontSize: "15px" }}>출고 품목</div>
              <div style={{display: "flex"}}>
                <div>상품 ID</div>
                <div>수량</div>
              </div>
              {selectedRecord.outboundItemList.map((item, idx) => (
                <div key={idx} style={{display: "flex", gap: "6px", marginBottom: "3px"}}>
                  <input defaultValue={item.productId} readOnly/>
                  <input defaultValue={item.quantity} readOnly/>
                </div>
              ))}
            </S.Input>
            )}

            <div style={{ marginTop: '16px', display: "flex", justifyContent: "end" }}>
              <S.MyButton onClick={handleSubmit}>수정</S.MyButton>
              <S.MyButton onClick={handleModalCancel} style={{ marginLeft: '8px' }}>취소</S.MyButton>
            </div>
          </S.Wrapper>
        )}
      </Modal>
    </div>
  );
}
