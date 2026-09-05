---
name: git-commit
description: 현재 변경사항을 분석해 논리적 단위로 나누고 프로젝트 규칙에 맞는 커밋 메시지로 커밋합니다. "커밋해줘", "변경사항 커밋" 등으로 요청 시 사용.
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git add *) Bash(git commit *)
---

## Git 규칙
!`cat ${CLAUDE_PROJECT_DIR}/.claude/rules/git-rules.md`

## 현재 상태
- Status: !`git status --short`
- Diff: !`git diff HEAD`

## 작업 순서
1. 위 diff를 분석해 서로 다른 목적/영역의 변경사항이 섞여 있는지 확인한다.
2. 섞여 있으면 `git add -p` 등으로 논리적 단위별로 나눠서 여러 번 커밋한다.
3. 각 커밋 메시지는 위 Git 규칙(한글, 작은 단위)을 따른다.
4. 커밋 전 브랜치명이 규칙(`type/설명`)에 맞는지 확인하고, 아니면 사용자에게 알린다.
5. `git add` 후 `git commit -m "..."` 실행.