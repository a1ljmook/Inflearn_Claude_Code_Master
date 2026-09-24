# Claude Opus 4.7 공개 — 원문 자료 정리 (한국어)

> **원문**: [Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) — Anthropic, 2026년 4월 16일
> **자료 형태**: 원문 구조·순서를 유지한 **상세 요약 + 핵심 인용구**. 카드뉴스 제작용 소스 노트.
> 긴 문장은 초보자 눈높이로 풀었고, 숫자·공식 명칭·짧은 인용은 원문을 그대로 가져왔습니다.

---

## 0. 헤더 정보

- 카테고리: **Product Announcements** (제품 공지)
- 제목: **Introducing Claude Opus 4.7** ("클로드 오푸스 4.7을 소개합니다")
- 발표일: **Apr 16, 2026** (2026년 4월 16일)

---

## 1. 오프닝 — 이번 모델이 어떤 모델인가

**요약**
- Anthropic의 최신 모델 **Claude Opus 4.7**이 오늘부터 일반 공개(GA) 됐다.
- 핵심 메시지: **"Opus 4.6 대비, 특히 고난도 소프트웨어 엔지니어링에서 확실히 좋아졌다"**. 가장 어려운 과제에서 개선 폭이 가장 크다.
- 사용자들은 "예전 같으면 사람이 붙어서 감독해야 했던 가장 어려운 코딩 업무도 Opus 4.7에 맡길 수 있다"고 보고.
- Opus 4.7은 다음을 잘한다:
  - 복잡하고 **오래 걸리는 작업**을 꾸준하고 엄격하게 처리
  - **지시(프롬프트) 를 정확히** 지킴
  - 결과를 보고하기 전에 **스스로 자기 출력물을 검증**하는 방법까지 고안

**핵심 인용**
> "Opus 4.7 is a notable improvement on Opus 4.6 in advanced software engineering, with particular gains on the most difficult tasks."

**비전·업무 품질**
- 이미지 처리 능력(비전) 이 크게 향상 — 더 높은 해상도의 이미지도 "볼 수" 있다.
- 전문 업무(인터페이스, 슬라이드, 문서 작성) 에서 더 **감각 있고 창의적**인 결과물.
- 단, 가장 강력한 모델인 **Claude Mythos Preview** 보다는 전반적 능력이 낮음. 그래도 여러 벤치마크에서 Opus 4.6보다는 좋은 점수.

---

## 2. 사이버 보안 세이프가드 & Cyber Verification Program

**배경**
- 지난주 Anthropic은 **Project Glasswing** 을 발표했다 — AI 모델이 사이버 보안 영역에서 가져오는 **위험과 이점**을 함께 조명하는 프로젝트.
- 당시 약속: Claude Mythos Preview 의 공개는 **제한적으로** 유지하고, 새 사이버 보안 세이프가드(안전장치)는 **능력이 덜한 모델에서 먼저 테스트**한다.

**Opus 4.7의 위치**
- Opus 4.7 이 그 "첫 번째 대상 모델".
- 사이버 공격 능력은 Mythos Preview 만큼은 아니며, 학습 과정에서 **이 능력을 차등적으로 낮추는 실험**도 진행.
- 릴리스와 함께 **금지/고위험 사이버 보안 용도로 판단되는 요청을 자동으로 감지·차단**하는 세이프가드를 적용.
- 이 세이프가드를 실전 배포하며 배우는 것이, 추후 Mythos급 모델의 **광범위한 공개**라는 최종 목표로 가는 토대.

**Cyber Verification Program**
- 취약점 연구, 모의 침투(penetration testing), 레드팀 같은 **합법적 보안 업무** 를 위해 Opus 4.7을 쓰고 싶은 보안 전문가 대상 → 새로 만든 **Cyber Verification Program** 에 가입 가능.

---

## 3. 제공 경로 & 가격

- **제공 채널**: Claude 제품 전체, Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry.
- **API 모델 ID**: `claude-opus-4-7`
- **가격** (Opus 4.6과 동일):
  - 입력: **$5 / 1M tokens**
  - 출력: **$25 / 1M tokens**

---

## 4. 얼리 액세스 테스터 피드백 (총 28개 인용)

> 원문은 "Testing Claude Opus 4.7" 섹션에 외부 파트너/기업의 평가를 순서대로 나열. 카드뉴스용으로 **회사 + 직책 + 한 줄 요지 + 핵심 숫자/표현** 중심으로 정리. 모두 긍정 피드백.

