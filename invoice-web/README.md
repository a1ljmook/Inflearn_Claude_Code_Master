# 노션 기반 견적서 관리 시스템 MVP

## 🎯 프로젝트 개요

**목적**: 노션을 데이터베이스로 활용해 견적서를 관리하고, 클라이언트가 웹에서 조회 및 PDF를 다운로드할 수 있도록 합니다.

**범위**: 
- Notion API 연동을 통한 견적서 데이터 조회
- 고유 URL(`/invoice/[notionPageId]`) 기반 견적서 보기
- PDF 다운로드 기능

**타겟 사용자**: 
- 견적서 발행 및 전달이 필요한 프리랜서·소규모 기업, 
- 견적서를 수신하는 클라이언트

## 📱 핵심 페이지
- `/invoice/[id]`: 견적서 조회 및 PDF 다운로드
- 기본 `404` 페이지(고객에게 안내)

## ⚡ 핵심 기능
1. **Notion 데이터베이스 연동**: Notion API SDK를 사용해 견적서 정보를 가져옵니다.
2. **견적서 조회**: 고유 URL을 통해 특정 견적서 내용을 웹에 표시합니다.
3. **PDF 다운로드**: `@react-pdf/renderer`를 사용해 PDF를 서버에서 생성해 다운로드합니다.
4. **경로 기반 오류 처리**: 존재하지 않는 ID가 들어오면 자동 404 페이지를 띕니다.

## 🛠️ 기술 스택
- **Framework**: Next.js 15.5.3 (App Router + Turbopack)
- **Runtime**: React 19 + TypeScript 5
- **Styling**: TailwindCSS v4 + shadcn/ui
- **API**: @notionhq/client (Notion API v1)
- **PDF**: @react-pdf/renderer
- **Form**: React Hook Form + Zod
- **Lint**: ESLint + Prettier

## 🚀 시작하기
```bash
# 의존성 설치
npm install

# 환경 변수 설정 ( .env.local )
#  - NOTION_API_KEY
#  - NOTION_DATABASE_ID

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📦 현재 상태
- `app/invoice/[id]/page.tsx`에 견적서 조회 로직 스켈레톤 구현
- Notion SDK 타입 지정 파일(`lib/notion.ts` 포함)
- 페이지 레이아웃은 `app/layout.tsx`에 기본 설정
- 모든 데모 페이지 및 예제 파일 삭제

## 📖 문서
- PRD: [docs/PRD.md](./docs/PRD.md)
- 로드맵: [docs/ROADMAP.md](./docs/ROADMAP.md)
- 개발 가이드: [CLAUDE.md](./CLAUDE.md)
