import * as S from "./requestwaybill.styles";
import * as H from "../../styles/pageStyles";
import { useState } from 'react';
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
        title="상세정보 수정"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {selectedRecord && (
          <div>
            <p>운송장번호: {selectedRecord.waybillId}</p>

            <div>
              <label>발신지 주소:</label>
              <input
                type="text"
                name="departAddress"
                value={modifiedData.departAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>상세주소:</label>
              <input
                type="text"
                name="departAddressDetail"
                value={modifiedData.departAddressDetail}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>우편번호:</label>
              <input
                type="text"
                name="departZipcode"
                value={modifiedData.departZipcode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>수신지 주소:</label>
              <input
                type="text"
                name="arriveAddress"
                value={modifiedData.arriveAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>상세주소:</label>
              <input
                type="text"
                name="arriveAddressDetail"
                value={modifiedData.arriveAddressDetail}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>우편번호:</label>
              <input
                type="text"
                name="arriveZipcode"
                value={modifiedData.arriveZipcode}
                onChange={handleInputChange}
              />
            </div>

            {/* 입고 품목 목록 */}
            {selectedRecord.inboundItemList && selectedRecord.inboundItemList.length > 0 && (
              <div>
                <h4>입고 품목</h4>
                {selectedRecord.inboundItemList.map((item, idx) => (
                  <div key={idx}>
                    <p>상품 ID: {item.productId}</p>
                    <p>수량: {item.quantity}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 출고 품목 목록 */}
            {selectedRecord.outboundItemList && selectedRecord.outboundItemList.length > 0 && (
              <div>
                <h4>출고 품목</h4>
                {selectedRecord.outboundItemList.map((item, idx) => (
                  <div key={idx}>
                    <p>상품 ID: {item.productId}</p>
                    <p>수량: {item.quantity}</p>
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginTop: '16px' }}>
              <Button onClick={handleSubmit}>수정</Button>
              <Button onClick={handleModalCancel} style={{ marginLeft: '8px' }}>취소</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
