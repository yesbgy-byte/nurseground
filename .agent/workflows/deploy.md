# Vercel 배포 워크플로우

## 브랜치 전략
- `develop`: 테스트 환경 (Preview URL)
- `main`: 프로덕션 환경 (공식 URL)

## 일반적인 작업 흐름

### 1. 새로운 기능 개발 시작
```bash
# develop 브랜치로 전환
git checkout develop

# 최신 상태로 업데이트
git pull origin develop
```

### 2. 코드 수정 및 테스트
```bash
# 파일 수정 후
git add .
git commit -m "feat: 새로운 기능 추가"
```

### 3. 테스트 환경에 배포
```bash
# develop 브랜치에 푸시
git push origin develop
```
→ Vercel이 자동으로 **Preview URL** 생성 (예: `https://nurseground-git-develop-xxx.vercel.app`)
→ 이 URL로 팀원들과 테스트

### 4. 테스트 완료 후 프로덕션 배포
```bash
# main 브랜치로 전환
git checkout main

# develop 브랜치 내용을 main으로 병합
git merge develop

# 프로덕션에 배포
git push origin main
```
→ Vercel이 자동으로 **프로덕션 URL** 업데이트 (예: `https://nurseground.vercel.app`)

## 빠른 명령어 (Alias)

### 테스트 배포
```bash
git add . && git commit -m "test: 변경사항 테스트" && git push origin develop
```

### 프로덕션 배포
```bash
git checkout main && git merge develop && git push origin main && git checkout develop
```

## 주의사항
- 항상 `develop` 브랜치에서 작업하세요
- `main` 브랜치는 테스트가 완료된 코드만 병합하세요
- 긴급 수정이 필요한 경우에만 `main`에서 직접 작업하세요

## Vercel 설정 확인
Vercel 대시보드에서:
1. Project Settings → Git
2. Production Branch: `main`으로 설정되어 있는지 확인
3. `develop` 브랜치는 자동으로 Preview 배포됨
