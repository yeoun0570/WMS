import { Divider, Tabs ,Table, Flex } from 'antd';
import * as H from "../../styles/pageStyles";

export default function MyPageEditUI({
  data,
  items,
  columns,
  onChange,
}) {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>내 정보 수정</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이름</label>
          <input
            {...register("name", { required: true })}
            placeholder="이름을 입력하세요"
          />
          {errors.name && <p>이름은 필수 항목입니다.</p>}
        </div>

        <div>
          <label>사원번호</label>
          <input
            {...register("userId", { required: true })}
            placeholder="사원번호를 입력하세요"
          />
          {/* {errors.id && <p>이름은 필수 항목입니다.</p>} */}
        </div>

        <div>
          <label></label>
          <input
            {...register("businessNumber", { required: true })}
            placeholder="사업번호를 입력하세요"
          />
          {errors.businessNumber && <p>사업번호는 필수 항목입니다.</p>}
        </div>

        <div>
          <label>연락처</label>
          <input
            {...register("contact", { required: true })}
            placeholder="연락처를 입력하세요"
          />
          {errors.contact && <p>연락처는 필수 항목입니다.</p>}
        </div>

        <div>
          <label>이메일</label>
          <input
            {...register("email", { required: true })}
            placeholder="이메일을 입력하세요"
            type="email"
          />
          {errors.email && <p>이메일은 필수 항목입니다.</p>}
        </div>

        <div>
          <label>근무처</label>
          <input
            {...register("workplace", { required: true })}
            placeholder="근무처를 입력하세요"
          />
          {errors.workplace && <p>근무처는 필수 항목입니다.</p>}
        </div>

        <div>
          <label>직함</label>
          <input
            {...register("position", { required: true })}
            placeholder="직함을 입력하세요"
          />
          {errors.position && <p>직함은 필수 항목입니다.</p>}
        </div>
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}