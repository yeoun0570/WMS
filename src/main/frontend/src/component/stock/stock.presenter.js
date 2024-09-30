// import * as S from "./stock.styles";
// import * as H from "../../styles/pageStyles";
// import { SearchOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import { Divider, Table, Select, Calendar } from 'antd';



// // 검색창 콜백 함수
// const onChange = (value) => {
//   console.log(`selected ${value}`);// 사용자가 선택한 값 콘솔에 출력
// };
// const onSearch = (value) => {
//   console.log('search:', value);// 사용자가 검색한 내용 콘솔에 출력
// };

// // 테이블 컬럼 작성 (테이블의 각 열에 대한 정의)
// const columns = [
//   {
//     title: '상품Id',//테이블 열 제목
//     dataIndex: 'productId',//데이터에서 가져올 항목 이름
//   },
//   {
//     title: '상품명',
//     dataIndex: 'productName',
//   },
//   {
//     title: '창고ID',
//     dataIndex: 'storageId',
//   },
//   {
//     title: '창고이름',
//     dataIndex: 'storageName',
//   },
//   {
//     title: '재고',
//     dataIndex: 'stockQuantity',
//   },
// ];

// // 테이블 데이터 (테이블에 표시될 데이터 행)
// const data = [
//   {
//     key: '1',
//     productId: '960304',
//     productName: '이효승',
//     storageId: '960115',
//     storageName: '서울창고',
//     stockQuantity: '5',
//   },
// ];

// // 테이블 row 선택 기능
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     //사용자가 선택한 행의 키 및 해당 행의 데이터를 콘솔에 출력
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
// };

// // 반환되는 App 컴포넌트
// const App = () => {
//   //체크박스를 선택하는 타입을 관리하는 usestate 선언
//   const [selectionType, setSelectionType] = useState('checkbox');
//   return (
//     <>
//       {/* H.HSelectWrapper로 Select와 타이틀들을 감싸는 부분 */}
//       <H.HSelectWrapper>
//       <S.Title>품목</S.Title> 
//         <H.HSelect
//           showSearch
//           placeholder="품목을 선택해주세요"
//           optionFilterProp="label"
//           onChange={onChange}
//           onSearch={onSearch}
//           options={[
//             { value: 'jack', label: 'Jack' },
//             { value: 'lucy', label: 'Lucy' },
//             { value: 'tom', label: 'Tom' },
//           ]}
//         />
        
//         <S.Title>창고별</S.Title>
//         <H.HSelect
//           showSearch
//           placeholder="창고를 선택해주세요"
//           optionFilterProp="label"
//           onChange={onChange}
//           onSearch={onSearch}
//           options={[
//             { value: 'jack', label: 'Jack' },
//             { value: 'lucy', label: 'Lucy' },
//             { value: 'tom', label: 'Tom' },
//           ]}
//         />
//       </H.HSelectWrapper>
//             <H.HButtonWrapper>
//           <H.HButtonDefault type="primary" 
//           icon={<SearchOutlined />} >
//             재고수정
//           </H.HButtonDefault>
//           </H.HButtonWrapper>


        

//       {/* Divider는 H.HSelectWrapper 밖에 둡니다 */}
//       <Divider />

//       {/* 테이블 */}
//       <div>
//         <H.Htable
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns}
//           dataSource={data}
//         />
//       </div>
//     </>
//   );
// }

// // App 컴포넌트를 기본 내보내기로 설정
// export default App;


// import * as S from "./stock.styles";
// import * as H from "../../styles/pageStyles";
// import { SearchOutlined } from '@ant-design/icons';
// import React, { useState, useEffect } from 'react';
// import { Divider, Table } from 'antd';

// // 검색창 콜백 함수
// const onChange = (value) => {
//   console.log(`selected ${value}`); // 사용자가 선택한 값 콘솔에 출력
// };
// const onSearch = (value) => {
//   console.log('search:', value); // 사용자가 검색한 내용 콘솔에 출력
// };

// // 테이블 컬럼 작성 (테이블의 각 열에 대한 정의)
// const columns = [
//   {
//     title: '상품Id', // 테이블 열 제목
//     dataIndex: 'productId', // 데이터에서 가져올 항목 이름
//   },
//   {
//     title: '상품명',
//     dataIndex: 'productName',
//   },
//   {
//     title: '창고ID',
//     dataIndex: 'storageId',
//   },
//   {
//     title: '창고이름',
//     dataIndex: 'storageName',
//   },
//   {
//     title: '재고',
//     dataIndex: 'stockQuantity',
//   },
// ];

// // 테이블 row 선택 기능
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     // 사용자가 선택한 행의 키 및 해당 행의 데이터를 콘솔에 출력
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
// };

