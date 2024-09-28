import { useContext } from "react";
import axios from "axios";
import { TokenContext } from "./TokenContext";

export const useAPI = () => {
  const baseURL = "http://localhost:8080/api";
  const { state, dispatch } = useContext(TokenContext);

  const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  //http요청시 accessToken 자동으로 추가
  api.interceptors.request.use(
    (config) => {
      if (state.accessToken) {
        config.headers.Authorization = `Bearer ${state.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //accessToken 기간만료시 (401) 다시 재발급 요청.
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const refreshToken = state.refreshToken;

        // RefreshToken으로 새 AccessToken 발급 요청
        const response = await axios.post(baseURL + "/auth/refresh", {
          refreshToken,
        });
        const newAccessToken = response.data.accessToken;

        // 새 AccessToken을 Context와 세션 스토리지에 저장
        dispatch({
          type: "SET_TOKENS",
          payload: {
            accessToken: newAccessToken,
            refreshToken: state.refreshToken,
          },
        });

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }

      return Promise.reject(error);
    }
  );
  // GET 요청
  const get = async (url, params) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // POST 요청
  const post = async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // PUT 요청
  const put = async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // DELETE 요청
  const remove = async (url) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { get, post, put, remove };
};
