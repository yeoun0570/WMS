import LoginUI from "./login.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { errorModal } from "../../lib/util";
import { useState, useContext } from "react";
import { useAPI } from "../../axios/useAPI";
import { TokenContext } from "../../axios/TokenContext";
export default function Login() {
  const { post } = useAPI();
  const { dispatch } = useContext(TokenContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      employeeNumber: "",
      password: "",
    },
    mode: "onChange",
  });

  const login = async () => {
    try {
      const loginData = {
        userId: employeeNumber,
        password,
      };
      const response = await post("/auth/login", loginData);

      // 받은 토큰을 전역 상태와 세션 스토리지에 저장
      dispatch({
        type: "SET_TOKENS",
        payload: {
          accessToken: response.ACCESS_HEADER_STRING,
          refreshToken: response.REFRESH_HEADER_STRING,
        },
      });

      console.log(response);
      router.push(`/wms`);
    } catch (error) {
      console.error(
        "login error : ",
        error.response ? error.response.data.error : error.message
      );
      errorModal(
        "fail",
        error.response ? error.response.data.error : error.message
      );
    }
  };

  const onSubmitBoard = async (data) => {
    try {
      console.log(data);
      login();
      //rest든 graphql이든 우리 백앤드로 data로 날리는 구간(await)
    } catch (error) {
      if (error instanceof Error) errorModal("fail", error.message);
    }
  };
  const onError = (data) => {
    errorModal("fail", "빈칸없이 입력해주세요");
  };
  const SwitchModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const onClickJoin = () => {
    router.push(`/login/new`);
  };
  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmitBoard={onSubmitBoard}
      errors={errors}
      onError={onError}
      onClickJoin={onClickJoin}
      isValid={isValid}
      isModalOpen={isModalOpen}
      SwitchModal={SwitchModal}
    />
  );
}
