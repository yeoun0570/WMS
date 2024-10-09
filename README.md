# <img src="https://github.com/user-attachments/assets/a9726406-91b9-41a6-8843-48e27123a427" width="50" height="50"/> Gulobal

![Build Status](https://img.shields.io/badge/-java-brightgreen)
![License](https://img.shields.io/badge/-React-blue)

<img src="https://github.com/user-attachments/assets/072cfbcb-f5c8-41fd-848f-2a8db066308b"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/305c0389-c6c5-4510-9ad1-2913c1f474f7"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/1aff0f16-c30d-4907-a332-27f27cc800fc"  width="400" height="300"/>

## 🚀 프로젝트 소개

안녕하세요, 저희는 팀 LCW(Logistics Coding Warriors)입니다. 


신세계 I&C 스파로스 아카데미에서 창고 관리 시스템에 대해 함께 공부하며 발전해나가고자 합니다.


2차 프로젝트는 창고 간 거래에 집중한 시스템, 현업과 비슷한 환경으로 구현하는 것을 목표로 합니다.


## 🔴 총 기능

- 👨‍👧 ** 회원관리 **  
- 💡 ** 창고관리 **
- 🚀 ** 입고관리 **
- 💫 ** 출고관리 **
- 🌟 ** 재고관리 **
- 🔎 ** 운송장관리 **
- ✨ ** 대쉬보드 **

## 🔴 맡은 기능

- 💡 ** 창고관리(백엔드) **
- 🚀 ** 입고관리(풀스택) **
- 💫 ** 출고관리(풀스택) **
- ✨ ** 대쉬보드(백엔드) **


## 🟠 오류

- ✨ ** 오류 1 **: 백 서버와 프론트 서버에서 서로 데이터가 잘 넘어가는게 확인되었으나 브라우저에 출력이 안된 오류
- 💡 ** 오류분석 1 **: 컨트롤러에서 반환값을 Map<> 형태로 받고 매개변수를 @Request Body를 사용하여 프론트에 전송된 데이터가 두번 감싸서 전달된 것을 확인(data{{value}} 형식)
- 🚀 ** 해결 1 **: 프론트 서버에서 백의 데이터 값을 받을 때 response.data.data로 받아서 value가 출력될 수 있도록 함
--------------
- ✨ ** 오류 2 **: 데이터 값이 제대로 전달되지 않는 오류
- 💡 ** 오류분석 2 **: MyBatis를 통해 작성된 쿼리문을 mapper 인터페이스에 등록했지만 해당 mapper인터페이스가 빈에 등록되지 않았기 때문에 발생된 오류 
- 🚀 ** 해결 2 **: mapper인터페이스에 @Mapper 설정