1. **Clarence Huang, VP of Technology (핀테크)**
   - 기획 단계에서 **자기 논리 결함까지 잡아내고**, 실행도 빨라짐. 속도 + 정밀도 조합이 "game-changing".

2. **Igor Ostrovsky, Co-Founder & CTO**
   - 현업 비동기 워크플로(자동화, CI/CD, 장시간 작업)에서 두드러짐. 사용자에게 동조만 하지 않고 **의견 있는(opinionated) 관점**을 제시.

3. **Caitlin Colgrove, Co-Founder & CTO (Hex)**
   - "Hex가 평가한 모델 중 최강." 데이터가 없을 때 **그럴듯한 오답 대신 '없다'고 제대로 말함**. 인용: **"low-effort Opus 4.7 is roughly equivalent to medium-effort Opus 4.6."**

4. **Mario Rodriguez, Chief Product Officer**
   - 자체 **93개 코딩 벤치마크**에서 Opus 4.6 대비 **해결률 +13%**. Opus 4.6·Sonnet 4.6이 모두 풀지 못한 4개 과제도 해결.

5. **Michal Mucha, Lead AI Engineer, Applied AI**
   - 리서치 에이전트 벤치 6개 모듈 종합 **0.715 공동 1위**. 대표 모듈 General Finance: **0.813 (Opus 4.6은 0.767)**. 연역 논리도 탄탄.

6. **Jeff Wang, CEO**
   - "엔지니어가 에이전트 1:1 운영에서 **병렬 관리**로 옮겨가는 지금 딱 맞는 frontier 역량."

7. **Sanj Ahilan, Chief Research Officer (Solve Intelligence)**
   - 멀티모달 이해가 크게 향상 — **화학 구조 판독, 복잡한 기술 도면 해석**까지. 고해상도 지원이 생명과학 특허 워크플로 툴링에 기여.

8. **Scott Wu, CEO (Devin)**
   - **몇 시간에 걸친 장기 자율 작업**에서도 일관성 유지. 어려운 문제에서 포기하지 않고 밀고 나감. "예전엔 안정적으로 돌릴 수 없던 종류의 심층 조사 업무를 열어줌."

9. **Michele Catasta, President (Replit)**
   - 같은 품질을 **더 낮은 비용**으로. 로그/트레이스 분석, 버그 탐지·수정에서 더 효율적·정확. 기술 토론 중에 **되려 반문해주는 점(push back)**이 좋음 — "마치 더 나은 동료 같다."

10. **Niko Grupen, Head of Applied Research (Harvey)**
    - 법률 벤치마크 **BigLaw Bench**에서 **high effort 90.9%**. 리뷰 테이블 캘리브레이션 개선, 모호한 문서 편집 과제 처리 영리. "assignment 조항 vs. change-of-control 조항" 같은 전통적으로 어려운 구분을 정확히 해냄.

11. **Michael Truell, Co-Founder & CEO (Cursor)**
    - **CursorBench**: Opus 4.7 **70% 돌파** vs. Opus 4.6 **58%**. 자율성과 창의적 추론이 인상적.

12. **Sarah Sachs, AI Lead (Notion)**
    - 복잡한 다단계 워크플로에서 Opus 4.6 대비 **+14%**, **토큰은 더 적게**, 툴 에러는 **1/3** 수준. **암묵적 요구(implicit-need)** 테스트를 통과한 최초 모델. "Notion Agent를 진짜 팀원처럼 느끼게 만드는 신뢰성 점프."

13. **Adithya Ramanathan, Head of Applied Research (Hebbia)**
    - 핵심 오케스트레이터 에이전트에서 툴 호출·기획 정확도 **두 자릿수% 상승**. 검색·슬라이드 생성·문서 작성 워크플로에서 의사결정 개선 가능성.

14. **Yusuke Kaji, General Manager, AI for Business (Rakuten)**
    - **Rakuten-SWE-Bench** 에서 Opus 4.6 대비 **프로덕션 과제 해결 3배**. 코드 품질·테스트 품질 두 자릿수% 개선.

15. **David Loker, VP of AI (CodeRabbit)**
    - 코드 리뷰 워크로드 기준 "테스트한 모델 중 가장 날카로움". **Recall +10%+**, precision은 유지. 하네스 기준으로 **GPT-5.4 xhigh 보다도 조금 빠름**. 런치와 함께 가장 무거운 리뷰 작업에 투입 예정.