// const App = ({
//   data, // container에서 받은 데이터
//   productName,
//   setProductName,
//   storageName,
//   setStorageName,
//   quantity,
//   setQuantity,
//   fetchData,
// }) => {
//   const [selectionType, setSelectionType] = useState('checkbox'); // 체크박스 타입 관리

//   // `data`가 넘어오면 테이블에 넣기 위한 데이터 설정
//   const tableData = data?.dtoList?.map((item, index) => ({
//     key: index + 1, // 고유한 key 값 지정
//     productId: item.productId,
//     productName: item.productName,
//     storageId: item.storageId,
//     storageName: item.storageName,
//     stockQuantity: item.stockQuantity,
//   }));

//   const handleSearch = () => {
//     fetchData(); // 버튼 클릭으로 데이터 검색
//   };


//  // 검색 키워드를 모두 초기화하는 함수
//  const handleReset = () => {
//   setProductName(""); // 품목 초기화
//   setStorageName(""); // 창고 초기화
// };

// // productName과 storageName이 변경될 때마다 fetchData 호출
// useEffect(() => {
//   if (productName === "" && storageName === "") {
//     fetchData();
//   }
// }, [productName, storageName]);

//   return (
//     <>
    
//       {/* Select와 타이틀을 감싸는 부분 */}
//       <H.HSelectWrapper>
//   <S.Title>품목</S.Title>
//   <H.HSelect
//     showSearch
//     placeholder="품목을 선택해주세요"
//     optionFilterProp="label"
//     onChange={(value) => setProductName(value)} // 품목 선택 설정
//     onSearch={onSearch}
//     value={productName}
//     options={data?.productList?.map((p, index) => ({
//       key: index + 1, // 각 옵션에 고유한 키 부여
//       label: p.content, // 옵션에 표시될 텍스트
//       value: p.content, // 선택 시 선택될 값
//     }))}
  


//         />

//         <S.Title>창고별</S.Title>
//         <H.HSelect
//           showSearch
//           placeholder="창고를 선택해주세요"
//           optionFilterProp="label"
//           onChange={(value) => setStorageName(value)} // 창고 검색 설정
//           onSearch={onSearch}
//           value={storageName}
//           options={data?.storageDTOList?.map((s, index) => ({
//             key: index + 1, // 각 옵션에 고유한 키 부여
//             label: s.storageName, // 옵션에 표시될 텍스트
//             value: s.storageName, // 선택 시 선택될 값
//           }))}
//         />
//       </H.HSelectWrapper>
// <div style={{ display: 'flex', gap: '10px' }}>
//       <H.HButtonWrapper>
//         <H.HButtonDefault
//           type="primary"
//           icon={<SearchOutlined />}
//           onClick={handleSearch} >
//           검색
//         </H.HButtonDefault>
//       </H.HButtonWrapper>


//       <H.HButtonDefault
//           type="default"
//           icon={<SearchOutlined />}
//           onClick={handleReset} >
//           초기화
//         </H.HButtonDefault>
// </div>

//       {/* Divider는 H.HSelectWrapper 밖에 둡니다 */}
//       <Divider />

//       {/* 테이블 */}
//       <div>
//         <H.Htable
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns} // 테이블 컬럼
//           dataSource={tableData} // API에서 받아온 데이터를 테이블에 렌더링
//         />
//       </div>
//     </>
//   );
// };

// export default App;

// import * as S from "./stock.styles";
// import * as H from "../../styles/pageStyles";
// import { SearchOutlined } from '@ant-design/icons';
// import React, { useState, useEffect } from 'react';
// import { Divider, Table, Input, Button } from 'antd';

// // 테이블 컬럼 작성 (테이블의 각 열에 대한 정의)
// const columns = ({
//   editingKey, // 현재 수정 중인 행의 key
//   setEditingKey, // 수정 중인 행의 key 설정 함수
//   editedQuantity, // 수정된 수량 상태
//   setEditedQuantity, // 수정된 수량 설정 함수
//   handleSave, // 저장 함수
//   handleCancel, // 취소 함수
// }) => [
//   {
//     title: '상품Id',
//     dataIndex: 'productId',
//   },
//   {
//     title: '상품명',
//     dataIndex: 'productName',
//   },
//   {
//     title: '창고ID',
//     dataIndex: 'storageId',
//   },
//   {
//     title: '창고이름',
//     dataIndex: 'storageName',
//   },
//   {
//     title: '재고',
//     dataIndex: 'stockQuantity',
//     render: (text, record) => {
//       // 재고 수정 중인지 확인
//       return editingKey === record.key ? (
//         <Input
//           value={editedQuantity}
//           onChange={(e) => setEditedQuantity(e.target.value)} // 수정된 수량 설정
//           style={{ width: '100px' }}
//         />
//       ) : (
//         text
//       );
//     },
//   },
//   {
//     title: '수정',
//     dataIndex: 'edit',
//     render: (_, record) => {
//       const editable = editingKey === record.key;
//       return editable ? (
//         <>
//           <Button onClick={() => handleSave(record.key)} type="primary" style={{ marginRight: 8 }}>
//             확인
//           </Button>
//           <Button onClick={handleCancel}>취소</Button>
//         </>
//       ) : (
//         <Button onClick={() => setEditingKey(record.key)}>수정</Button>
//       );
//     },
//   },
// ];

