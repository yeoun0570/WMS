import React, { useEffect, useContext, createContext } from "react";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { TokenContext } from "../axios/TokenContext";
export default function Notifications(props) {
  const { state } = useContext(TokenContext);
  if (!props.noticeFlag) {
    useEffect(() => {
      const EventSource = EventSourcePolyfill || NativeEventSource;
      const eventSource = new EventSource(
        "http://localhost:8080/api/notification/connect",
        {
          headers: {
            Authorization: state.accessToken,
          },
        }
      );

      eventSource.onmessage = (event) => {
        console.log("받은 알림:", event.data);
        console.log("프롤븨랑", props);
        if (event.data !== "dummy") {
          props.handleNewNotification(event.data);
        }
      };

      eventSource.onerror = (error) => {
        console.error("SSE 연결 오류:", error);

        // SSE의 readyState가 CLOSED인 경우, 재연결 시도
        if (eventSource.readyState === EventSource.CLOSED) {
          console.log("SSE 연결이 끊어졌습니다. 자동 재연결 시도 중...");
          setTimeout(() => {
            // 일정 시간 후에 재연결
            const newEventSource = new EventSource(
              "http://localhost:8080/api/notification/connect",
              {
                headers: {
                  Authorization: state.accessToken,
                },
              }
            );
            newEventSource.onmessage = eventSource.onmessage;
            newEventSource.onerror = eventSource.onerror;
          }, 5000); // 5초 후 재연결 시도
        }
      };

      // 컴포넌트 언마운트 시 연결 해제
      return () => {
        eventSource.close();
      };
    }, []);
    props.setNoticeFlag(true);
  }

  return <></>;
}
