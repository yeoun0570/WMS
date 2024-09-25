import * as s from "./member.styles";


export default function MemberUI(props) {
  return (
    <s.Wrapper>
      <s.Title>사원 관리</s.Title>
      
      <s.Wrapper>
        <s.ButtonWrapper>
        <button onClick={props.showEmployeeList}>사원 목록</button>
        <button onClick={props.showNonEmployeeList}>비사원 목록</button>
        </s.ButtonWrapper>
      </s.Wrapper>

      <s.Wrapper>
        <s.Table>
          <thead>
            <s.Tr>
              <s.Th>목록 번호</s.Th>
              <s.Th>이름</s.Th>
              <s.Th>사원번호</s.Th>
              <s.Th>이메일</s.Th>
              <s.Th>근무처</s.Th>
              <s.Th>직함</s.Th>
              <s.Th>연락처</s.Th>
            </s.Tr>
          </thead>
          <tbody>
            {props.data&&props.data.map((item) => (
              <s.Tr key={item.id}>
                <s.Td>{item.id}</s.Td>
                <s.Td>{item.name}</s.Td>
                <s.Td>{item.employeeNumber}</s.Td>
                <s.Td>{item.email}</s.Td>
                <s.Td>{item.workplace}</s.Td>
                <s.Td>{item.title}</s.Td>
                <s.Td>{item.contact}</s.Td>
              </s.Tr>
            ))}
          </tbody>
        </s.Table>
      </s.Wrapper>
    </s.Wrapper>
  );
}
