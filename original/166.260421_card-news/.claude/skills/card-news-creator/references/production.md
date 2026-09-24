# 제작 파이프라인

HTML 카드를 1080×1350 PNG 로 변환해 인스타그램 업로드용 이미지를 뽑는 과정입니다. 에피소드 단위로 진행합니다.

## 왜 로컬 HTTP 서버가 필요한가

Playwright(Chromium) 는 기본적으로 `file://` 로컬 파일 접근을 차단합니다. CDN 폰트(Pretendard), 로고 이미지, CSS 파일 등을 상대경로로 로드해야 하므로 HTTP 서버 경유가 강제됩니다.

## 전체 시퀀스

### 1. 서버 띄우기 (한 번만, card-news 루트에서)

```bash
cd /Users/gymcoding/Company/youtube/card-news
python3 -m http.server 7800
```

- **반드시 `card-news/` 루트에서 실행.** 서버가 시작되는 디렉토리가 HTTP 루트(`/`) 가 됨. 에피소드 URL 이 `http://localhost:7800/episodes/YYMMDD_주제/...` 형태로 노출됩니다.
- 포트 7800 은 프로젝트 관례. 다른 서비스와 충돌 시 바꿔도 OK.
- 백그라운드로 돌리거나 별도 터미널에서 실행. 카드 제작하는 동안 계속 떠있어야 함.

### 2. 에피소드 디렉토리로 이동 후 브라우저 1회 열기

```bash
cd episodes/260416_opus-4-7

playwright-cli open --browser=chrome
playwright-cli resize 1080 1350
```

- **에피소드 디렉토리로 CWD 를 옮기면** screenshot 경로가 `images/NN.png` 로 짧아집니다. 루트에 머물면 풀패스 `episodes/YYMMDD_주제/images/NN.png` 를 써야 함.
- **브라우저는 에피소드 전체에 대해 한 번만 띄웁니다.** 매 카드마다 `open` 하면 느리고 낭비.
- `resize 1080 1350` — 뷰포트를 카드 크기와 정확히 일치시킴. 한 픽셀이라도 다르면 스크롤바나 여백이 생겨 스크린샷이 어긋납니다.

### 3. 카드마다 goto + screenshot 반복

```bash
# URL 은 서버 루트 기준 풀경로, screenshot 은 CWD(에피소드 폴더) 기준
playwright-cli goto "http://localhost:7800/episodes/260416_opus-4-7/01-cover.html"
playwright-cli screenshot --filename=images/01-cover.png

playwright-cli goto "http://localhost:7800/episodes/260416_opus-4-7/02-hook.html"
playwright-cli screenshot --filename=images/02-hook.png

# ... 나머지 카드 반복
```

- URL: 서버 루트 기준 풀경로 (`/episodes/YYMMDD_주제/NN-slug.html`).
- `--filename`: playwright-cli 가 실행된 CWD(= 에피소드 폴더) 기준. `images/NN-slug.png` 면 에피소드 안 `images/` 로 저장됨.
- PNG 파일명은 HTML 파일명과 숫자·슬러그 일치 (`NN-slug.html` → `images/NN-slug.png`).

### 4. 브라우저 닫기

```bash
playwright-cli close
```

### 5. 서버 종료

`Ctrl+C` 또는 백그라운드 PID kill.

## 전체 원샷 스크립트 예시

에피소드 `260416_opus-4-7` 의 8장 세트를 한 번에 뽑기:

```bash
# 서버가 card-news/ 루트에서 이미 떠있다고 가정
cd /Users/gymcoding/Company/youtube/card-news/episodes/260416_opus-4-7

playwright-cli open --browser=chrome
playwright-cli resize 1080 1350

EPISODE=260416_opus-4-7
for slug in 01-cover 02-hook 03-tip-01-prompt 04-tip-02-effort \
            05-tip-03-token 06-tip-04-claude-code 07-benchmark 08-cta; do
  playwright-cli goto "http://localhost:7800/episodes/${EPISODE}/${slug}.html"
  playwright-cli screenshot --filename="images/${slug}.png"
done

playwright-cli close
```

새 에피소드를 뽑을 때 `EPISODE` 와 slug 리스트만 교체하면 됩니다.

## 스크린샷 후 검증 (필수)

생성된 PNG 를 반드시 **Read 툴로 열어 시각 점검**하세요. 코드가 맞아도 다음 같은 문제가 생길 수 있습니다:

- **폰트 미로드** — Pretendard CDN 이 느려서 기본 폰트로 렌더됨. 한글이 네모박스(tofu)로 보이면 바로 재촬영.
- **공통 자산 경로 실패** — `../../styles/card.css`, `../../logo.svg` 가 해결 안 되면 스타일/로고 깨짐. 에피소드 폴더가 루트 바로 아래 두 단계(`card-news/episodes/YYMMDD/`) 여야 `../../` 가 맞음.
- **텍스트 오버플로** — 한글 줄바꿈이 예상보다 긴 경우. 타이틀이 잘리거나 bottom-banner 와 겹침.
- **컷오프** — 하단 요소가 1350px 밖으로 밀려 잘림.
- **정렬 어긋남** — flex/grid 간격이 어색한지 확인.
- **색 대비** — 오렌지가 예상보다 어둡게 보이면 토큰 투명도 조정.

문제 발견 시 HTML 수정 후 해당 카드만 다시 `goto + screenshot`.

## 주의사항 정리

- **서버는 card-news/ 루트에서.** 에피소드 하위 경로 접근 가능해야 함.
- **뷰포트는 반드시 1080×1350.** HTML `body` 크기와 일치.
- **HTTP 서버 경유 필수.** `file://` 로 띄우면 폰트·이미지 로드 실패.
- **브라우저는 1회만 열기.** goto 만 반복.
- **스크린샷 후 Read 로 확인.** 코드 맞아도 렌더 실패 가능.
- **PNG 파일명은 HTML 파일명과 일치.** 파이프라인·순서 관리 편의.
