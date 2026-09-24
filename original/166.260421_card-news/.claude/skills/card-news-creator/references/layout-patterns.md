# 레이아웃 패턴 카탈로그

기존 7가지 카드에서 추출한 레이아웃 패턴입니다. 새 카드를 만들 때 가장 비슷한 패턴의 HTML 파일을 **복사해서 내용만 교체**하세요. 백지에서 새 구조를 만들지 마세요.

## 패턴 선택 가이드

| 목적 | 패턴 | 참고 에피소드 경로 |
|------|------|----------|
| 시리즈 표지, 주제 공개 | [Cover](#1-cover) | `episodes/260416_opus-4-7/01-cover.html` |
| 문제 제기, 3가지 이유 | [Hook + Num-list](#2-hook--num-list) | `episodes/260416_opus-4-7/02-hook.html` |
| BAD vs GOOD 비교 | [Compare 2-col](#3-compare-2-column) | `episodes/260416_opus-4-7/03-tip-01-prompt.html` |
| 단계·등급 시각화 | [Level Bar](#4-level-bar) | `episodes/260416_opus-4-7/04-tip-02-effort.html` |
| 수치 비교 + 해결책 3개 | [Progress + Controls](#5-progress--controls) | `episodes/260416_opus-4-7/05-tip-03-token.html` |
| 기능·스펙 나열 (강조) | [Feature Cards](#6-feature-cards) | `episodes/260416_opus-4-7/06-tip-04-claude-code.html` |
| 숫자 2×2 그리드 | [Benchmark Grid](#7-benchmark-grid) | `episodes/260416_opus-4-7/07-benchmark.html` |
| 마지막 장, 팔로우 유도 | [CTA Centered](#8-cta-centered) | `episodes/260416_opus-4-7/08-cta.html` |

연속으로 같은 패턴을 쓰지 마세요. 훅 다음에 비교, 그 다음에 레벨바, 벤치 그리드... 식으로 시각적 리듬을 유지합니다.

---

## 1. Cover

**사용처**: 첫 장. 시리즈 주제를 한 방에 보여주는 간판.

**구조**:
- 우측 배경에 거대한 반투명 텍스트 장식 (`.cover-mark` — 모델명, 버전, 키워드 등)
- 좌측: `.badge` (고지) → `.cover-title` (100px 타이틀 2줄, 일부 단어 `.accent`) → `.cover-sub` (날짜/요약) → `.cover-meta` (모노스페이스 코드 태그 + 플랫폼명)

**교체 지점**:
- `.cover-mark` 텍스트 (주제를 압축한 짧은 심볼)
- `.badge` 문구
- `.cover-title` 2줄 카피
- 날짜와 태그 리스트

**예시 카피 톤**: "Claude Opus 4.7, 쓰는 법이 **달라졌습니다**" — 반드시 한 단어는 `.accent` 로 강조.

---

## 2. Hook + Num-list

**사용처**: 2번째 장. 문제 제기 + 3가지 구체 포인트.

**구조**:
```html
<div class="eyebrow">PROBLEM</div>
<h2 class="title-xl">아직도 ...<br>쓰고 있나요?</h2>
<div class="num-list">
  <div class="num-card v1">
    <div class="num">1</div>
    <div class="body">
      <div class="t1">핵심 포인트 한 줄</div>
      <div class="t2">부연 설명 한 줄</div>
    </div>
  </div>
  <!-- v2, v3 -->
</div>
<div class="bottom-banner">...</div>
```

**교체 지점**:
- 타이틀 질문형 카피 (독자의 현재 습관 지적)
- 3개 num-card 의 `t1` (굵은 포인트) + `t2` (가벼운 설명)

**변형**: 포인트가 2개면 num-card 2개만, 4개면 4개까지 가능(이 경우 패딩 줄이기). 5개 이상은 다음 카드로 분리.

---

## 3. Compare 2-column

**사용처**: BAD 예시와 GOOD 예시를 나란히 보여 대비.

**구조**:
```html
<div class="compare">
  <div class="box box-bad">
    <span class="tag">BAD</span>
    <div class="content">"나쁜 예시 한 줄"</div>
  </div>
  <div class="box box-good">
    <span class="tag">GOOD</span>
    <div class="kv-list">
      <div class="kv"><span class="k">의도</span><span class="v">...</span></div>
      <!-- 여러 개 -->
    </div>
  </div>
</div>
```

**교체 지점**:
- BAD 쪽: 한 줄 대사 (큰 글씨 중앙)
- GOOD 쪽: `.kv-list` 에 key-value 페어 4~5개

**변형**: GOOD 쪽에 코드 블록, 체크리스트 등도 넣을 수 있음. 높이는 `min-height: 420px` 로 맞춰 세로 정렬.

---

## 4. Level Bar

**사용처**: 5단계 스펙트럼(low→max, S~E 등급 등)에서 특정 지점을 강조.

**구조**:
```html
<div class="level-bar">
  <div class="level-track">
    <div class="level"><div class="lv-name">low</div></div>
    <div class="level"><div class="lv-name">medium</div></div>
    <div class="level"><div class="lv-name">high</div></div>
    <div class="level xhigh">
      <span class="new-tag">NEW</span>
      <div class="lv-name">xhigh</div>
    </div>
    <div class="level"><div class="lv-name">max</div></div>
  </div>
</div>
```

강조할 level 에 `.xhigh` 클래스 (오렌지 배경 + 오렌지 보더). `.new-tag` 는 신규 표시 배지(선택).

**아래에 `.points` 리스트**: `›` 마커 + 한 줄 포인트 2~3개. `<b>` 로 키워드 강조.

**교체 지점**:
- 5개 레벨 이름
- 강조 클래스 위치 (`.xhigh` 는 임의 리네이밍 가능, CSS 도 바꿔야 함)
- NEW 태그 유무
- `.points` 내 설명 문구

---

## 5. Progress + Controls

**사용처**: 수치 before/after 비교 + 해결책 3가지 제시.

**구조**: 상단 `.token-compare` (2개 row, 각 row 에 제목·배수·진행바) + 하단 `.controls` 3열 그리드.

**교체 지점**:
- `.token-label` — 비교 대상 이름
- `.token-multi` — 배수 표기 (`1.0×`, `최대 1.35×`)
- `.bar-fill` 의 width % (bad 는 100%, good 는 74% 등 상대 비율)
- `.controls` 의 3개 카드: `.num` (01/02/03), `.name` (해결책 이름), `.sub` (한 줄 설명)

**변형**: bar 를 3줄로 늘릴 수도 있지만 가독성 급락. 2줄 유지 권장.

---

## 6. Feature Cards

**사용처**: 2~3개 신기능/스펙을 대형 카드로 소개.

**구조**:
```html
<div class="feat-list">
  <div class="feat primary">
    <div class="head">
      <span class="tag">SLASH</span>
      <span class="cmd">/ultrareview</span>
    </div>
    <div class="desc">설명 한 줄</div>
    <div class="meta">· Pro / Max 사용자 3회 무료 제공</div>
  </div>
  <div class="feat">
    <div class="head">
      <span class="tag">MODE</span>
      <span class="name">Auto mode</span>
    </div>
    <!-- ... -->
  </div>
</div>
```

`.feat.primary` 는 액센트 배경으로 강조. 보통 첫 번째를 primary 로.

**교체 지점**:
- `.tag` — 카테고리 (SLASH / MODE / API / NEW 등)
- `.cmd` 또는 `.name` — 기능 이름 (모노스페이스 코드면 `.cmd`, 일반이면 `.name`)
- `.desc` — 기능 설명
- `.meta` — 부가 정보 (초록색, 가용성·조건 등)

---

## 7. Benchmark Grid

**사용처**: 수치·지표를 기관별 또는 항목별로 나열. 2×2 그리드가 기본.

**구조**:
```html
<div class="grid">
  <div class="cell accent-cell">
    <div class="org">Cursor</div>
    <div>
      <div class="big">70%</div>
      <div class="vs">vs Opus 4.6 — 58%</div>
    </div>
    <div class="desc">CursorBench 통과율</div>
  </div>
  <!-- 3개 더 -->
</div>
```

`.accent-cell` 은 중요 지표(상위 2개 등) 강조용 오렌지 배경.

**교체 지점**:
- `.org` — 출처 기관 (대문자 letter-spacing)
- `.big` — 주요 수치 (76px, 오렌지, tnum)
- `.vs` — 비교 맥락
- `.desc` — 지표 설명

**변형**: 1×3 (가로 3개), 2×3 (6개) 도 가능. 6개 이상은 글자 크기 축소 불가피.

---

## 8. CTA Centered

**사용처**: 마지막 장. 팔로우 유도 + 강의/제품 링크.

**구조**: 모든 요소 중앙정렬. 일반 카드와 달리 eyebrow, bottom-banner 없음.

```html
<section class="cta-body">
  <h2 class="cta-title">
    <span class="accent">핵심 메시지,</span><br>
    놓치지 마세요
  </h2>
  <p class="cta-sub">한 줄 설명<br>또는 두 줄</p>
  <a class="follow-btn">짐코딩 팔로우</a>
  <div class="course-banner">강의명 · 프로모션 문구</div>
</section>
```

**교체 지점**:
- `.cta-title` — 메인 카피 (한 단어 `.accent` 강조 필수)
- `.cta-sub` — 2줄 이내 설명
- `.follow-btn` 텍스트 — 보통 "짐코딩 팔로우" 고정
- `.course-banner` — 강의명 + 할인/신규 문구

**변형**: 버튼 링크 URL 은 인쇄물이라 의미 없음(PNG 에 URL 안 담김). 텍스트만 관리.

---

## 패턴 조합 예시 (8장 시리즈 템플릿)

1. Cover — 주제 공개
2. Hook — 문제 제기 (3가지 이유)
3. Tip 01 — Compare (BAD/GOOD)
4. Tip 02 — Level Bar 또는 Feature Cards
5. Tip 03 — Progress + Controls
6. Tip 04 — Feature Cards
7. Numbers — Benchmark Grid
8. CTA

총 장수는 6~10장 사이가 적정. 너무 적으면 밀도 부족, 너무 많으면 스와이프 이탈.
