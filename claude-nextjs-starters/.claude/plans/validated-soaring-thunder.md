# 모던 웹 스타터킷 구현 계획

## 컨텍스트 (Context)
이 프로젝트의 목표는 최소한의 Next.js 16 설치 상태를 전문적인 프로덕션 수준의 "모던 웹 스타터킷"으로 변환하는 것입니다. 현재 프로젝트는 Next.js 16, React 19, Tailwind 4, ShadcnUI 등 최신 스택의 기초만 잡혀 있는 상태입니다. 개발자가 확장 가능하고 표준화된 아키텍처를 바탕으로 빠르게 프로젝트를 시작할 수 있도록, 검증된 라이브러리를 활용한 베스트 프랙티스와 레이아웃 패턴을 제공합니다.

## 권장 접근 방식: 기능 중심 아키텍처 (Feature-Driven Architecture)
Next.js의 **Route Groups**를 활용하여 URL 구조에 영향을 주지 않으면서 시각적/논리적으로 분리된 세 가지 영역을 구축합니다.

### 1. 핵심 구조 및 레이아웃
`app` 디렉토리를 다음과 같이 그룹화하여 레이아웃을 격리합니다:

- **마케팅 그룹 `(marketing)`**:
  - `app/(marketing)/layout.tsx`: 반응형 Navbar와 Footer가 포함된 공개 레이아웃.
  - `app/(marketing)/page.tsx`: 고전환 랜딩 페이지 (Hero, Features, Pricing 섹션).
- **인증 그룹 `(auth)`**:
  - `app/(auth)/layout.tsx`: 인증 폼에 집중할 수 있는 중앙 정렬된 미니멀 레이아웃.
  - `app/(auth)/login/page.tsx` 및 `app/(auth)/register/page.tsx`: 표준 인증 진입점.
- **대시보드 그룹 `(dashboard)`**:
  - `app/(dashboard)/layout.tsx`: 접이식 Sidebar, Header (사용자 프로필, 테마 토글), 스크롤 가능한 메인 콘텐츠 영역을 포함하는 앱 쉘.
  - `app/(dashboard)/page.tsx`: KPI 카드가 포함된 대시보드 개요 페이지.
  - `app/(dashboard)/profile/page.tsx`: 사용자 프로필 관리 페이지.

### 2. 라이브러리 활용 전략 ("바퀴를 재발명하지 않음")
검증된 오픈소스 라이브러리를 적극적으로 도입하여 안정성과 개발 속도를 높입니다.

- **폼 관리 및 유효성 검사**: `react-hook-form`과 `zod`를 조합하여 클라이언트/서버 통합 검증 체계 구축.
- **날짜 및 시간 처리**: `date-fns`를 사용하여 일관된 날짜 포맷팅 및 조작 수행.
- **상태 관리**: 전역 상태가 필요한 경우 가볍고 빠른 `zustand` 도입.
- **UI 프라이미티브**: `shadcn/ui`를 기반으로 하되, 복잡한 UI는 `Radix UI`의 접근성 표준을 준수.
- **아이콘**: `lucide-react`를 사용하여 일관된 시각적 언어 유지.

### 3. 아키텍처 패턴 (골든 패스)
Next.js 15/16의 권장 데이터 흐름을 보여주기 위해 **프로필 업데이트** 기능을 구현합니다:
- **스키마**: `schemas/profile.ts` (`zod`를 사용하여 서버/클라이언트 공통 검증).
- **액션**: `actions/profile.ts` (Server Action을 통한 검증 및 DB 반영).
- **폼**: `components/features/profile/profile-form.tsx` (`react-hook-form` 기반의 클라이언트 컴포넌트).
- **페이지**: `app/(dashboard)/profile/page.tsx` (초기 데이터를 페칭하는 서버 컴포넌트).

### 4. 시스템 및 DX 향상
- **글로벌 상태**: `loading.tsx`, `error.tsx`, `not-found.tsx`를 구현하여 사용자 경험(UX) 완성도 향상.
- **타입 안정성**: `types/index.ts`에 공통 도메인 엔티티 정의.
- **개발 문서**: 아키텍처 설명 및 기능 확장 방법을 담은 상세한 `README.md` 작성.

## 주요 수정 및 생성 파일 목록
- **레이아웃**: `app/(marketing)/layout.tsx`, `app/(auth)/layout.tsx`, `app/(dashboard)/layout.tsx`.
- **페이지**: `app/(marketing)/page.tsx`, `app/(auth)/login/page.tsx`, `app/(dashboard)/page.tsx`, `app/(dashboard)/profile/page.tsx`.
- **컴포넌트**: `components/layouts/navbar.tsx`, `components/layouts/sidebar.tsx`, `components/layouts/header.tsx`, `components/features/profile/profile-form.tsx`.
- **로직/타입**: `actions/profile.ts`, `schemas/profile.ts`, `types/index.ts`.

## 검증 계획
1. **라우트 확인**: `/` (마케팅), `/login` (인증), `/dashboard` (앱) 이동 시 레이아웃이 올바르게 전환되는지 확인.
2. **반응성 테스트**: 모바일 뷰포트에서 대시보드 사이드바의 접힘 동작 및 네비게이션 바의 반응성 확인.
3. **데이터 흐름 테스트**: 프로필 폼 제출 시 `zod` 유효성 검사와 Server Action이 정상 작동하는지 확인.
4. **UI 폴리싱**: 라이트/다크 모드 전환 시 모든 페이지에 테마가 일관되게 적용되는지 확인.
5. **에러 핸들링**: 존재하지 않는 경로 접속 시 `not-found.tsx` 페이지가 정상 출력되는지 확인.
