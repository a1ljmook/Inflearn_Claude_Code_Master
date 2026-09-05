---
name: git-commit
description: 현재 저장소의 변경 내용(git diff)을 분석해서 적절한 커밋 메시지와 함께 git 커밋을 생성합니다. 사용자가 "커밋해줘", "커밋 만들어줘", "변경사항 커밋", "commit this", "commit these changes" 등으로 요청하거나 코드를 수정한 뒤 저장하고 싶어할 때 이 스킬을 사용하세요. "커밋"이라는 단어를 직접 말하지 않아도, 방금 한 작업을 정리해서 기록으로 남기고 싶어하는 모든 상황에서 이 스킬을 고려하세요.
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git add *) Bash(git commit *) Bash(git log *) Bash(git branch *)
---

# Git Commit

## Git 규칙
!`cat ${CLAUDE_PROJECT_DIR}/../.claude/rules/git-rules.md`

## 왜 이 과정이 필요한가
diff를 제대로 읽지 않고 기계적으로 메시지를 쓰면 "update files", "fix stuff" 같은 의미 없는 커밋이 남는다. 목표는 나중에 `git log`만 봐도 무엇이 왜 바뀌었는지 알 수 있는 커밋을 만드는 것이다.

## 절차

1. **현재 상태 파악**
   - `git status`로 staged / unstaged / untracked 파일을 확인한다.
   - `git diff`(unstaged)와 `git diff --staged`(staged)로 실제 변경 내용을 확인한다.
   - 변경사항이 없으면 사용자에게 알리고 중단한다.

2. **스테이징 결정**
   - 사용자가 특정 파일을 지목했으면 그 파일만 `git add`한다.
   - 그 외에는 이미 추적 중인 파일의 변경사항을 `git add -u`로 스테이징한다.
   - untracked 파일은 사용자가 포함하라고 명시하지 않는 한 임의로 추가하지 않는다 — `.env`, 로그, 캐시 등 실수로 커밋되면 안 되는 파일일 수 있다.

3. **diff 분석**
   - 파일명만 보고 추측하지 말고 실제 diff 내용을 읽는다.
   - 변경의 주된 목적(기능 추가, 버그 수정, 리팩토링, 문서, 설정 변경 등)을 파악한다.
   - 서로 관련 없는 변경이 섞여 있으면, 위 Git 규칙(작은 단위 분리)에 따라 나눠서 커밋할 것을 제안한다.

4. **커밋 메시지 작성** — 위 Git 규칙을 최우선으로 따른다
   - 한글로, 작은 단위로 작성한다.
   - type은 Git 규칙에 정의된 목록을 쓴다: `docs`, `feat`, `perf`, `fix`, `style`, `test`, `build`, `chore`
   - 형식: `<type>: <summary>`
   - summary는 명령형, 간결하게, 마침표 없이 작성한다.
   - 여러 파일에 걸친 변경이거나 "왜" 바꿨는지 설명이 필요하면 본문에 bullet point를 추가한다.
   - AI가 작성했다는 문구(예: "Generated with Claude")는 넣지 않는다.

5. **브랜치명 확인**
   - `git branch --show-current`로 현재 브랜치가 Git 규칙의 `type/설명` 형식에 맞는지 확인한다.
   - 맞지 않으면 사용자에게 알린다 (임의로 브랜치를 만들거나 바꾸지 않는다).

6. **커밋 생성 및 확인**
   - `git commit -m "<summary>" -m "<body>"`를 실행한다 (본문이 길면 heredoc 사용).
   - `git log -1`로 결과를 보여주고 사용자에게 확인시킨다.

7. **push는 하지 않는다** — 사용자가 명시적으로 요청하지 않는 한 로컬 커밋까지만 진행한다.

## 참고: 현재 변경사항 스냅샷
- Status: !`git status --short`
- Diff: !`git diff HEAD`

## 예시

**변경 내용:** `auth.py`에 JWT 토큰 검증 로직 추가, `requirements.txt`에 `pyjwt` 추가

**커밋 메시지:**
```
feat: JWT 토큰 검증 로직 추가

- auth.py에 토큰 서명 및 만료 검증 로직 추가
- pyjwt 의존성 추가
```