# Root Route Fix & Landing Page Implementation

## Context
`starter-cleaner` 에이전트가 프로젝트를 정리하는 과정에서 `app/page.tsx` 파일을 삭제하여 루트 경로(`/`) 접속 시 404 오류가 발생하고 있습니다. 이를 해결하기 위해 서비스 소개 및 견적서 조회 경로 안내를 위한 심플한 MVP 랜딩 페이지를 구현합니다.

## Implementation Plan

### 1. Client Component for Invoice Search
`components/invoice-search.tsx` 파일을 생성하여 사용자가 견적서 ID를 입력하고 해당 페이지로 이동할 수 있는 기능을 구현합니다.
- **기능**: ID 입력 필드 제공 및 `next/navigation`의 `useRouter`를 이용한 `/invoice/[id]` 이동.
- **UI**: `shadcn/ui`의 `Input`, `Button`, `Label` 컴포넌트 활용.

### 2. Main Landing Page
`app/page.tsx` 파일을 생성하여 서비스의 정체성을 보여주는 랜딩 페이지를 구현합니다.
- **Hero 섹션**: 서비스 타이틀 및 핵심 가치 설명.
- **Features 섹션**: 실시간 연동, 빠른 조회, 전문적인 뷰라는 3가지 특장점을 카드로 표시.
- **Search 섹션**: 위에 구현한 `InvoiceSearch` 컴포넌트를 배치하여 즉시 조회가 가능하도록 구성.
- **스타일링**: Tailwind CSS v4를 사용하여 중앙 정렬된 깔끔한 레이아웃 적용.

## Critical Files
- `components/invoice-search.tsx` (New)
- `app/page.tsx` (New)
- `components/ui/button.tsx` (Reuse)
- `components/ui/input.tsx` (Reuse)
- `components/ui/label.tsx` (Reuse)

## Verification
1. `npm run dev` 실행 후 브라우저에서 `http://localhost:3000` 접속.
2. 루트 페이지가 정상적으로 렌더링되는지 확인.
3. 견적서 ID(예: `test-id`)를 입력하고 '조회하기' 버튼 클릭 시 `/invoice/test-id` 경로로 정상 이동하는지 확인.