16. **Kay Zhu, Co-Founder & CTO (Genspark)**
    - 프로덕션 3대 차별화 포인트 **Loop resistance / consistency / graceful error recovery** 모두 합격. Loop resistance 가 가장 중요 — "18개 쿼리당 1개 꼴로 무한 루프에 빠지는 모델은 compute 낭비 + 사용자 차단". **Quality-per-tool-call 비율 측정 최고치**.

17. **Zach Lloyd, Founder & CEO (Warp)**
    - **Terminal Bench**에서 이전 Claude들이 못 푼 과제 통과. Opus 4.6이 못 깬 까다로운 **concurrency(동시성) 버그** 해결. "그게 우리에겐 결정적 신호."

18. **Aj Orbach, Co-Founder & CEO**
    - **"대시보드와 데이터 중심 인터페이스를 만드는 데 세계 최고 모델."** 디자인 감각이 놀라움. "지금 내 데일리 드라이버(기본 모델)."

19. **Ben Chan, Chief AI Officer (Quantium)**
    - 자체 벤치에서 테스트한 주요 모델 중 최강. 추론 깊이, 구조화된 문제 정의, 복잡한 기술 작업에서 가장 큰 상승. 수정 횟수 감소·이터레이션 빨라짐.

20. **Ben Lafferty, Senior Staff Engineer**
    - 의미 없는 **wrapper 함수나 fallback 비계(scaffolding)**를 안 만듦. 중간에 자기 코드도 스스로 고침. "Sonnet 3.7 → Claude 4 시리즈 이후 가장 깨끗한 점프."

21. **Oege de Moor, CEO (XBOW)**
    - 자율 모의침투 컴퓨터 사용 업무에서 **visual-acuity 벤치 98.5%** (Opus 4.6은 54.5%). "가장 큰 Opus 고통 포인트가 사실상 사라졌다." 그동안 못 쓰던 영역을 열어줌.

22. **Joe Haddad, Distinguished Software Engineer (Vercel)**
    - 회귀(regression) 없이 단단한 업그레이드. 원샷 코딩에 탁월. 이전 Claude에서 못 본 새 행동: **시스템 코드에 착수하기 전에 스스로 proof(증명)를 돌려봄**.

23. **Leo Tchourakov, Member of Technical Staff (Factory Droids)**
    - 작업 성공률 **+10–15%**, 툴 에러 감소, 검증 단계도 끝까지 수행. 중간에 멈추지 않고 끝까지 밀고 감.

24. **Sean Ward, CEO & Co-Founder**
    - **Rust로 작성한 텍스트-투-스피치 엔진**을 신경망 모델·SIMD 커널·브라우저 데모까지 **자율적으로 처음부터 구현**. 자기 출력을 음성 인식기에 넣어 Python 레퍼런스와 일치하는지 **스스로 검증**. 코드베이스는 공개.

25. **Itamar Friedman, Co-Founder & CEO (Qodo)**
    - **TBench 과제 3개** 신규 통과. 이전 최고 모델이 놓친 **race condition(경쟁 상태)** 도 해결. 실사용 코드 리뷰 벤치에서 top-tier precision.

26. **Hanlin Tang, CTO of Neural Networks (Databricks)**
    - **OfficeQA Pro** 기준 문서 추론이 크게 개선 — Opus 4.6 대비 **에러 21% 감소**. "기업용 문서 분석에 가장 잘 맞는 Claude 모델."

27. **Austin Ray, Software Engineer (Ramp)**
    - **에이전트 팀 워크플로**에서 역할 충실도·지시 준수·협업·복잡 추론 모두 상승. 단계별 가이드가 훨씬 덜 필요 → 내부 에이전트 워크플로 확장 용이.

28. **Eric Simons, CEO & Founder (Bolt)**
    - 장시간 앱 빌딩 작업에서 Opus 4.6 대비 **최대 +10%**. 에이전트형 모델 특유의 회귀 문제도 없음. "한 세션에서 사용자가 만들 수 있는 결과물의 천장을 더 올렸다."

---

## 5. 초기 테스트에서 본 하이라이트 (Anthropic 자체 관찰)

### 5-1. Instruction following (지시 준수)
- Opus 4.7은 지시를 **훨씬 더 정확히 따른다**.
- 역설적 주의점: 예전 모델 시절 프롬프트는 **예상과 다른 결과**를 낼 수 있음 — 과거엔 느슨히 해석되거나 일부가 무시됐던 지시를 Opus 4.7은 **문자 그대로** 처리.
- → 사용자는 프롬프트와 하네스를 **다시 튜닝**해야 함.

