---
name: card-news-creator
description: 짐코딩 브랜드 스타일(1080×1350, 다크 배경 + 오렌지 액센트, Pretendard)로 인스타그램 카드뉴스를 제작합니다. 주제별 에피소드 폴더(`episodes/YYMMDD_주제/`) 단위로 HTML/CSS 카드 세트를 기획·작성하고 Playwright로 PNG 변환하는 전체 워크플로우를 담당. "카드뉴스 만들어줘", "인스타 카드", "SNS 슬라이드", "새 시리즈 제작", "주제 N 카드뉴스로 뽑아줘" 같은 요청이나, 사용자가 멀티-슬라이드 교육 이미지 콘텐츠를 만들려 할 때 반드시 이 스킬을 사용하세요. 명시적으로 "스킬"이라 말하지 않아도 카드뉴스/썸네일 세트/캐러셀 맥락이면 트리거. 기존 에피소드(`episodes/260416_opus-4-7/01-cover.html` ~ `08-cta.html`)를 템플릿으로 하여 동일한 디자인 언어를 유지합니다.
---

# 짐코딩 카드뉴스 제작 스킬

이 프로젝트(`card-news/`) 는 인스타그램용 4:5 비율(1080×1350) 카드뉴스를 만드는 워크벤치입니다. 빌드 도구 없이 순수 HTML/CSS 로 카드 한 장씩 만들어 Playwright 스크린샷으로 PNG 출력합니다.

## 프로젝트 구조

```
card-news/
├── styles/card.css          # 공통 디자인 토큰 (모든 에피소드 공유)
├── logo.svg                  # 공통 로고 (모든 에피소드 공유)
└── episodes/
    └── YYMMDD_[주제]/        # 에피소드 단위 (폴더명 = 콘텐츠 기준일 + slug)
        ├── NN-slug.html      # 카드 HTML (1~N장)
        ├── images/*.png      # 스크린샷 출력
        └── sources/*.md      # 카드 내용의 원문 소재
```

- 새 카드뉴스는 항상 `episodes/YYMMDD_[주제]/` 하위에 생성합니다. 루트에 카드 HTML을 직접 두지 마세요.
- 에피소드 HTML 은 공통 자산을 `../../styles/card.css`, `../../logo.svg` 로 참조합니다.
- 기존 참고 에피소드: `episodes/260416_opus-4-7/` (Opus 4.7 best practice, 8장 세트).

## 제작 철학

- **기존 에피소드 카드를 복사해서 수정한다.** 백지에서 새 구조를 만들지 말 것. `episodes/260416_opus-4-7/01-cover.html` ~ `08-cta.html` 에는 이미 7가지 레이아웃 패턴이 담겨있고, 새 카드는 그 중 하나를 골라 내용만 교체하는 방식으로 일관성을 유지합니다.
- **원문 기반으로만 쓴다.** 숫자·고유명사·인용은 해당 에피소드 `sources/*.md` 에 근거가 있어야 합니다. 그럴듯해 보이는 수치를 추측해서 쓰면 안 됩니다(환각 방지).
- **스크린샷으로 검증한다.** 코드가 맞아도 폰트 로드 실패, 텍스트 오버플로, 줄바꿈 어긋남 같은 시각적 버그는 PNG 로 뽑아 Read 로 봐야만 잡힙니다.

## 작업 순서

1. **에피소드 폴더 생성** — `episodes/YYMMDD_[slug]/` 와 하위 `images/`, `sources/` 디렉토리를 만듭니다. YYMMDD는 콘텐츠 기준일(제품 출시일, 이벤트일 등), slug 은 주제 축약(`opus-4-7`, `next15`, `claude-code-hooks`).
2. **원문 배치·확인** — 새 에피소드 `sources/` 에 원문을 두고 읽습니다. 주장의 근거·숫자·인용문은 모두 여기서 가져옵니다.
3. **서사 기획** — 전형적인 흐름: 훅(문제제기) → 팁(핵심 메시지 3~4장) → 숫자(증거) → CTA(행동유도). 총 6~10장 사이가 인스타 카드뉴스 적정 분량.
4. **레이아웃 매핑** — 각 장에 가장 맞는 레이아웃을 `references/layout-patterns.md` 에서 고릅니다. 같은 레이아웃을 연속으로 쓰면 지루하니 중간에 다른 종류를 섞으세요.
5. **기존 에피소드 카드 복사 → 내용 교체** — 예: `cp episodes/260416_opus-4-7/03-tip-01-prompt.html episodes/260420_new-topic/03-tip-01-something.html`. 공통 클래스(`.card`, `.card-header`, `.eyebrow`, `.bottom-banner` 등)는 그대로, 카드 고유 스타일만 `<style>` 블록에서 조정. 경로는 이미 `../../styles/card.css` 로 되어있어 그대로 두면 됩니다.
6. **브라우저 육안 점검** — card-news 루트에서 `python3 -m http.server 7800` 실행 후 `http://localhost:7800/episodes/YYMMDD_[주제]/03-xxx.html` 을 DevTools 디바이스 모드 1080×1350 로 확인.
7. **Playwright PNG 변환** — `references/production.md` 의 파이프라인 그대로 실행.
8. **PNG Read 재확인** — 생성된 이미지를 Read 툴로 열어 폰트·오버플로·컷오프를 시각적으로 검증.

