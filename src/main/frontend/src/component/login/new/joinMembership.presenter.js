import * as S from "./joinMembership.styles";

export default function JoinMembershipUI(props) {
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>                    
      <S.NameWrapper>
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <S.Name
            type="text"
            {...props.register("firstName", { required: true })}
            placeholder="이름을 적어주세요."
          />
          {props.errors.firstName && <S.Error>이름을 입력해주세요.</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>사원번호</S.Label>
          <S.Name
            type="text"
            {...props.register("secondName", { required: true })}
            placeholder="사원번호를 적어주세요."
          />
          {props.errors.secondName && <S.Error>사원번호를 입력해주세요.</S.Error>}
        </S.InputWrapper>
      </S.NameWrapper>
      <S.InputWrapper>
        <S.Label>생년월일</S.Label>
        <S.Input
          type="text"
          {...props.register("employeeNumber", { required: true })}
          placeholder="생년월일를 작성해주세요."
        />
        {props.errors.employeeNumber && (
          <S.Error>사원번호를 입력해주세요.</S.Error>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>연락처</S.Label>
        <S.Input
          type="text"
          {...props.register("email", { required: true })}
          placeholder="연락처를 작성해주세요."
        />
        {props.errors.email && <S.Error>연락처를 입력해주세요.</S.Error>}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>비밀번호 설정</S.Label>
        <S.Input
          type="password"
          {...props.register("password", { required: true })}
          placeholder="비밀번호을 작성해주세요."
        />
        {props.errors.password && <S.Error>비밀번호를 입력해주세요.</S.Error>}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>비밀번호 재확인</S.Label>
        <S.Input
          type="password"
          {...props.register("rePassword", { required: true })}
          placeholder="비밀번호을 한번 더 작성해주세요."
        />
        {props.errors.rePassword && <S.Error>비밀번호를 입력해주세요.</S.Error>}
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.CancelButton onClick={props.onClickCancel}>취소하기</S.CancelButton>
        <S.SubmitButton
          isActive={props.isValid}
          type="submit"
          onClick={props.handleSubmit(props.onSubmitBoard, props.onError)}
        >
          등록하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
