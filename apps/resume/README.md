## Resume App (Next.js)

개인 이력서 웹앱입니다. 콘텐츠는 JSON으로 분리되어 있으며, 공용 UI(`@repo/ui`)와 테마(`@repo/theme`)를 사용합니다.

### 실행

```bash
# 앱 디렉토리로 이동
cd apps/resume

# 개발 서버
npm run dev
```

### 폴더 구조(요약)

- `src/app`: Next.js App Router 엔트리(`layout.tsx`, `page.tsx` 등)
- `src/_components`: 이력서 섹션 UI 컴포넌트(예: `Activity`, `Education`)
- `src/_contents`: 섹션별 콘텐츠(JSON)와 로더
- `src/context/ThemeProvider.tsx`: 테마 Provider 및 레이아웃 래핑

### 콘텐츠 관리

`src/_contents/**/sample.data.json`을 참고해 동일 구조의 `data.json`을 생성하면 바로 반영됩니다.

예) `Activity`

```text
src/_contents/Activity/
  ├─ sample.data.json   # 샘플 스키마 참고용
  ├─ data.json          # 실제 사용 데이터(없으면 샘플로 대체되도록 구성 가능)
  └─ index.ts           # 타입/로더
```

필드 예시(`Activity`):

- `title`: 활동명
- `startDate` / `endDate`: `YYYY.MM` 형식 권장
- `link`: 외부 링크(선택)
- `description`: 요약
- `experience`: 불릿 리스트(텍스트/하이라이트 등)

### UI/테마

- 공용 컴포넌트: `@repo/ui`의 `Section`, `Heading`, `Description`, `BulletList`, `DateText`, `Link` 등 사용
- 스타일: Emotion 기반, 디자인 토큰은 `@repo/theme` 제공
- 앱 레벨 테마 Provider: `src/context/ThemeProvider.tsx`

### 타입/경로 별칭

- `tsconfig.json`에서 `@/* -> ./src/*` 별칭 사용
- 콘텐츠/컴포넌트 임포트 시 별칭 경로 사용을 권장합니다.

### 접근성/보안 가이드

- 시멘틱 마크업(`section`, `h*`, `ul/li`) 준수
- 외부 링크는 `target="_blank" rel="noopener noreferrer"`
- 아이콘/이미지에는 대체 텍스트 제공

### 라이선스

개인 포트폴리오 목적의 공개 저장소입니다. 별도 명시가 없는 한 MIT 호환 라이선스를 따릅니다.