// // 테이블 row 선택 기능
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
// };

// const App = ({
//   data,
//   productName,
//   setProductName,
//   storageName,
//   setStorageName,
//   fetchData,
// }) => {
//   const [selectionType, setSelectionType] = useState('checkbox');
//   const [editingKey, setEditingKey] = useState(''); // 수정 중인 행의 key
//   const [editedQuantity, setEditedQuantity] = useState(''); // 수정된 수량 상태

//   const handleSave = (key) => {
//     // 여기에서 수정된 수량을 처리하는 로직을 추가
//     console.log("수정된 수량:", editedQuantity);
//     setEditingKey(''); // 수정 모드를 닫음
//   };

//   const handleCancel = () => {
//     setEditingKey(''); // 수정 모드를 닫음
//   };

//   // `data`가 넘어오면 테이블에 넣기 위한 데이터 설정
//   const tableData = data?.dtoList?.map((item, index) => ({
//     key: index + 1,
//     productId: item.productId,
//     productName: item.productName,
//     storageId: item.storageId,
//     storageName: item.storageName,
//     stockQuantity: item.stockQuantity,
//   }));

//   const handleSearch = () => {
//     fetchData(); // 버튼 클릭으로 데이터 검색
//   };

//   const handleReset = () => {
//     setProductName("");
//     setStorageName("");
//   };

//   useEffect(() => {
//     if (productName === "" && storageName === "") {
//       fetchData();
//     }
//   }, [productName, storageName]);

//   return (
//     <>
//       <H.HSelectWrapper>
//         <S.Title>품목</S.Title>
//         <H.HSelect
//           showSearch
//           placeholder="품목을 선택해주세요"
//           onChange={(value) => setProductName(value)}
//           value={productName}
//           options={data?.productList?.map((p, index) => ({
//             key: index + 1,
//             label: p.content,
//             value: p.content,
//           }))}
//         />

//         <S.Title>창고별</S.Title>
//         <H.HSelect
//           showSearch
//           placeholder="창고를 선택해주세요"
//           onChange={(value) => setStorageName(value)}
//           value={storageName}
//           options={data?.storageDTOList?.map((s, index) => ({
//             key: index + 1,
//             label: s.storageName,
//             value: s.storageName,
//           }))}
//         />
//       </H.HSelectWrapper>

//       <div style={{ display: 'flex', gap: '10px' }}>
//         <H.HButtonWrapper>
//           <H.HButtonDefault type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
//             검색
//           </H.HButtonDefault>
//         </H.HButtonWrapper>

//         <H.HButtonWrapper>
//           <H.HButtonDefault type="default" icon={<SearchOutlined />} onClick={handleReset}>
//             초기화
//           </H.HButtonDefault>
//         </H.HButtonWrapper>
//       </div>

//       <Divider />

