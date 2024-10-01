import { Divider, Tabs ,Table, Flex } from 'antd';
import * as H from "../../styles/pageStyles";

export default function MyPageUI({
  data,
  items,
  columns,
  onChange,
}) {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>마이페이지</h2>
      <form>
        <div>
          <label>이름</label>
          <input
            {...register("name", { required: true })}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div>
          <label>사원번호</label>
          <input
            {...register("userId", { required: true })}
            placeholder="사원번호를 입력하세요"
          />
        </div>

        <div>
          <label>연락처</label>
          <input
            {...register("contact", { required: true })}
            placeholder="연락처를 입력하세요"
          />
        </div>

        <div>
          <label>이메일</label>
          <input
            {...register("email", { required: true })}
            placeholder="이메일을 입력하세요"
            type="email"
          />
        </div>

        <div>
          <label>근무처</label>
          <input
            {...register("workplace", { required: true })}
            placeholder="근무처를 입력하세요"
          />
        </div>

        <div>
          <label>직함</label>
          <input
            {...register("position", { required: true })}
            placeholder="직함을 입력하세요"
          />
        </div>

        
        {/* 수정하기 누르면  */}
        <button type="submit">수정하기</button> 

      </form>
    </div>
  );
}