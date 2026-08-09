# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## Commands
- 실행 (간이 서버): `python -m http.server 8000`
- 실행 (직접): `index.html` 파일을 브라우저로 열기

## Architecture
- **기술 스택**: HTML5, CSS3 (Tailwind CSS CDN), Vanilla JavaScript (ES6+).
- **데이터 저장**: 서버 없이 브라우저의 `LocalStorage API`를 사용하여 데이터를 영구 보관합니다.
- **구조**:
  - `index.html`: 메인 UI 구조 및 Tailwind CSS 스타일링 정의.
  - `js/storage.js`: `LocalStorage`와 상호작용하는 데이터 관리 모듈 (저장, 로드, 삭제).
  - `js/app.js`: UI 이벤트 처리, 상태 관리, 통계 계산 및 DOM 업데이트를 담당하는 메인 로직.
  - `css/styles.css`: Tailwind CSS로 구현하기 어려운 세부 커스텀 스타일 정의.