### 5-2. Improved multimodal support (멀티모달 강화)
- 고해상도 이미지 비전 개선.
- 이미지 입력 한계: **긴 변 2,576픽셀(~3.75 메가픽셀)** — 이전 Claude 모델의 **3배 이상**.
- 활용 예: 빽빽한 스크린샷을 읽는 컴퓨터 사용 에이전트, 복잡한 다이어그램에서 데이터 추출, 픽셀 단위 정확도가 필요한 작업.

### 5-3. Real-world work (실무 업무)
- Finance Agent 평가에서 SOTA(최고 수준) 점수.
- 내부 테스트상 Opus 4.6보다 **유능한 금융 분석가** 역할 — 더 엄밀한 분석·모델링, 더 프로페셔널한 발표자료, 작업 간 통합도 탄탄.
- 외부 평가 **GDPval-AA**(금융·법률 등 경제적으로 가치 있는 지식 업무) 에서도 SOTA.

### 5-4. Memory (메모리)
- **파일 시스템 기반 메모리** 활용력 향상.
- 여러 세션에 걸친 긴 작업에서 **중요한 메모를 기억**, 새 과제에서는 **미리 떠먹여 줘야 할 컨텍스트가 줄어듦**.

### 5-5. 차트로 공개한 평가 영역
원문은 다음 도메인의 평가 차트를 게시 (카드뉴스 제작 시 각 도메인별로 슬라이드 분할 가능):
- Office tasks
- Vision
- Document reasoning
- Long-context reasoning
- Biology
- Long-term coherence
- Coding

---

## 6. Safety and alignment (안전성·정렬)

- 전반적으로 Opus 4.7은 **Opus 4.6과 비슷한 안전 프로파일**.
- 기만(deception), 아첨(sycophancy), 악용 협조 같은 **우려 행동은 낮은 비율**.
- **향상된 지표**: 정직성(honesty), 악성 **프롬프트 인젝션 공격 저항력**.
- **살짝 약해진 지표**: 규제 약물 관련 피해 감소 조언을 **과하게 자세히 제공**하는 경향.
- Anthropic의 정렬 평가 총평(인용):
  > "largely well-aligned and trustworthy, though not fully ideal in its behavior"
- 참고: **Mythos Preview** 가 Anthropic이 학습시킨 모델 중 **가장 잘 정렬된 모델**로 평가됨.
- 자세한 평가는 **Claude Opus 4.7 System Card** 에 수록.

**부가 차트 설명** (원문 캡션)
- 자동 행동 감사(automated behavioral audit) 기반 **전반적 오정렬 행동 점수** 차트.
- Opus 4.7 은 Opus 4.6·Sonnet 4.6 대비 소폭 개선. 다만 **오정렬 비율이 가장 낮은 모델은 여전히 Mythos Preview**.

---

## 7. 오늘 함께 출시되는 업데이트

원문 섹션명: **Also launching today**

### 7-1. 더 세밀한 Effort 제어
- 기존 high 와 max 사이에 새 단계 **xhigh ("extra high")** 추가.
- 어려운 문제에서 **추론 깊이 vs. 응답 지연**(latency) 트레이드오프를 더 섬세하게 조절 가능.
- **Claude Code**: 모든 플랜에서 기본 effort 를 **xhigh 로 상향**.
- 코딩·에이전트 용도 테스트 시 Anthropic 권장: **high 또는 xhigh** 로 시작.

### 7-2. Claude Platform (API) 업데이트
- 더 높은 해상도 이미지 지원.
- **Task budgets** 를 **public beta** 로 오픈 — 개발자가 Claude의 토큰 지출을 **작업 단위로 가이드**해, 긴 실행 중 업무 우선순위를 맞출 수 있게 함.

### 7-3. Claude Code 업데이트
- **`/ultrareview` 슬래시 명령어** 신규 — 코드 변경을 읽고 **숙련된 리뷰어가 잡을 만한 버그·설계 이슈를 전담으로 플래깅**하는 리뷰 세션을 만들어줌.
  - **Pro / Max 사용자에게 ultrareview 3회 무료 제공** (체험용).
