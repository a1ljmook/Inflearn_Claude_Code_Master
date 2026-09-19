# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어
- **개발 서버 실행**: `npm run dev`
- **프로젝트 빌드**: `npm run build`
- **프로덕션 서버 실행**: `npm run start`
- **린트 체크**: `npm run lint`

## 아키텍처 및 구조
이 프로젝트는 **Next.js App Router**와 **Supabase**를 결합한 스타터 킷입니다.

### 핵심 기술 스택
- **Framework**: Next.js (App Router)
- **Backend/Auth**: Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI 기반)
- **Language**: TypeScript

### 폴더 구조
- `app/`: Next.js App Router의 메인 디렉토리
  - `app/auth/`: 인증 관련 페이지 및 라우트 핸들러 (로그인, 회원가입, 비밀번호 찾기 등)
  - `app/protected/`: 인증된 사용자만 접근 가능한 보호된 영역 (중첩 레이아웃 `layout.tsx` 적용)
  - `app/layout.tsx`: 앱의 루트 레이아웃
  - `app/page.tsx`: 메인 랜딩 페이지
- `components/`: 재사용 가능한 UI 컴포넌트 (shadcn/ui 구성 요소 포함)
- `utils/`: 공통 유틸리티 함수 (예: Supabase 클라이언트 설정)

### 인증 흐름
- `supabase-ssr` 패키지를 사용하여 쿠키 기반의 인증 세션 관리를 수행합니다.
- 보호된 페이지 접근 제어는 `app/protected/layout.tsx` 또는 미들웨어를 통해 처리됩니다.
- 인증 관련 로직은 `app/auth/` 하위의 페이지 및 `route.ts` 핸들러에서 관리합니다.
