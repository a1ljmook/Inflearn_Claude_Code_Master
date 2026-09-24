# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 성격

인스타그램 카드뉴스 제작 워크벤치. 주제(에피소드)별로 HTML/CSS 카드 세트(1080×1350, 4:5 비율)를 만들어 Playwright 로 PNG 스크린샷해 업로드용 이미지를 생성한다. 빌드 도구·패키지 매니저 없음 — 순수 HTML/CSS.

## 디렉토리 구조

```
card-news/
├── styles/card.css            # 공통 디자인 토큰·컴포넌트 (모든 에피소드가 공유)
├── logo.svg                    # 공통 로고 (모든 에피소드가 공유)
├── episodes/
│   └── YYMMDD_[주제]/          # 주제별 에피소드 폴더 (콘텐츠 기준일)
│       ├── NN-slug.html        # 카드 HTML (파일명 앞자리가 노출 순서)
│       ├── images/NN-slug.png  # 생성된 스크린샷
│       └── sources/*.md        # 카드 내용의 원문 소재
└── .claude/skills/card-news-creator/  # 카드뉴스 제작 스킬
```

- **폴더명 규칙**: `YYMMDD_[slug]` — YYMMDD 는 **콘텐츠 기준일**(예: 제품 출시일·이벤트일), slug 은 주제 축약(`opus-4-7`, `next15`, `claude-code-hooks`).
- 새 에피소드는 항상 `episodes/YYMMDD_주제/` 하위에 생성. 루트에 카드 HTML 직접 두지 말 것.
- `styles/`, `logo.svg` 는 루트 공유. 에피소드 HTML 은 `../../styles/card.css`, `../../logo.svg` 로 참조.

## 자주 쓰는 커맨드

**로컬 서버** (Playwright 는 `file://` 을 차단하므로 반드시 HTTP 경유)
```bash
# card-news/ 루트에서 실행 — 에피소드 폴더가 하위 경로로 노출됨
python3 -m http.server 7800
```

**이미지 변환 파이프라인** (에피소드 단위)
```bash
# 에피소드 디렉토리로 이동해 실행하면 screenshot 경로가 간결
cd episodes/260416_opus-4-7

playwright-cli open --browser=chrome
playwright-cli resize 1080 1350
playwright-cli goto "http://localhost:7800/episodes/260416_opus-4-7/01-cover.html"
playwright-cli screenshot --filename=images/01-cover.png
# ... 나머지 카드 반복
playwright-cli close
```
- 브라우저는 에피소드 전체에 대해 한 번만 띄우고 `goto` 만 반복.
- 뷰포트는 반드시 `1080 1350` — body/html 사이즈와 일치해야 스크롤 없는 완전한 스크린샷이 나온다.
- `--filename` 은 playwright-cli CWD 기준. 에피소드 디렉토리에서 실행하면 `images/NN-slug.png` 로 충분. 루트에서 실행하면 `episodes/260416_opus-4-7/images/NN-slug.png` 풀패스로.

## 파일 컨벤션

- 카드 HTML: `episodes/YYMMDD_주제/NN-slug.html` (예: `03-tip-01-prompt.html`) — 파일명 순서가 노출 순서.
- 공통 스타일: `styles/card.css` — 전역 색상 토큰·타이포·공통 컴포넌트(`.card`, `.card-header`, `.page-number`, `.bottom-banner`, `.box-bad/.box-good`, `.num-card`). 에피소드에서는 `../../styles/card.css` 로 참조.
- 카드별 고유 스타일은 HTML 내 `<style>` 블록. 새 카드 추가 시 먼저 `styles/card.css` 의 재사용 가능한 클래스를 확인.
- 출력: `episodes/YYMMDD_주제/images/NN-slug.png`.
- 소재 원문: `episodes/YYMMDD_주제/sources/*.md` — 카드뉴스 내용 근거. 숫자/고유명사는 원문 그대로 옮긴다 (환각 금지 규칙).

## 카드 레이아웃 규약

모든 카드는 공통 구조:
1. 상단 헤더 (로고 + "클로드 코드 완벽 마스터" | 해시태그)
2. 우상단 절대 위치 페이지 번호
3. 본문
4. 하단 오렌지 반투명 배너 (섹션 요약 한 줄)

색상 토큰은 `styles/card.css` `:root` 에 중앙 정의. 새로 색을 쓰기 전에 기존 토큰부터 찾아볼 것 (`--accent`, `--bad-*`, `--good-*`, `--info-*`, `--cyan-*`).

## 제작 프로세스

1. `episodes/YYMMDD_주제/sources/` 에 원문/소재를 먼저 두고 읽어 주장의 근거를 확인.
2. 카드 서사(훅 → 팁 → 숫자 → CTA)를 기획한 뒤 `episodes/YYMMDD_주제/` 하위에 HTML 생성/수정.
3. 가장 비슷한 기존 에피소드 카드를 복사해 내용만 교체 (백지 제작 금지).
4. 로컬 서버 띄우고 브라우저에서 육안 점검 (DevTools 디바이스 모드 1080×1350).
5. Playwright 로 PNG 생성 → `episodes/YYMMDD_주제/images/` 저장.
6. 생성된 PNG 를 Read 툴로 확인 — 폰트 로드/오버플로/컷오프 이슈를 시각적으로 검증.

## 참고

- 상위 `Company/CLAUDE.md` 가 자동 로드되므로 대표 업무 분담·환각 방지 규칙은 여기 중복 기재하지 않는다.
- 카드뉴스 제작 스킬(`.claude/skills/card-news-creator/`) 이 상세 레이아웃 패턴·디자인 토큰을 관리한다. 새 에피소드 작업 시 스킬이 자동 트리거됨.
