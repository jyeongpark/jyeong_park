## Jyeong Park Monorepo

개인 포트폴리오와 이력서를 운영하는 Turborepo 기반 모노레포입니다. Next.js 앱 두 개와 공용 UI/테마/린트/TS 설정 패키지를 포함합니다.

### 프로젝트 구조

- `apps/portfolio`: 포트폴리오 Next.js 앱
- `apps/resume`: 이력서 Next.js 앱 (콘텐츠 JSON 분리, 섹션 컴포넌트 기반)
- `packages/ui`: 공용 React UI 컴포넌트 라이브러리
- `packages/theme`: 디자인 토큰/테마 Provider
- `packages/eslint-config`: 공용 ESLint 설정
- `packages/typescript-config`: 공용 TypeScript 설정

### 빠른 시작

```bash
# 루트에서 의존성 설치
npm install

# 전체 개발 서버 실행
npm run dev

# 특정 앱만 실행
npx turbo run dev --filter=apps/resume
npx turbo run dev --filter=apps/portfolio
```

### 앱 개별 실행

```bash
# Resume (Next.js)
cd apps/resume
npm run dev

# Portfolio (Next.js)
cd apps/portfolio
npm run dev
```

### 빌드/배포

```bash
# 전체 빌드
npm run build

# 특정 앱만 빌드
npx turbo run build --filter=apps/resume
```

### 테스트

- packages/ui storybook test
- packages/ui cypress component test

설정 후 실행 예시:

```bash
# 스토리북 테스트
cd packages/ui
npm run storybook

# ct
cd packages/ui
npm run cy:open
```

### 기술 스택

- Next.js(App Router), React 19, TypeScript
- Emotion(스타일), 디자인 토큰/테마(`@repo/theme`)
- 공용 UI 컴포넌트(`@repo/ui`)
- Turborepo(워크스페이스/캐싱), Vercel(배포)

### 아키텍처/품질

- 공용 패키지로 스타일/토큰/린트/TS 설정을 통합하여 일관성 확보
- JSON 기반 콘텐츠 로딩(`apps/resume/src/_contents/**`)으로 무코드 업데이트 가능
- 접근성/시멘틱 마크업 및 외부 링크 보안 속성(`rel="noopener noreferrer"`) 준수

### 컨벤션

- 커밋: Conventional Commits 권장 (feat, fix, chore, refactor 등)
- 코드 스타일: Prettier + ESLint
- 네이밍: 축약 지양, 의미 있는 이름 사용

### 라이선스

개인 포트폴리오 목적의 공개 저장소입니다. 별도 명시가 없는 한 MIT 호환 라이선스를 따릅니다.
