# Next.js Starter 프로젝트 CLAUDE.md 최적화 계획

## 컨텍스트
현재 `CLAUDE.md` 파일이 `@AGENTS.md`만 참조하고 있어 매우 빈약합니다. 이 프로젝트는 Next.js v16.3.1이라는 실험적인 버전을 사용하며, 표준 Next.js와는 다른 타입 시스템 및 컨벤션을 가지고 있습니다. Claude Code가 일반적인 학습 데이터에 의존해 잘못된 코드를 생성하는 것을 방지하기 위해, 프로젝트의 특수성과 핵심 컨벤션을 명시한 최적화된 가이드라인이 필요합니다.

## 구현 목표
- 실험적 버전 사용에 대한 강력한 경고 메시지 추가
- 프로젝트 전용 타입 안전 라우팅 패턴 (`LayoutProps<"/path">`) 정의
- Route Group 기반의 폴더 구조 설명
- 최신 기술 스택 (React 19, Tailwind 4, shadcn) 명시
- 핵심 개발 명령어 및 타입 생성 메커니즘 설명

## 수정 대상 파일
- `C:\Users\a1ljm\Desktop\ANSWER_26\Inflearn_Claude_Code_Master\claude-nextjs-starters\CLAUDE.md`

## 상세 구현 내용
Plan 에이전트가 설계한 다음 내용을 `CLAUDE.md`에 작성합니다:
1. **Project Overview**: 실험적 Next.js 스타터 프로젝트 설명.
2. **⚠️ CRITICAL WARNING**: v16.3.1 버전 경고 및 `AGENTS.md` 참조 강조.
3. **Tech Stack**: React 19, Tailwind 4, shadcn, Zustand, Zod 버전 명시.
4. **Development Workflow**: `npm run dev`의 타입 생성 역할 및 기본 명령어.
5. **Code Conventions & Architecture**: 
   - App Router & Route Groups (`(auth)`, `(dashboard)`, `(marketing)`)
   - `LayoutProps<"/path">` 타입 패턴
   - 컴포넌트 계층 구조 (`ui`, `shared`, `features`, `layouts`)
   - Zod 기반의 `schemas/` 검증 패턴
6. **Project Map**: 주요 디렉토리 역할 정의.

## 검증 방법
- `CLAUDE.md` 파일 내용을 읽어 제안된 모든 섹션과 경고 메시지가 정확히 포함되었는지 확인합니다.
- Claude Code가 이제 `CLAUDE.md`를 통해 실험적 버전임을 인지하고 `LayoutProps`와 같은 특수 패턴을 제안하는지 확인합니다.
