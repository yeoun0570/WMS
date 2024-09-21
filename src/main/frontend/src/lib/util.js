import { Modal } from "antd";
export const getDate = (date) => {
  const _data = new Date(date);
  const yyyy = _data.getFullYear();
  const mm = _data.getMonth() + 1;
  const dd = _data.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const errorModal = (title, content) => {
  Modal.error({
    title: title,
    content: content,
  });
};
export const successModal = (title, content) => {
  Modal.success({
    title: title,
    content: content,
  });
};