## 파일 규약

- 카드 HTML: `episodes/YYMMDD_[주제]/NN-slug.html` (예: `episodes/260416_opus-4-7/03-tip-01-prompt.html`) — 파일명의 앞자리 숫자가 노출 순서입니다.
- 출력 이미지: `episodes/YYMMDD_[주제]/images/NN-slug.png` (HTML 파일명과 일치).
- 공통 CSS: 루트 `styles/card.css` — 새 색·공통 컴포넌트가 필요하면 여기에 추가(모든 에피소드에 영향). 카드마다 다른 건 HTML 내 `<style>` 블록에.
- 원문: 에피소드별 `sources/*.md` — 새 주제 시작 시 여기에 원문 저장 후 카드 작성.
- 공통 자산 참조 경로: HTML 에서 `href="../../styles/card.css"`, `src="../../logo.svg"` (고정).

## 참고 자료 (필요할 때 읽으세요)

- `references/design-system.md` — 색상 토큰, 타이포 스케일, 헤더·배너 등 공통 컴포넌트. **새 카드 만들기 직전에 한 번 읽으세요.** 토큰 이름을 외우고 있는 것만으로 상당수 실수가 사라집니다.
- `references/layout-patterns.md` — 7가지 레이아웃 카탈로그(커버/훅/비교/레벨바/바그리드/벤치/CTA). 각 패턴의 사용처, HTML 구조, 예시 파일 경로.
- `references/production.md` — Playwright 커맨드 시퀀스, 뷰포트 규칙, 주의사항.

## 디자인 원칙 (절대 깨지 말 것)

- **1080×1350 고정.** `html, body` 크기도 동일하게. 뷰포트와 body 사이즈가 다르면 스크린샷에 공백·스크롤이 생깁니다.
- **다크 배경 + 오렌지 액센트.** 새 색을 추가하고 싶을 때 먼저 `styles/card.css` `:root` 에서 기존 토큰을 찾으세요 — `--accent`, `--bad-*`, `--good-*`, `--info-*`, `--cyan-*` 로 대부분 커버됩니다.
- **Pretendard Variable 폰트.** CDN 에서 자동 로드. 다른 폰트 도입 금지.
- **4대 공통 요소.** 모든 카드에 다음이 있어야 합니다:
  1. 상단 헤더: 로고 + "클로드 코드 완벽 마스터" 라벨 + 우측 해시태그
  2. 우상단 절대 위치 페이지 번호 (`.page-number`)
  3. 본문 상단 eyebrow 라벨 (PROBLEM / TIP NN / NUMBERS / CTA 등)
  4. 하단 오렌지 반투명 배너 (`.bottom-banner`) — 한 줄 요약 메시지
  CTA 카드처럼 예외적 레이아웃(`cta-body`)은 (3)(4) 를 생략하기도 함.

## 흔한 실수 (미리 피하기)

- **공통 자산 경로 깜빡** — 에피소드 HTML 은 루트의 `styles/`, `logo.svg` 를 `../../` 로 참조합니다. 기존 에피소드에서 복사하면 이미 설정돼 있으니 백지 작성보다 복사가 안전합니다.
- **텍스트 오버플로** — 한글 줄바꿈이 영어보다 길어집니다. 타이틀은 `<br>` 로 수동 분절하거나 `.title-lg` 로 한 단계 줄여보세요.
- **페이지 번호 누락** — `<div class="page-number">NN</div>` 빠뜨리기 쉬움. 기존 파일 복사하면 해결.
- **색 하드코딩** — `#FF6B35` 같은 리터럴 대신 `var(--accent)` 사용. 브랜드 색이 바뀌면 토큰 한 곳만 고치면 끝.
- **file:// 로 Playwright 실행** — Chromium 이 로컬 파일 접근을 차단합니다. 반드시 `python3 -m http.server 7800` 경유.
- **원문 없이 숫자 쓰기** — "약 40%" 같은 표현도 에피소드 `sources/` 에 근거 없으면 쓰지 마세요. 차라리 정성적 표현(`크게 상승`)으로 바꿉니다.
- **루트에 카드 HTML 직접 생성** — 반드시 `episodes/YYMMDD_[주제]/` 하위에. 루트는 공유 자산 전용.

## 품질 체크리스트 (PNG 뽑기 직전)

- [ ] 헤더 3요소(로고·라벨·해시태그) 모두 있는가
- [ ] 우상단 `.page-number` 번호가 HTML 파일명 숫자와 일치하는가
- [ ] eyebrow 라벨이 카드 성격과 맞는가 (TIP NN, PROBLEM, NUMBERS…)
- [ ] `.bottom-banner` 에 한 줄 핵심 메시지가 있는가 (CTA 제외)
- [ ] 새로 쓴 색이 `styles/card.css` 토큰으로 커버 가능한가
- [ ] 모든 숫자·고유명사가 `sources/` 원문과 일치하는가
- [ ] 로컬 서버에서 1080×1350 뷰포트로 스크롤 없이 보이는가
