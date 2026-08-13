# TO DO 앱 구현 계획

## 1. 컨텍스트 (Context)
본 프로젝트는 기존의 프론트엔드 전용 '버킷 리스트' 앱(`bucket-list-main`)에서 한 단계 나아가, Python 백엔드를 결합한 풀스택 TO DO 앱을 구현하는 것을 목표로 합니다. 이를 통해 API 설계, 데이터 영속성 관리, 프론트엔드-백엔드 통합 과정을 학습하고 구현합니다.

## 2. 권장 접근 방식 (Recommended Approach)

### 2.1 기술 스택
- **Backend**: Python 3.12+, FastAPI (고성능 API 프레임워크)
- **Frontend**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Storage**: SQLite (경량 관계형 데이터베이스)
- **환경 관리**: `uv`

### 2.2 데이터 모델
`bucket-list-main`의 일관성을 유지하기 위해 다음 모델을 사용합니다:
- `id`: String (Unique ID)
- `title`: String (할 일 내용)
- `completed`: Boolean (완료 여부)
- `createdAt`: ISO 8601 String (생성일)
- `completedAt`: ISO 8601 String | null (완료일)

### 2.3 핵심 파일 및 역할
- `todo-web/main.py`: FastAPI 애플리케이션 진입점 및 REST API 엔드포인트 정의
- `todo-web/database.py`: SQLite 데이터베이스 연결 및 CRUD 로직 구현
- `todo-web/static/index.html`: Tailwind CSS 기반의 사용자 인터페이스 (UI)
- `todo-web/static/js/app.js`: 백엔드 API 통신(`fetch`) 및 DOM 업데이트 로직

## 3. 상세 구현 단계

### 1단계: 프로젝트 초기화 및 백엔드 설정
- `uv`를 사용하여 `todo-web` 디렉토리 생성 및 `fastapi`, `uvicorn` 의존성 설치
- `database.py`에서 SQLite 테이블 생성 및 데이터 접근 계층(DAL) 구현
- `main.py`에서 기본 API 엔드포인트(`GET /tasks`, `POST /tasks`, `PATCH /tasks/{id}`, `DELETE /tasks/{id}`) 구현

### 2단계: 프론트엔드 UI 개발
- `index.html` 작성: 입력창, 필터 버튼(전체, 진행 중, 완료), 할 일 리스트 영역 구성
- Tailwind CSS를 사용하여 `bucket-list-main`과 유사한 깔끔하고 현대적인 디자인 적용

### 3단계: 프론트엔드-백엔드 통합
- `app.js` 작성:
    - `fetch()` API를 사용하여 백엔드 엔드포인트와 연동
    - 상태 관리 및 렌더링 로직 구현 (기존 `bucket-list-main`의 `app.js` 패턴 참조)
- FastAPI에서 `static` 디렉토리를 서빙하도록 설정하여 브라우저에서 접속 가능하게 구현

## 4. 검증 계획 (Verification)
- **API 검증**: FastAPI의 자동 생성 문서(`http://localhost:8000/docs`)를 통해 모든 엔드포인트의 기능 정상 작동 확인
- **UI/UX 검증**: 
    - 할 일 추가, 완료 처리, 삭제 기능이 브라우저에서 실시간으로 반영되는지 확인
    - 필터링 기능(전체/진행 중/완료)이 정확하게 작동하는지 확인
- **영속성 검증**: 서버를 재시작한 후에도 기존에 저장된 할 일 목록이 유지되는지 확인