//       <div>
//         <H.Htable
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns({
//             editingKey,
//             setEditingKey,
//             editedQuantity,
//             setEditedQuantity,
//             handleSave,
//             handleCancel,
//           })}
//           dataSource={tableData}
//         />
//       </div>
//     </>
//   );
// };

// export default App;

import { useAPI } from "../../axios/useAPI";
import * as S from "./stock.styles";
import * as H from "../../styles/pageStyles";
import { SearchOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Divider, Table, Input, Button, message } from 'antd';

const columns = ({
  editingKey, 
  setEditingKey, 
  editedQuantity, 
  setEditedQuantity, 
  handleSave, 
  handleCancel 
}) => [
  {
    title: '상품Id',
    dataIndex: 'productId',
  },
  {
    title: '상품명',
    dataIndex: 'productName',
  },
  {
    title: '창고ID',
    dataIndex: 'storageId',
  },
  {
    title: '창고이름',
    dataIndex: 'storageName',
  },
  {
    title: '재고',
    dataIndex: 'stockQuantity',
    render: (text, record) => {
      return editingKey === record.key ? (
        <Input
          value={editedQuantity}
          onChange={(e) => setEditedQuantity(e.target.value)} 
          style={{ width: '100px' }}
        />
      ) : (
        text
      );
    },
  },
  {
    title: '수정',
    dataIndex: 'edit',
    render: (_, record) => {
      const editable = editingKey === record.key;
      return editable ? (
        <>
          <Button onClick={() => handleSave(record)} type="primary" style={{ marginRight: 8 }}>
            확인
          </Button>
          <Button onClick={handleCancel}>취소</Button>
        </>
      ) : (
        <Button onClick={() => setEditingKey(record.key)}>수정</Button>
      );
    },
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const App = ({
  data,
  productName,
  setProductName,
  storageName,
  setStorageName,
  fetchData,
  quantity,
  setQuantity,
}) => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [editingKey, setEditingKey] = useState(''); 
  const [editedQuantity, setEditedQuantity] = useState(''); 

  const { post } = useAPI();

  // const handleSave = async (record) => {
  //   try {
  //     const params = {
  //       productId: record.productId,
  //       storageId: record.storageId,
  //       quantity: editedQuantity,
  //     };

  //     const response = await post(`/stock/modify`, params);
      
  //     if (response.status === 200) {
  //       message.success('재고가 성공적으로 수정되었습니다.');
  //       fetchData(); 
  //       setEditingKey(''); 
  //     } else {
  //       message.error('재고 수정 중 오류가 발생했습니다.');
  //     }
  //   } catch (error) {
  //     message.error('재고 수정 중 오류가 발생했습니다.');
  //     console.error(error);
  //   }
  // };
  const handleSave = async (record) => {
    try {
      const params = {
        productId: record.productId,
        storageId: record.storageId,
        quantity: editedQuantity,  // editedQuantity는 상태로 관리
      };
  
      // POST 요청을 통해 수량 수정 API 호출
      const response = await post(`/stock/modify`, params);

      console.log("응답!!!!!!",response);
      
      console.log("응답.status!!!!!!",response.status);
      
      
      // 응답이 성공적인 경우
      if (response.status === 'success') {
        message.success('재고가 성공적으로 수정되었습니다.');
  
        // 재고 목록을 새로 고침하여 업데이트
        fetchData();  // 데이터를 다시 가져와서 상태를 업데이트
        
        // 수정 모드 종료
        setEditingKey('');
      } else {
        // 응답이 실패한 경우
        message.error('재고 수정 중 오류가 발생했습니다.');
      }
    } catch (error) {
      // 요청 중 오류가 발생한 경우
      message.error('재고 수정 중 오류가 발생했습니다.');
      console.error('에러 발생:', error);
    }
  };
  
  
  const handleCancel = () => {
    setEditingKey(''); 
  };

  const tableData = data?.dtoList?.map((item, index) => ({
    key: index + 1,
    productId: item.productId,
    productName: item.productName,
    storageId: item.storageId,
    storageName: item.storageName,
    stockQuantity: item.stockQuantity,
  }));

  const handleSearch = () => {
    fetchData(); 
  };

  const handleReset = () => {
    setProductName("");
    setStorageName("");
  };

  useEffect(() => {
    if (productName === "" && storageName === "") {
      fetchData();
    }
  }, [productName, storageName]);

  return (
    <>
      <H.HSelectWrapper>
        <S.Title>품목</S.Title>
        <H.HSelect
          showSearch
          placeholder="품목을 선택해주세요"
          onChange={(value) => setProductName(value)}
          value={productName}
          options={data?.productList?.map((p, index) => ({
            key: index + 1,
            label: p.content,
            value: p.content,
          }))}
        />
        <S.Title>창고별</S.Title>
        <H.HSelect
          showSearch
          placeholder="창고를 선택해주세요"
          onChange={(value) => setStorageName(value)}
          value={storageName}
          options={data?.storageDTOList?.map((s, index) => ({
            key: index + 1,
            label: s.storageName,
            value: s.storageName,
          }))}
        />
      </H.HSelectWrapper>

      <div style={{ display: 'flex', gap: '10px' }}>
        <H.HButtonWrapper>
          <H.HButtonDefault type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
            검색
          </H.HButtonDefault>
        </H.HButtonWrapper>

        <H.HButtonWrapper>
          <H.HButtonDefault type="default" icon={<SearchOutlined />} onClick={handleReset}>
            초기화
          </H.HButtonDefault>
        </H.HButtonWrapper>
      </div>

      <Divider />

      <div>
        <H.Htable
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns({
            editingKey,
            setEditingKey,
            editedQuantity,
            setEditedQuantity,
            handleSave,
            handleCancel,
          })}
          dataSource={tableData}
        />
      </div>
    </>
  );
};

export default App;
