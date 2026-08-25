---
name: git-commit
description: 현재 저장소의 변경 내용(git diff)을 분석해서 적절한 커밋 메시지와 함께 git 커밋을 생성합니다. 사용자가 "커밋해줘", "커밋 만들어줘", "변경사항 커밋", "commit this", "commit these changes" 등으로 요청하거나 코드를 수정한 뒤 저장하고 싶어할 때 이 스킬을 사용하세요. "커밋"이라는 단어를 직접 말하지 않아도, 방금 한 작업을 정리해서 기록으로 남기고 싶어하는 모든 상황에서 이 스킬을 고려하세요.
---

# Git Commit

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
   - untracked 파일은 사용자가 포함하라고 명시하지 않는 한 임의로 추가하지 않는다 — 실수로 커밋되면 안 되는 파일(로그, `.env`, 캐시 등)일 수 있다.

3. **diff 분석**
   - 파일명만 보고 추측하지 말고 실제 diff 내용을 읽는다.
   - 변경의 주된 목적(기능 추가, 버그 수정, 리팩토링, 문서, 설정 변경 등)을 파악한다.
   - 서로 관련 없는 변경이 섞여 있으면, 하나의 커밋으로 억지로 합치기보다 나눠서 커밋할 것을 제안한다.

4. **커밋 메시지 작성**
   - 저장소에 이미 컨벤션이 있으면(`CONTRIBUTING.md`, commitlint 설정, 기존 커밋 로그의 패턴 등) 그걸 따른다.
   - 없으면 Conventional Commits 형식을 기본으로 사용한다: `<type>(<scope>): <summary>`
     - type 예시: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `style`
   - 첫 줄(summary)은 명령형, 72자 이내, 마침표 없이 작성한다.
   - 여러 파일에 걸친 변경이거나 "왜" 바꿨는지 설명이 필요하면 본문에 bullet point를 추가한다.
   - AI가 작성했다는 문구(예: "Generated with Claude")는 커밋 메시지에 넣지 않는다.

5. **커밋 생성 및 확인**
   - `git commit -m "<summary>" -m "<body>"`를 실행한다(본문이 길면 heredoc 사용).
   - `git log -1`로 결과를 보여주고 사용자에게 확인시킨다.

6. **push는 하지 않는다** — 사용자가 명시적으로 요청하지 않는 한 로컬 커밋까지만 진행한다.

## 예시

**변경 내용:** `auth.py`에 JWT 토큰 검증 로직 추가, `requirements.txt`에 `pyjwt` 추가

**커밋 메시지:**
```
feat(auth): add JWT token validation

- verify token signature and expiry in auth.py
- add pyjwt dependency
```