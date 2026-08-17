# 🚀 Modern Web Starter Kit

최신 Next.js 스택을 활용하여 빠르게 웹 서비스를 구축할 수 있도록 설계된 전문 스타터킷입니다.

## 🛠 기술 스택

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19, Tailwind CSS 4, ShadcnUI
- **Language**: TypeScript
- **Icons**: Lucide React
- **Form & Validation**: React Hook Form, Zod
- **State Management**: Zustand
- **Utilities**: date-fns, next-themes

## 🏗 아키텍처 설계

본 키트는 **기능 중심 아키텍처(Feature-Driven Architecture)**를 채택하여 확장성을 극대화했습니다.

### 📁 폴더 구조
- `app/`: 라우팅 및 레이아웃 정의 (Route Groups 활용)
  - `(marketing)/`: 공개 랜딩 페이지 및 마케팅 섹션
  - `(auth)/`: 로그인, 회원가입 등 인증 관련 페이지
  - `(dashboard)/`: 사용자 전용 대시보드 및 설정 페이지
- `components/`: React 컴포넌트
  - `ui/`: ShadcnUI 원자적(Atomic) 컴포넌트
  - `layouts/`: 전역 레이아웃 컴포넌트 (Navbar, Sidebar 등)
  - `features/`: 도메인별 복합 컴포넌트 (auth, profile 등)
  - `shared/`: 프로젝트 전역 공통 컴포넌트
- `lib/`: 공통 유틸리티 및 API 클라이언트
- `actions/`: Next.js Server Actions (비즈니스 로직)
- `schemas/`: Zod 유효성 검사 스키마 (클라이언트/서버 공유)
- `types/`: 전역 TypeScript 타입 정의

## 🚀 시작하기

### 설치
\`\`\`bash
npm install
\`\`\`

### 실행
\`\`\`bash
npm run dev
\`\`\`

## 💡 개발 가이드: 새로운 기능 추가하기

새로운 기능을 추가할 때는 다음의 **골든 패스(Golden Path)**를 따르는 것을 권장합니다:

1. **타입 정의**: `types/index.ts`에 필요한 엔티티 정의
2. **스키마 작성**: `schemas/`에 Zod 유효성 검사 로직 작성
3. **서버 액션 구현**: `actions/`에 서버 로직 구현 및 `revalidatePath` 설정
4. **UI 컴포넌트 개발**: `components/features/`에 클라이언트 폼 컴포넌트 작성
5. **페이지 구성**: `app/` 하위 경로에 서버 컴포넌트 페이지 생성 및 폼 배치

## ✅ 체크리스트
- [x] 최신 Next.js 16 및 React 19 적용
- [x] 반응형 레이아웃 (Marketing, Auth, Dashboard) 구현
- [x] Zod + React Hook Form 통합 검증 체계 구축
- [x] 다크/라이트 모드 테마 시스템 적용
- [x] 글로벌 에러/로딩/404 페이지 구현
