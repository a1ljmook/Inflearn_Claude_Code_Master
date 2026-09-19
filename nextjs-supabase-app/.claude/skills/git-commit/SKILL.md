---
name: git-commit
description: 현재 저장소의 변경 내용(git diff)을 분석해서 적절한 커밋 메시지와 함께 git 커밋을 생성합니다. "커밋해줘", "변경사항 커밋" 등으로 요청하거나 코드 수정 후 정리하고 싶어할 때 사용하세요. "커밋"이라는 단어가 없어도 방금 작업을 기록으로 남기고 싶어하는 상황이면 고려하세요.
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git add *) Bash(git commit *) Bash(git log *) Bash(git branch *)
---

# Git Commit

## Git 규칙
@${CLAUDE_PROJECT_DIR}/../.claude/rules/git-rules.md

## 절차
1. `git status`, `git diff`(unstaged), `git diff --staged`로 변경사항 파악. 없으면 중단.
2. 지목된 파일만 `git add`, 없으면 `git add -u`. untracked 파일은 명시 없이 추가 금지.
3. diff 읽고 목적 파악. 서로 다른 변경이 섞이면 위 규칙(작은 단위)대로 분리 커밋 제안.
4. 커밋 메시지: 위 Git 규칙(한글, `docs/feat/perf/fix/style/test/build/chore` type) 우선. 형식 `<type>: <summary>`, 명령형·간결하게. AI 작성 문구는 넣지 않음.
5. `git branch --show-current`로 브랜치명이 `type/설명` 형식인지 확인, 아니면 알림만 하고 임의 변경 안 함.
6. `git commit -m "<summary>" -m "<body>"` 실행 후 `git log -1`로 확인.
7. push는 요청 없으면 하지 않음.