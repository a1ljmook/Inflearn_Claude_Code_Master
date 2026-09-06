# claude-nextjs-starters 전체 코드 리뷰 계획 (전용 에이전트 활용)

## 컨텍스트
사용자가 `claude-nextjs-starters` 폴더 내의 모든 코드를 대상으로 전문적인 리뷰를 요청했습니다. 이제 시스템에 정식 등록된 `code-reviewer` 서브에이전트를 사용하여 고품질의 코드 진단을 수행합니다.

## 대상 범위
- **경로**: `C:\Users\a1ljm\Desktop\ANSWER_26\Inflearn_Claude_Code_Master\claude-nextjs-starters`
- **주요 분석 대상**: `/app`, `/components`, `/lib`, `/types`, `/schemas` 및 주요 설정 파일.

## 리뷰 전략
정식 `code-reviewer` 에이전트를 호출하여 다음의 핵심 원칙에 따라 리뷰를 수행합니다.

1. **정확성 및 안정성**: 논리적 오류, 엣지 케이스, 런타임 에러 가능성 식별.
2. **유지보수성 및 가독성**: 프로젝트 스타일 가이드(변수명 영어, 주석 한국어, PEP8) 준수 및 관심사 분리 평가.
3. **효율성 및 성능**: Next.js App Router 최적화 및 알고리즘 효율성 확인.
4. **단순화 및 설계**: 중복 제거 및 적절한 디자인 패턴 적용 제안.

## 작업 단계
1. `Agent` 도구를 통해 `subagent_type: "code-reviewer"`를 호출.
2. 리뷰 대상 경로와 전체 리뷰 요청 사항을 전달.
3. 에이전트가 생성한 Summary, Findings, Conclusion 보고서를 사용자에게 제공.

## 검증 방법
- `code-reviewer` 에이전트가 전용 지침에 따라 구체적인 파일 위치와 함께 실용적인 개선안을 제시했는지 확인.
- 스타일 가이드 준수 여부가 정확하게 판별되었는지 검토.
