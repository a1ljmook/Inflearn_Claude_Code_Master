# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(claude.ai/code)를 위한 가이드를 제공합니다.

## 공통 명령어
- 개발 서버 실행: `npm run dev`
- 프로덕션 빌드: `npm run build`
- 프로덕션 서버 시작: `npm run start`
- 린트 체크: `npm run lint`
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add [component-name]`

## 아키텍처 및 구조
- **프레임워크**: Next.js (App Router)를 사용하며, 페이지와 레이아웃은 `src/app`에 위치합니다.
- **스타일링**: Tailwind CSS v4를 사용합니다. 디자인 토큰 및 테마 커스텀 설정은 `src/app/globals.css`의 `@theme` 블록에서 관리합니다.
- **컴포넌트**:
  - `src/components/ui`: shadcn으로 관리되는 저수준(low-level) 재사용 가능 UI 컴포넌트.
  - `src/components/layout`: 고수준(high-level) 구조 컴포넌트 (예: Navbar, Footer).
- **유틸리티**: 일반 헬퍼 함수들은 `src/lib`에 위치합니다.

## 중요 주의사항
- **Next.js 버전**: 이 프로젝트에서 사용하는 Next.js 버전은 일반적인 학습 데이터와 비교하여 breaking changes가 포함되어 있습니다. 새로운 기능을 구현하거나 핵심 로직을 수정하기 전에 반드시 `AGENTS.md`와 `node_modules/next/dist/docs/`의 가이드를 참조하십시오.
