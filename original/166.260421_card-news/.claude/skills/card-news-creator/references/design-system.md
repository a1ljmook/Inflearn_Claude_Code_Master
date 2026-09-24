# 디자인 시스템

`styles/card.css` 에 중앙 정의된 토큰을 그대로 쓰세요. 새로 만들기 전에 **반드시** 기존 토큰에서 해당 목적을 커버하는 게 있는지 확인합니다.

## 색상 토큰

### 배경·텍스트

| 토큰 | 값 | 용도 |
|------|-----|-----|
| `--bg` | `#0a0a0a` | 카드 기본 배경 (거의 검정) |
| `--bg-elevated` | `#141414` | 박스·카드 한 단계 올린 배경 |
| `--text-primary` | `#FFFFFF` | 제목, 본문 강조 |
| `--text-secondary` | `#A8A8A8` | 부제, 보조 텍스트 |
| `--text-tertiary` | `#666666` | 페이지 번호, 메타 정보 |

### 액센트 (짐코딩 브랜드 오렌지)

| 토큰 | 값 | 용도 |
|------|-----|-----|
| `--accent` | `#FF6B35` | 강조색. 강조 단어, 숫자, 버튼 배경 |
| `--accent-soft` | `#FF8A5C` | 액센트 그라데이션 보조 |
| `--accent-bg` | `rgba(255,107,53,0.10)` | 액센트 영역 반투명 배경 (bottom-banner 등) |
| `--accent-border` | `rgba(255,107,53,0.35)` | 액센트 영역 테두리 |
| `--accent-strong` | `rgba(255,107,53,0.18)` | 강한 액센트 배경 (선택된 level 등) |

### 상태 색

| 계열 | bg / border / text |
|------|-------|
| BAD (`--bad-*`) | 빨강 — 나쁜 예시, 경고, 토큰 증가 바 |
| GOOD (`--good-*`) | 녹색 — 좋은 예시, 기준값, 절약 수치 |
| INFO (`--info-*`) | 파랑 — 중립 정보, 2번 항목 num-card |
| CYAN (`--cyan-*`) | 시안 — 3번 항목 num-card, 보조 강조 |

세 계열 모두 `bg / border / text` 3개 토큰 제공. 사용 예: `background: var(--bad-bg); border: 1px solid var(--bad-border); color: var(--bad-text);`

### 카드 테두리

| 토큰 | 용도 |
|------|-----|
| `--card-border` | 기본 박스 테두리 (반투명 흰색 8%) |
| `--card-border-strong` | 더 선명한 테두리가 필요할 때 |

## 타이포그래피

폰트: **Pretendard Variable** (CDN 자동 로드, 한글 최적화). 다른 폰트 도입 금지.

| 클래스 | 크기 | 용도 |
|--------|------|------|
| `.title-xxl` | 96px / 800 | 커버 메인 타이틀 |
| `.title-xl` | 76px / 800 | 일반 카드 메인 타이틀 (가장 자주 사용) |
| `.title-lg` | 62px / 800 | 타이틀이 길어 `title-xl` 이 오버플로할 때 |
| `.title-md` | 52px / 800 | 제한 공간의 부제 타이틀 |
| `.subtitle` | 30px / 500 | 타이틀 아래 설명 |
| `.eyebrow` | 26px / 700 | 카드 성격 라벨 (PROBLEM / TIP 01 / NUMBERS 등) — 대문자, letter-spacing 0.10em, 오렌지 |

### 인라인 강조

- `.accent` — 글자색만 오렌지로 (타이틀의 특정 단어 강조)
- `.text-dim` — 텍스트 2차 색으로 dim

### 숫자 표기

타뷸러 숫자가 필요한 곳(벤치마크 수치, 페이지 번호, 코드)에는 `font-feature-settings: "tnum";` 을 주세요. 숫자 자릿수가 고정돼 정렬이 깔끔해집니다.

### 코드 스타일

모노스페이스는 `'SF Mono', ui-monospace, Menlo, monospace`. 인라인 코드는 다음 패턴:
```css
background: rgba(255,255,255,0.06);
padding: 3px 10px;
border-radius: 6px;
font-size: 22px;
color: #D4D4D4;
```

## 레이아웃 기본값

```css
html, body { width: 1080px; height: 1350px; overflow: hidden; }
.card {
  width: 1080px; height: 1350px;
  padding: 56px 72px 72px;   /* top 56, side 72, bottom 72 */
  display: flex; flex-direction: column;
  position: relative;
}
```

- 좌우 패딩은 항상 **72px**. 콘텐츠 최대 너비 936px.
- 상단 패딩 56px — 헤더가 이 영역에 들어감.
- 페이지 번호는 absolute, `top: 120px; right: 72px;` — 헤더 아래 라인 우측.

## 공통 컴포넌트

### 헤더 (`.card-header`)

```html
<header class="card-header">
  <div class="card-header-left">
    <img src="logo.svg" class="logo" alt="짐코딩">
    <span class="label">클로드 코드 완벽 마스터</span>
  </div>
  <div class="card-header-right">#opus4.7 best practice</div>
</header>
```

- 좌측: 로고(34×34 원형) + 강의명 라벨
- 우측: 해시태그 (시리즈별로 교체)
- 강의명 라벨은 시리즈 주제에 맞게 바꿀 수 있지만 짐코딩 채널의 강의명으로 유지할 것

### 페이지 번호 (`.page-number`)

```html
<div class="page-number">03</div>
```

두 자리 0-padded (`01`, `02` ...). 파일명 숫자와 일치해야 합니다.

### Eyebrow (`.eyebrow`)

카드 성격을 한 단어로 알리는 라벨. 대문자 + 오렌지 + letter-spacing 넓게.

| 용도 | 라벨 예시 |
|------|----------|
| 문제제기 (hook) | `PROBLEM` |
| 팁 시리즈 N번째 | `TIP 01`, `TIP 02` ... |
| 수치·증거 | `NUMBERS`, `BENCHMARK`, `DATA` |
| 방법·단계 | `HOW TO`, `STEP 03` |
| 마무리 | 보통 CTA 카드는 eyebrow 생략 |

### Bottom Banner (`.bottom-banner`)

```html
<div class="bottom-banner">한 줄 요약 메시지</div>
```

액센트 반투명 배경 + 오렌지 텍스트. 해당 카드의 핵심을 한 문장으로. 30px/700. CTA 마지막 장에서는 `.course-banner` 로 대체.

### 뱃지 (`.badge`, `.badge-soft`)

- `.badge` — solid 오렌지 배경. 커버 카드의 "OPUS 4.7 공개" 같은 고지성 배지.
- `.badge-soft` — 투명 오렌지. 태그·카테고리 느낌.

### BAD / GOOD 박스 (`.box-bad`, `.box-good`)

비교 레이아웃의 핵심. `.tag` 클래스로 "BAD"/"GOOD" 라벨을 박스 좌상단에 붙입니다. 내용은 자유.

### 번호 카드 (`.num-card`)

훅 카드의 3가지 포인트 표현용. `.v1` / `.v2` / `.v3` 변형이 각각 빨강·파랑·시안으로 색만 다릅니다. 숫자·제목(`.t1`)·부제(`.t2`) 3단 구조.

## 여백 가이드

- 카드 본문 시작 전 `padding-top: 40px` (`.card-body` 기본값)
- eyebrow → title: 28px (`.eyebrow { margin-bottom: 28px }`)
- title → 본문 섹션: 44~56px (카드마다 튜닝)
- bottom-banner 위 여백: 40~48px

가로 gap 은 보통 16~24px, 카드 내 박스 radius 는 16~22px 사이에서 취향껏.
