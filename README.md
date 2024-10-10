<img src="https://github.com/user-attachments/assets/072cfbcb-f5c8-41fd-848f-2a8db066308b"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/305c0389-c6c5-4510-9ad1-2913c1f474f7"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/1aff0f16-c30d-4907-a332-27f27cc800fc"  width="400" height="300"/>


![header](https://capsule-render.vercel.app/api?type=wave&color=gradient&height=300&section=header&text=WMS%20귤로벌%20프로젝트&fontSize=40)

## 📌 프로젝트 소개

<img src="https://github.com/user-attachments/assets/a9726406-91b9-41a6-8843-48e27123a427" width="50" height="50"/> 안녕하세요, 저희는 팀 LCW(Logistics Coding Warriors)입니다. 

신세계 I&C 스파로스 아카데미에서 자바 웹 백엔드에 대해 함께 공부하며 발전해나가고자 합니다.

2차 프로젝트는 WMS 웹 애플리케이션을 구현하는 것을 목표로 지역 내 창고 간 거래에 집중한 시스템을 개발했습니다.


## 🛠 기술 스택

- **프론트엔드**: React
- **백엔드**: Spring Boot, MyBatis
- **데이터베이스**: MySQL, Google Cloud Storage
- **협업툴**: Slack, Notion
- **현상관리**: Git, Github


## 🚀 기능

- **👨‍👧 회원 가입 및 로그인**
- **💡사용자 정보 수정**
- **🚀 관리자 페이지에서 사용자 관리**
- **🌍 창고 검색 및 등록**
- **🔖 입고 요청 및 승인**
- **🔖 출고 요청 및 승인**
- **📦 재고 관리**
- **🚚 운송장관리**
- **📊 입출고 및 재고 대시보드**
- **📬 개인 메시지 알림 기능**


### 📑 기능 상세

👨‍👧 회원 가입 및 로그인
사용자는 회원가입을 통해 계정을 생성할 수 있으며, 생성된 계정으로 로그인하여 서비스를 이용할 수 있습니다.

💡 사용자 정보 수정
사용자는 자신의 프로필 정보를 수정할 수 있으며, 비밀번호 변경도 가능합니다.

🚀 관리자 페이지에서 사용자 관리
관리자는 사용자 목록을 확인하고, 사용자 계정의 상태를 활성화/비활성화하거나 삭제할 수 있습니다.

🌍 창고 검색 및 등록
창고 정보를 검색하고, 새로운 창고를 등록할 수 있는 기능을 제공합니다.

🔖 입고 요청 및 승인
사용자는 물품 입고를 요청할 수 있으며, 관리자는 이를 승인하여 입고 처리를 할 수 있습니다.

🔖 출고 요청 및 승인
물품 출고를 요청하고, 관리자가 이를 승인하여 출고 처리를 할 수 있습니다.

📦 재고 관리
창고에 저장된 물품의 재고를 확인하고, 재고를 관리할 수 있는 기능을 제공합니다.

🚚 운송장 관리
물품 운송에 필요한 운송장을 생성하고, 운송 상태를 관리할 수 있습니다.

🔎 페이징 및 검색 기능
사용자와 창고 목록에서 페이징 처리 및 검색 기능을 통해 데이터를 효율적으로 조회할 수 있습니다.

📊 입출고 및 재고 대시보드
대시보드를 통해 입출고 및 재고 현황을 시각화된 차트로 확인할 수 있습니다.

📬 개인 메시지 알림 기능
사용자가 입고/출고 요청 및 승인과 관련된 알림을 개인 메시지로 받을 수 있습니다.



## 🔧 폴더 구조

```bash

프로젝트 루트/
├── backend/                    # 백엔드(Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/yourpackage/project/   # Java 소스 코드
│   │   │   │       ├── controller/           # 컨트롤러 계층
│   │   │   │       ├── service/              # 서비스 계층
│   │   │   │       ├── repository/           # MyBatis Mapper 또는 JPA Repository
│   │   │   │       ├── model/                # 도메인 모델 (DTO, Entity 등)
│   │   │   └── resources/
│   │   │       ├── application.yml           # 애플리케이션 설정 파일
│   │   │       ├── mapper/                   # MyBatis Mapper XML 파일
│   │   │       └── static/                   # 정적 파일 (CSS, JavaScript, 이미지 등)
│   │   └── test/                             # 테스트 코드
│   ├── build.gradle                          # Gradle 빌드 파일
│   └── settings.gradle                       # Gradle 설정 파일
│
├── frontend/                   # 프론트엔드(React)
│   ├── public/                 # 정적 파일
│   │   └── index.html          # 메인 HTML 파일
│   ├── src/                    # React 소스 코드
│   │   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── containers/         # 상태 관리 및 로직 처리
│   │   ├── pages/              # 주요 페이지 컴포넌트
│   │   ├── hooks/              # 커스텀 훅
│   │   ├── styles/             # 전역 스타일 (Emotion, Styled-components)
│   │   └── App.js              # 메인 앱 컴포넌트
│   ├── package.json            # 프로젝트 정보 및 의존성
│   └── webpack.config.js       # Webpack 설정 파일
│
├── .gitignore                  # Git 무시 파일
├── README.md                   # 리드미 파일
└── LICENSE                     # 라이센스 파일

```





## 🔴 맡은 기능

- **🌍 창고 검색 및 등록 (백엔드)**
- **🔖 입고 요청 및 승인 (풀스택)**
- **🔖 출고 요청 및 승인 (풀스택)**
- - **📊 입출고 및 재고 대시보드(백엔드)**


## 🟠 오류

- ✨ ** 오류 1 **: 백 서버와 프론트 서버에서 서로 데이터가 잘 넘어가는게 확인되었으나 브라우저에 출력이 안된 오류
- 💡 ** 오류분석 1 **: 컨트롤러에서 반환값을 Map<> 형태로 받고 매개변수를 @Request Body를 사용하여 프론트에 전송된 데이터가 두번 감싸서 전달된 것을 확인(data{{value}} 형식)
- 🚀 ** 해결 1 **: 프론트 서버에서 백의 데이터 값을 받을 때 response.data.data로 받아서 value가 출력될 수 있도록 함
--------------
- ✨ ** 오류 2 **: 데이터 값이 제대로 전달되지 않는 오류
- 💡 ** 오류분석 2 **: MyBatis를 통해 작성된 쿼리문을 mapper 인터페이스에 등록했지만 해당 mapper인터페이스가 빈에 등록되지 않았기 때문에 발생된 오류 
- 🚀 ** 해결 2 **: mapper인터페이스에 @Mapper 설정
