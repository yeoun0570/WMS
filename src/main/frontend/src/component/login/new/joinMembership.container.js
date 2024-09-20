import JoinMembershipUI from "./joinMembership.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { errorModal, successModal } from "../../../lib/util";
import { useState } from "react";

export default function JoinMembership(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      employeeNumber: "",
      email: "",
      password: "",
      rePassword: "",
      isReceive: false,
    },
    mode: "onChange",
  });
  const onSubmitBoard = async (data) => {
    try {
      console.log(data);
      //rest든 graphql이든 우리 백앤드로 data로 날리는 구간(await)
      successModal("success", "회원가입승인요청이 완료되었습니다.");
      //모달에서 ok눌렀을때 push되도록 하자 나중에
      router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) errorModal("fail", error.message);
    }
  };
  const onError = (data) => {
    errorModal("fail", "다시한번 입력해주세요");
  };
  const SwitchModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const onClickCancel = () => {
    router.push(`/login`);
  };
  return (
    <JoinMembershipUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmitBoard={onSubmitBoard}
      errors={errors}
      onError={onError}
      onClickCancel={onClickCancel}
      isValid={isValid}
      isModalOpen={isModalOpen}
      SwitchModal={SwitchModal}
    />
  );
}
