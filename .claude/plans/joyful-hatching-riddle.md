# Session Report 생성 계획

## 컨텍스트
사용자가 `/session-report:session-report` 스킬을 실행하여 Claude Code 사용 내역에 대한 HTML 리포트를 생성하고자 합니다. 이 리포트는 최근 세션 데이터(토큰 사용량, 캐시 히트율, 서브에이전트 활용도 등)를 분석하여 시각화된 형태로 제공합니다.

## 실행 계획

1. **데이터 분석 및 추출**
   - `analyze-sessions.mjs` 스크립트를 실행하여 최근 7일간의 세션 데이터를 JSON 형식으로 추출합니다.
   - 명령: `node <skill-dir>/analyze-sessions.mjs --json --since 7d > /tmp/session-report.json`

2. **리포트 템플릿 준비**
   - 제공된 `template.html` 파일을 현재 작업 디렉토리로 복사하여 날짜 기반의 파일명을 부여합니다.
   - 파일명 형식: `session-report-YYYYMMDD-HHMM.html`

3. **데이터 주입 및 리포트 완성**
   - `Edit` 도구를 사용하여 HTML 파일의 특정 영역을 수정합니다:
     - `<script id="report-data" type="application/json">` 태그 내부에 추출한 JSON 데이터를 삽입합니다.
     - `<!-- AGENT: anomalies -->` 블록에 JSON 데이터를 분석하여 발견한 특이사항(이상 징후) 3~5개를 HTML 형식으로 작성합니다. (예: 특정 프로젝트의 과도한 토큰 소비, 낮은 캐시 히트율 등)
     - `<!-- AGENT: optimizations -->` 블록에 데이터 기반의 최적화 제안 1~4개를 작성합니다.

4. **결과 보고**
   - 최종적으로 생성된 HTML 파일의 절대 경로를 사용자에게 안내합니다.

## 중요 파일
- **분석 스크립트**: `C:\Users\limjangmook\.claude\plugins\cache\claude-plugins-official\session-report\c447c3207a42\skills\session-report\analyze-sessions.mjs`
- **템플릿 파일**: `C:\Users\limjangmook\.claude\plugins\cache\claude-plugins-official\session-report\c447c3207a42\skills\session-report\template.html`

## 검증 방법
- 생성된 HTML 파일이 존재하는지 확인합니다.
- HTML 파일 내에 JSON 데이터가 올바르게 삽입되었는지, 그리고 분석 결과(anomalies, optimizations)가 텍스트로 포함되어 있는지 확인합니다.