- **Auto mode** 를 Max 사용자에게 확대.
  - Auto mode = Claude 가 사용자 대신 결정을 내리는 새 권한 옵션.
  - 결과: 더 긴 작업을 **중단 없이**, 그리고 "모든 권한 스킵"보다는 **덜 위험하게** 실행 가능.

---

## 8. Opus 4.6 → Opus 4.7 마이그레이션 노트

**핵심 메시지**: Opus 4.7은 Opus 4.6의 **직접적인 업그레이드**. 다만 **토큰 사용량**에 영향을 주는 변화 2개는 미리 계획 필요.

1. **업데이트된 토크나이저**
   - 텍스트 처리 방식이 좋아졌지만, **같은 입력이 더 많은 토큰**으로 매핑될 수 있음.
   - 증가 폭: 콘텐츠 유형에 따라 **약 1.0 ~ 1.35 배**.

2. **Effort 레벨이 높을수록 "더 많이 생각"**
   - 특히 에이전트 환경에서 **후반 턴에서 사고량이 증가**.
   - 어려운 문제의 신뢰도는 올라가지만, **출력 토큰 수도 늘어남**.

**토큰 사용 관리 방법 (사용자 제어 수단)**
- `effort` 파라미터 조정
- **Task budgets** 조정
- 프롬프트에서 더 **간결하게(be more concise)** 답하라고 지시

**Anthropic 내부 테스트 결과**
- 전체 effort 레벨에서 **내부 코딩 평가 기준 토큰 효율 개선** (차트로 공개).
- 단, 실제 환경별로 차이가 있을 수 있으므로 **자체 트래픽에서 직접 측정 권장**.
- 추가 팁은 Anthropic이 별도 공개한 **migration guide** 참조.

**차트 캡션 (원문 설명)**
- 차트는 각 effort 레벨별 **토큰 사용량 함수의 내부 에이전트형 코딩 평가 점수**.
- 단일 사용자 프롬프트에서 자율 작업하는 조건 → **대화형 코딩과는 토큰 사용량이 다를 수 있음**.
- effort 튜닝에 대한 더 자세한 안내는 migration guide 에 수록.

---

## 9. 카드뉴스 제작용 체크포인트 (편집 시 참고)

> 원문에 없는 내용 — 제작 보조용 메모. 필요 없으면 삭제하셔도 됩니다.

- **핵심 한 줄**: "Opus 4.6 대비 '가장 어려운 코딩 과제'에서 가장 크게 점프한 모델, 가격은 동일."
- **숫자 훅 후보**
  - 이미지 한계 **2,576px (~3.75MP)**, 이전 대비 **3배 이상**
  - Cursor: **70% vs 58%**
  - Rakuten: **프로덕션 과제 3배 해결**
  - XBOW visual-acuity: **98.5% vs 54.5%**
  - Notion: **+14% + 토큰 ↓ + 툴 에러 1/3**
  - Databricks: **문서 추론 에러 -21%**
  - 토크나이저 변화: **1.0–1.35×**
- **대조 훅**: Mythos Preview(최강·가장 잘 정렬) vs Opus 4.7(광범위 공개·사이버 세이프가드 테스트 대상 1호).
- **실무 훅**: xhigh effort, task budgets(API 베타), /ultrareview, auto mode(Max).
- **유튜브/인프런 연결 포인트**: 프롬프트 재튜닝 필요성, Claude Code 기본 effort xhigh 상향, 에이전트 병렬 운영.

---

## 10. 원문에서 직접 가져올 수 있는 짧은 영어 인용 모음 (검수용)

카드뉴스 슬라이드에 영어 원문 한 줄을 얹고 싶을 때 쓸 수 있는 **짧은 구절**들. 모두 원문 그대로.

- "notable improvement on Opus 4.6 in advanced software engineering, with particular gains on the most difficult tasks"
- "largely well-aligned and trustworthy, though not fully ideal in its behavior"
- "low-effort Opus 4.7 is roughly equivalent to medium-effort Opus 4.6" (Hex)
- "the best model in the world for building dashboards and data-rich interfaces" (Aj Orbach)
- "It really feels like a better coworker." (Replit)
- "the reliability jump that makes Notion Agent feel like a true teammate" (Notion)
- "Months of senior engineering, delivered autonomously." (Sean Ward)

---

*작성일: 2026-04-20 · 출처: Anthropic 공식 블로그 게시물 (2026-04-16). 카드뉴스 기획 용도로 원문을 한국어 요약·구조화한 내부 자료.*
